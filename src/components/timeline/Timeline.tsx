import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'

const TimeLine = () => (
    <div className="timeline border-x border-tw-gray flex-grow">
        <div className="timeline__header sticky z-30 top-0 border-b border-tw-gray">
            <h2 className="timeline__header-heading leading-none p-4">
                Home
            </h2>
        </div>
        <div className="timeline__container">
            <TweetBox />
            <div className="posts">
                <Post />
            </div>
        </div>
    </div>
)

export default TimeLine
