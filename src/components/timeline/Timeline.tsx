import React, { ReactElement, useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'
import TweetBox from './TweetBox'
import Post from './Post'
import { PostData } from '../../types/timeline'
import { Nullable } from '../../types/utilities'

type TimeLineDomProps = {
    postElements: Nullable<ReactElement[]>
}

const getPostElements = (postsData: PostData[]): Nullable<ReactElement[]> => {
    if (Array.isArray(postsData) && postsData.length) {
        return postsData.map((elm, index) => (
            <Post
                userId={elm.userId}
                userName={elm.userName}
                isVerified={elm.isVerified}
                body={elm.body}
                postedAt={elm.postedAt}
                imageURL={elm.imageURL}
                key={elm.ID}
            />
        ))
    }
    return null
}

const TimeLineDom = ({ postElements }: TimeLineDomProps) => (
    <div className="timeline border-x border-tw-gray flex-grow">
        <div className="timeline__header sticky z-30 top-0 border-b border-tw-gray">
            <h2 className="timeline__header-heading leading-none p-4">
                Home
            </h2>
        </div>
        <div className="timeline__container">
            <TweetBox />
            <div className="posts">
                { postElements }
            </div>
        </div>
    </div>
)

const TimeLine = () => {
    const [postElements, setPostElements] = useState<Nullable<ReactElement[]>>(null)

    useEffect(() => {
        const getPostData = async () => {
            const collectionData = collection(db, 'posts')
            const queryData = query(collectionData, orderBy('postedAt', 'desc'))
            const querySnapshot = await getDocs(queryData)
            const postsData = querySnapshot.docs.map(doc => doc.data() as PostData)
            setPostElements(getPostElements(postsData))
        }

        void getPostData()
    }, [])

    return (
        <TimeLineDom postElements={postElements} />
    )
}

export default TimeLine
