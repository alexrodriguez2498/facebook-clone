import React from 'react'
import '../styles/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Falex__profile.jpg?alt=media&token=b90c67c7-893e-4585-9d50-7859ad342325"
        message="hello worlds"
        timestamp="timestamp"
        username="alex rodriguez"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
        />
    </div>
  )
}

export default Feed
