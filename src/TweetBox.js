import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState('');
    const[tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('tweets').add({

            displayName: 'VIVEK K J',
            Username: 'iamvivekkj',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.ibb.co/4K5HHgw/Untitled.png'
        });

        setTweetMessage("");
        setTweetImage("");

    };

    return (
        <div className='tweetBox' >
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://i.ibb.co/4K5HHgw/Untitled.png"/>
                    <input value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                     placeholder="What's happening?" type="text" ></input>
                </div>
                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
               className="tweetBox__Imageinput" placeholder="Optional: Enter Image URL For image input"/>
            <Button onClick={sendTweet}  type='submit' className='tweetBox__tweetButton' disabled={tweetMessage.length<1}>Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
