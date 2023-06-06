import React from 'react'
import { Avatar, Button } from '@mui/material'

const TweetBox = () => (
    <div className="tweet-box">
        <form>
            <Avatar />
            <input type="text" placeholder="What is happening?!"></input>
            <input className="tweet-box__image-input" placeholder="Input here the URL of an image."></input>
            <Button type="submit" className="tweet-box__tweet">Tweet</Button>
        </form>
    </div>
)

export default TweetBox
