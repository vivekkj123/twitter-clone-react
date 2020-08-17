import React, {useState, useEffect} from 'react';
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("tweets").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <div className='TweetBox'>
        <TweetBox />'
       

        {posts.map(post => (
        <Post 
        displayName={post.displayName}
        Username={post.Username}
        verified={post.verified}
        avatar={post.avatar}
        text={post.text}
        image={post.image}/>
        ))}
        
       
        </div>
        </div>
    )
}

export default Feed
