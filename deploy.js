var cmd = require('node-cmd');
var path, ssh, fs;
fs = require('fs');
path = require('path');
const { NodeSSH } = require('node-ssh');
ssh = new NodeSSH();

const info = {
    user: 'collection',
    tempFolder: 'tatewbs-temp',
    folder: 'tatewbs-frontend',
    project: 'tatewbs'
};

// the method that starts the deployment process
const main = () => {
    console.log('Deployment started.');
    sshConnect();
}

// installs PM2 and serve
const installPM2 = () => {
    return ssh.execCommand(
        'sudo npm install pm2 -g && sudo npm install serve -g', {
        cwd: `/home/${info.user}`
    });
}

// transfers local project to the remote server
const transferProjectToRemote = (failed, successful) => {
    return ssh.putDirectory(
        `../${info.folder}`,
        `/home/${info.user}/${info.project}/${info.tempFolder}`,
        {
            recursive: true,
            concurrency: 1,
            validate: (itemPath) => {
                const baseName = path.basename(itemPath);
                return (
                    baseName.substr(0, 1, 2) !== '.' && baseName !== 'node_modules' && baseName !== 'build' && baseName !== 'package-lock.json' && baseName !== 'README.md' && baseName !== 'deploy.js' // do not allow dot files
                ); // do not allow node_modules
            },
            tick: (localPath, remotePath, error) => {
                if (error) {
                    failed.push(localPath);
                    console.log(`failed.push: ${localPath}`);
                } else {
                    successful.push(localPath);
                    console.log(`successful.push: ${localPath}`);
                }
            }
        }
    );
}

// creates a temporary folder on the remote server
const createRemoteTempFolder = () => {
    return ssh.execCommand(
        `rm -rf ${info.tempFolder} && mkdir ${info.tempFolder}`, {
        cwd: `/home/${info.user}/${info.project}`
    });
}

// stops mongodb and node services on the remote server
const stopRemoteServices = () => {
    return ssh.execCommand(
        'pm2 stop app.config.json', {
        cwd: `/home/${info.user}/${info.project}`
    });
}

// updates the project source on the server
const updateRemoteApp = () => {
    return ssh.execCommand(
        `rm -rf ${info.folder} && mkdir ${info.folder} && cp -r ${info.tempFolder}/build/* ${info.folder}/ && rm -rf ${info.tempFolder}`, {
        cwd: `/home/${info.user}/${info.project}`
    });
}

// restart mongodb and node services on the remote server
const restartRemoteServices = () => {
    return ssh.execCommand(
        'pm2 start app.config.json', {
        cwd: `/home/${info.user}/${info.project}`
    });
}

const compileSource = () => {
    return ssh.execCommand(
        'npm i && npm run build', {
        cwd: `/home/${info.user}/${info.project}/${info.tempFolder}`
    }
    );
}

// creates .env variables for production project
const envVariables = () => {
    return ssh.execCommand(
        `touch .env && 
         echo \"REACT_APP_API=https://api.tatewbs.com\" >> .env
         echo \"GENERATE_SOURCEMAP=false\" >> .env 
         `, {
        cwd: `/home/${info.user}/${info.project}/${info.tempFolder}`
    });
}

// connect to the remote server
const sshConnect = () => {
    console.log('Connecting to the server...');

    ssh
        .connect({
            // TODO: ADD YOUR IP ADDRESS BELOW (e.g. '12.34.5.67')
            host: '108.175.13.41',
            username: 'collection',
            password: 'Jg0hA3%K6I'
        })
        .then(() => {
            console.log('SSH Connection established.');
            console.log('Installing PM2...');
            return installPM2();
        })
        .then(() => {
            console.log(`Creating '${info.folder} folder.`);
            return createRemoteTempFolder();
        })
        .then((result) => {
            const failed = [];
            const successful = [];
            if (result.stdout) {
                console.log(`STDOUT: ${result.stdout}`);
            }
            if (result.stderr) {
                console.log(`STDERR: ${result.stderr}`);
                return Promise.reject(result.stderr);
            }
            console.log('Transferring files to remote server...');
            return transferProjectToRemote(failed, successful);
        })
        .then((status) => {
            if (status) {
                console.log('Creating environment variables...');
                return envVariables();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then((status) => {
            if (status) {
                console.log('Compiling source folder...');
                return compileSource();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then((status) => {
            if (status) {
                console.log('Stopping remote services.');
                return stopRemoteServices();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then((status) => {
            if (status) {
                console.log('Updating remote app.');
                return updateRemoteApp();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then((status) => {
            if (status) {
                console.log('Restarting remote services...');
                return restartRemoteServices();
            } else {
                return Promise.reject(failed.join(', '));
            }
        })
        .then(() => {
            console.log('DEPLOYMENT COMPLETE!');
            process.exit(0);
        })
        .catch(e => {
            console.error(e);
            process.exit(1);
        });
}

main();