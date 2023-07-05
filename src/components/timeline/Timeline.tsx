import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import { PostProps } from '../../types/timeline'

const POST_MOCK: PostProps[] = [
    {
        userName: 'User Name 1',
        userId: 'User_ID_1',
        isVerified: true,
        postedAt: 'now',
        body: 'Reactなう(古)',
        imageURL: 'https://source.unsplash.com/featured'
    }
]

const getPostElements = () => {
    // Add functionality to get post data from API

    if (Array.isArray(POST_MOCK) && POST_MOCK.length) {
        return POST_MOCK.map(elm => (
            <Post
                userId={elm.userId}
                userName={elm.userName}
                isVerified={elm.isVerified}
                body={elm.body}
                postedAt={elm.postedAt}
                imageURL={elm.imageURL}
            />
        ))
    }
    return null
}

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
                { getPostElements() }
            </div>
        </div>
    </div>
)

export default TimeLine
