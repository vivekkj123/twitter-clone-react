import React from 'react'
import Sidebaroption from './Sidebaroption'
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core/';
import './Sidebar.css';
import './Sidebaroption.css';
function Sidebar(){

    return(
        <div className="Sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
        <Sidebaroption active Icon={HomeIcon} optionlabel="Home"/>
        <Sidebaroption Icon={ExploreIcon} optionlabel="Explore"/>
        <Sidebaroption Icon={NotificationsNoneIcon} optionlabel="Notifications"/>
        <Sidebaroption Icon={MailOutlineIcon} optionlabel="Messages"/>
        <Sidebaroption Icon={BookmarkBorderIcon} optionlabel="Bookmarks"/>
        <Sidebaroption Icon={ListAltIcon} optionlabel="Lists"/>
        <Sidebaroption Icon={AccountCircleIcon} optionlabel="Profile"/>
        <Sidebaroption Icon={MoreHorizIcon} optionlabel="More"/>
        <Button variant='outlined' class='sidebar__tweet'>Tweet</Button>
        </div>
    )
}

export default Sidebar;
