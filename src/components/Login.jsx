import React from 'react'
import '../styles/Login.css'
import { auth, provider } from 'firebase'
import { Button } from '@material-ui/core'

const Login = () => {

  const signIn = () => {
    //sign in...
    auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result)
    }).catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-7a29c.appspot.com/o/testing%2FfacbookLogo.png?alt=media&token=60ce9547-fdda-428a-9447-db1f50293117" 
          alt=""
          />

          <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
          alt=""
          />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login 