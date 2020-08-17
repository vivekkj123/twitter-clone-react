import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
function Post({avatar, displayName, verified, Username, text, image}) {
    
    return (
        <div className='post' >
            <div className='avatar'>

                <Avatar src={avatar} className='post__Avatar'/>
            </div>
            <div className='post__body'>
                <div className="post__header">
                    <div className='post__headerText'>
                    <h3>{displayName}
                    <span className='post__headerSpecial'> 
    {verified && <VerifiedUserRoundedIcon className='post__badge' />}@{Username}</span>
                    </h3></div>
                    <div className='post__headerDescription'>
                        <p>{text} </p>
                    </div>
                </div>
                <img src={image} alt=''/>
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontsize='small'/>
                    <RepeatIcon fontsize='small'/>
                    <FavoriteBorderIcon fontsize='small'/>
                    <PublishIcon fontsize='small'/>
                 </div>
            </div>
         
        </div>
           
        
     
    )
}

export default Post
