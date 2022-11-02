import React, { useEffect } from 'react';
import Axios from 'axios';




const Discord = () => {
    const api = process.env.REACT_APP_API;

    const getDiscordData = async () => {
        await Axios.get(`${api}/discord`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    // setName(res.data.name);
                    // setInvite(res.data.invite);
                    // setMembers(res.data.members);
                    // setOnline(res.data.online);
                }
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    useEffect(() => {
        getDiscordData();
    }, []);
    return (
        <>
            discord
        </>
    )
}



export default Discord;