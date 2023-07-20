import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import FlipMove from 'react-flip-move'
import { db } from '../../firebase'
import TweetBox from './TweetBox'
import Post from './Post'
import { PostData } from '../../types/timeline'

type TimeLineDomProps = {
    postsData: PostData[]
}
const TimeLineDom = ({ postsData }: TimeLineDomProps) => {
    return (
        <div className="timeline border-x border-tw-gray flex-grow">
            <div className="timeline__header sticky z-30 top-0 border-b border-tw-gray">
                <h2 className="timeline__header-heading leading-none p-4">
                    Home
                </h2>
            </div>
            <div className="timeline__container">
                <TweetBox/>
                <div className="posts">
                    <FlipMove>
                        { postsData.map(data => <Post {...data} key={data.ID} />) }
                    </FlipMove>
                </div>
            </div>
        </div>
    )
}

const TimeLine = () => {
    const [postsData, setPostsData] = useState<PostData[]>([])

    useEffect(() => {
        const getPostData = () => {
            const collectionData = collection(db, 'posts')
            const queryData = query(collectionData, orderBy('postedAt', 'desc'))

            onSnapshot(queryData, querySnapshot => {
                const posts = querySnapshot.docs.map(doc => doc.data() as PostData)
                setPostsData(posts)
            })
        }

        void getPostData()
    }, [])

    return <TimeLineDom postsData={postsData}/>
}

export default TimeLine
