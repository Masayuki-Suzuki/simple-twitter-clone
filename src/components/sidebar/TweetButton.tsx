import React from 'react'
import { Button } from '@mui/material'

const TweetButton = () => {
    return (
        <div className="sidebar__tweet w-full py-3">
            <Button size="large" variant="contained" className="sidebar__tweet-btn">
                Tweet
            </Button>
        </div>
    )
}

export default TweetButton
