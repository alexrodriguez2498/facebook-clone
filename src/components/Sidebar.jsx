import React from 'react'
import '../styles/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHopsitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StoreFrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src="" title="alex rodriguez"/>
      <SidebarRow Icon={LocalHopsitalIcon} title="COVID-19 Information Center"/>

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
}

export default Sidebar
