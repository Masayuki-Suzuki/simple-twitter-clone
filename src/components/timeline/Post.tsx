import React from 'react'
import { Avatar } from '@mui/material'
import Verified from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import { PostProps } from '../../types/timeline'

type PostDomProps = {
    postedAt: string
} & Omit<PostProps, 'postedAt'>

const PostDom = ({ userName, isVerified, userId, postedAt, body, imageURL }: PostProps) => (
    <div className="post py-4 pl-4 pr-6 border-b border-tw-gray flex">
        <div className="post__avatar pr-3">
            <Avatar/>
        </div>
        <div className="post__container w-full">
            <div className="post__header flex items-center mb-2">

                <h3 className="post__user-name font-semibold">{userName}</h3>
                {isVerified ? <Verified className="verified-icon mx-1" fontSize="small"/> : null}
                <p className="post__user-id text-gray-500">@{userId}</p>
                <p className="post__date text-gray-500"><span className="px-1.5">·</span>now</p>
            </div>
            <div className="post__body">
                <p className="body__text">
                    {body}
                </p>
                {imageURL ? (
                    <div className="body__image mt-5 overflow-hidden">
                        <img src={imageURL}/>
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
)

const Post = (props: PostProps) => {
    return (
        <PostDom {...props} />
    )
}

export default Post
