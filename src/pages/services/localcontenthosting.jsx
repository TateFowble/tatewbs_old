import React, { useEffect } from 'react';






const LocalContentHosting = () => {
    useEffect(() => {
        document.title = `TateWBS | Local Content Hosting`;
        window.scrollTo(0, 0);
    },[]);
    return (
        <div>
            Local Page
        </div>
    )
}

export default LocalContentHosting;