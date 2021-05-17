import { React } from 'react';
import './InfoBox.scss';

const InfoBox = (props) => {
    let header = props.header;
    let text = props.text;
    let borderColor = props.borderColor;
    let InfoBoxClass = {
        borderBottom: `0.3em solid ${borderColor}`
    }
    let InfoBoxClassHeader = {
        borderBottom: `0.1em solid ${borderColor}`
    }


    return (
        <div className="fluid-container mt-5 mb-5 p-5 InfoBox" style={InfoBoxClass}>
            <div className="container">
                <h2 className="mb-4" style={InfoBoxClassHeader} className="text-center">{header}</h2>
                <p className="text-center mt-5">{text}</p>
            </div>
        </div>
    )
}

export default InfoBox;