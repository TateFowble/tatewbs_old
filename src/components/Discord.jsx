import React, { useState, useEffect } from 'react';
import Axios from 'axios';



const Discord = () => {
    const api = process.env.REACT_APP_API;

    const [discord, setDiscord] = useState('');

    const getDiscordData = async () => {
        await Axios.get(`${api}/discord`)
            .then(res => {
                if (res.status === 200) {
                    setDiscord(res.data);
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
        <div id='discord'>
            <div className='d-flex justify-content-center'>
                <a
                    href={discord.invite || '#'}
                    className='text-center'
                    target='_blank'
                    referer='noreferrer'>
                    Connect to {discord.name} now!
                </a>
            </div>
            <p className='fs-4 text-center'>{discord.online} users are online &amp; waiting for you to join</p>
        </div>
    )
}



export default Discord;