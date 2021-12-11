import { React } from 'react';
import { Link } from 'react-router-dom';
import './InfoBox.scss';

const InfoBox = (props) => {
    let header = props.header;
    let text = props.text;
    let borderColor = props.borderColor;
    let buttonText = props.buttonText;
    let buttonLink = props.buttonLink;

    let InfoBoxClass = {
        borderBottom: `0.3em solid ${borderColor}`
    }
    let InfoBoxClassHeader = {
        borderBottom: `0.1em solid ${borderColor}`
    }

    let buttonStuff = (buttonText) => {
        if (buttonText) {
            return (
                <div className="d-flex justify-content-center pt-3">
                    <Link to={buttonLink}><button className="btn btn-light text-center">{buttonText}</button></Link>
                </div>
            )
        }
        else {
            return;
        }
    }
    return (
        <div className="fluid-container p-5 InfoBox" style={InfoBoxClass}>
            <div className="container">
                <h2 className="mb-4"
                    style={InfoBoxClassHeader}
                    className="text-center">
                    {header}</h2>
                <p className="text-center mt-5 fs-4">{text}</p>
                {buttonStuff(buttonText)}
            </div>
        </div>
    )
}

export default InfoBox;