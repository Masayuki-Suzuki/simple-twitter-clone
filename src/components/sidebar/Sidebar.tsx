import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import TwitterButton from './TweetButton'

type SidebarOptionsType = {
    label: string
    icon: React.ReactNode
}

const sidebarOptions: SidebarOptionsType[] = [
    {
        label: 'home',
        icon: <HomeIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Explore',
        icon: <Grid3x3Icon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Notifications',
        icon: <NotificationsNoneIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Messages',
        icon: <MailOutlineIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Lists',
        icon: <ListAltIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Bookmarks',
        icon: <BookmarkBorderIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'Profile',
        icon: <PermIdentityIcon fontSize="inherit" className="sidebar__icon"/>
    },
    {
        label: 'More',
        icon: <MoreHorizIcon fontSize="inherit" className="sidebar__icon"/>
    }
]
const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col items-end relative flex-grow flex-shrink-0 z-10">
            <div className="sidebar__wrapper flex flex-col flex-shrink-0 relative ">
                <div className="sidebar__container fixed top-0 h-full flex flex-col justify-between flex-shrink-0 px-2">
                    <nav className="sidebar__menu flex-start">
                        <div className="sidebar__item flex items-center leading-none capitalize px-3">
                            <span className="sidebar__icon">
                                <TwitterIcon fontSize="inherit" className="sidebar__twitter-icon text-tw-blue"/>
                            </span>
                        </div>
                        {sidebarOptions.map(item => (
                            <SidebarOption label={item.label}>
                                {item.icon}
                            </SidebarOption>
                        ))}
                        <TwitterButton/>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
