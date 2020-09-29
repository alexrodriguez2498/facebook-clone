import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StoreFrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SuperviseUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'



function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-facebook_f_logo_$282019%29.svg.png" alt="facebook logo"
        />
        <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize='large'/>
        </div>
        <div className="header__option">
          <FlagIcon fontSize='large'/>
        </div>
        <div className="header__option">
          <SubscriptionOutlinedIcon fontSize='large'/>
        </div>
        <div className="header__option">
          <StoreFrontOutlinedIcon fontSize='large'/>
        </div>
        <div className="header__option">
          <SuperviseUserCircleIcon fontSize='large'/>
        </div>
        
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Alex Rodriguez</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
