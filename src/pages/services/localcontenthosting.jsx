import React, { useEffect } from 'react';






const LocalContentHosting = () => {
    useEffect(() => {
        document.title = `TateWBS | Local Content Hosting`;
    },[]);
    return (
        <div>
            Local Page
        </div>
    )
}

export default LocalContentHosting;