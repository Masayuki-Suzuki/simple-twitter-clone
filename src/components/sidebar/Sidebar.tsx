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
    isActive: boolean
}

const sidebarOptions: SidebarOptionsType[] = [
    {
        label: 'home',
        icon: <HomeIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: true
    },
    {
        label: 'Explore',
        icon: <Grid3x3Icon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'Notifications',
        icon: <NotificationsNoneIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'Messages',
        icon: <MailOutlineIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'Lists',
        icon: <ListAltIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'Bookmarks',
        icon: <BookmarkBorderIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'Profile',
        icon: <PermIdentityIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    },
    {
        label: 'More',
        icon: <MoreHorizIcon fontSize="inherit" className="sidebar__icon"/>,
        isActive: false
    }
]
const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col items-end relative flex-grow flex-shrink-0 py-0.5 z-10">
            <div className="sidebar__wrapper flex flex-col flex-shrink-0 relative">
                <div className="sidebar__container fixed top-0 h-full flex flex-col justify-between flex-shrink-0 px-2 pt-2">
                    <nav className="sidebar__menu flex-start">
                        <div className="sidebar__item sidebar__item--tw flex items-center justify-center leading-none p-0">
                            <span className="sidebar__icon">
                                <TwitterIcon fontSize="inherit" className="sidebar__twitter-icon text-tw-blue"/>
                            </span>
                        </div>
                        {sidebarOptions.map(item => (
                            <SidebarOption label={item.label} key={item.label} isActive={item.isActive}>
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
