import React from 'react'
import { Avatar, Button } from '@mui/material'

export type WhoToFollowItemProps = {
    userName: string
    userID: string
    avatar?: string
}

const whoToFollowItem = ({userID, userName}:WhoToFollowItemProps) => {
    return (
        <div className="who-to-follow__item flex items-center justify-between p-3 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
            <div className="who-to-follow__avatar">
                <Avatar />
            </div>
            <div className="who-to-follow__user-data justify-self-start ml-4 mr-auto">
                <h3 className="font-bold">{ userName }</h3>
                <p className="text-gray-500 font-medium">{ userID }</p>
            </div>
            <Button
                size="large"
                variant="contained"
                type="submit"
                className="get-verified__button mt-2"
            >
                follow
            </Button>
        </div>
    )
}

export default whoToFollowItem
