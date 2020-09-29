import React from 'react'
import '../styles/StoryReel.css'
import Story from './Story'

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story 
      image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fmama__story.jpg?alt=media&token=d41276cd-196c-49e2-9a22-173021101940"
      profileSrc= "https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fmama__profile.jpg?alt=media&token=289ee9ce-ca38-49d2-ac3b-83a38f9325f5"
      title="Luz Mariela Carvajal de Rodriguez"
      />
      <Story 
      image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fpapa__story.jpg?alt=media&token=4e1b2d06-0c48-4ad2-986c-4fead66b728b"
      profileSrc="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fpapa__profile.jpg?alt=media&token=0875ff02-2e85-4c32-ac49-cc17f2307a7c"
      title="Luis enrique Rodriguez Lopez"
      />
      <Story 
      image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fluis__story.jpg?alt=media&token=336d8ec0-f17c-4444-b139-5649a1979df6"
      profileSrc="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fluis__profile.jpg?alt=media&token=eedee3a6-c01e-4127-bc52-d8328bc1b522"
      title="Luis Enriquez Rodriguez Carvajal"
      />
      <Story image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fana__story.jpg?alt=media&token=54e7e4e8-a016-46c0-96d4-b01f0474ef71"
      profileSrc="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Fana__profile.jpg?alt=media&token=c074238a-a7c2-43e3-9ee4-9b3a39fdc5eb"
      title="Ana Maria Cultrera"
      />
      <Story 
      image="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Frenzo__story.jpg?alt=media&token=ba33707c-cef0-4188-a774-b047a036b12e"
      profileSrc="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2Frenzo__profile.jpg?alt=media&token=520e0a04-fdc8-438a-914c-8faeb66142df"
      title="Renzo Rodriguez Carvajal"
      />
      
    </div>
  )
}

export default StoryReel
