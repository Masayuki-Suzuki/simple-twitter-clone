import React, { useEffect, useState, forwardRef, Ref } from 'react'
import { Avatar } from '@mui/material'
import Verified from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { PostProps } from '../../types/timeline'

type PostDomProps = {
    postedAt: string
} & Omit<PostProps, 'postedAt'>

// @ts-ignore
const PostDom = forwardRef(
    ({ userName, isVerified, userId, postedAt, body, imageURL, avatar }: PostDomProps,
     ref: Ref<HTMLDivElement> | undefined
    ) => (
    <div className="post py-4 pl-4 pr-6 border-b border-tw-gray flex" ref={ref}>
        <div className="post__avatar pr-3">
            <Avatar src={avatar}/>
        </div>
        <div className="post__container w-full">
            <div className="post__header flex items-center mb-2">

                <h3 className="post__user-name font-semibold">{userName}</h3>
                {isVerified ? <Verified className="verified-icon mx-1" fontSize="small"/> : null}
                <p className="post__user-id text-gray-500">@{userId}</p>
                <p className="post__date text-gray-500"><span className="px-1.5">·</span>{postedAt}</p>
            </div>
            <div className="post__body">
                <p className="body__text">
                    {body}
                </p>
                {imageURL ? (
                    <div className="body__image mt-5 overflow-hidden">
                        <img src={imageURL} alt="" />
                    </div>
                ) : null}
            </div>
            <div className="post__footer flex items-center justify-between mt-4 w-full">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatOutlinedIcon fontSize="small"/>
                <FavoriteBorderOutlinedIcon fontSize="small"/>
                <IosShareOutlinedIcon fontSize="small"/>
            </div>
        </div>
    </div>
))

const Post = forwardRef((props: PostProps, ref: Ref<HTMLDivElement> | undefined) => {
    const [postedAt, setPostedAt] = useState('now')
    const postData = {...props, postedAt}
    const getPostedAt = () => {
        const timeStamp = props.postedAt.toDate()
        const result = formatDistanceToNowStrict(timeStamp)
        if (result.includes('day') || result.includes('month') || result.includes('year') ) {
            if(result === '1 day') {
                setPostedAt('1d')
            } else if (result.includes('year')) {
                setPostedAt(format(timeStamp, 'LLL dd, yyyy'))
            } else {
                setPostedAt(format(timeStamp, 'LLL dd'))
            }
        } else {
            if (result === '0 seconds' || result === '1 seconds') {
                setPostedAt('now')
            }
            let formattedPostedAt = result.replace(/\sseconds?/, 's')
            formattedPostedAt = formattedPostedAt.replace(/\sminutes?/, 'm')
            formattedPostedAt = formattedPostedAt.replace(/\shours?/, 'h')
            setPostedAt(formattedPostedAt)
        }
    }

    useEffect(() => {
        getPostedAt()
    }, [])

    return (
        <PostDom {...postData} ref={ref} />
    )
})

export default Post
