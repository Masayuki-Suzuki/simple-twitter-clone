import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Button } from '@mui/material'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase'
import { PostData } from '../../types/timeline'
import { Nullable } from '../../types/utilities'

type TweetEditorProps = {
    focused: boolean
    onClickEvent: () => void
    dummyAreaRef: React.RefObject<HTMLDivElement>
    textAreaRef: React.RefObject<HTMLTextAreaElement>
}

const TweetEditor = ({focused, onClickEvent, dummyAreaRef, textAreaRef}: TweetEditorProps) => {
    if (focused) {
        return (
            <div className="block">
                <Avatar className="mr-4 mb-2"/>
                <div className="pl-12 relative pb-4">
                    <div ref={dummyAreaRef}
                         className="tweet-editor__dummy overflow-hidden invisible whitespace-pre-wrap break-words wrap"
                         aria-hidden="true"
                    ></div>
                    <textarea
                        ref={textAreaRef}
                        className="tweet-editor__textarea outline-0 absolute top-0 block overflow-hidden h-full"
                        placeholder="What is happening?!"
                        maxLength={280}
                    ></textarea>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center" onClick={onClickEvent}>
            <Avatar className="mr-2"/>
            <h3 className="w-full text-gray-400 tweet-editor__textarea">What is happening?!</h3>
        </div>
    )
}

const TweetBox = () => {
    const [focused, setFocused] = useState(false)
    const [tweet, setTweet] = useState("")
    const [imageURL, setImageURL] = useState<Nullable<string>>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const dummyAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(textAreaRef && textAreaRef.current) {
            textAreaRef.current.focus()
            textAreaRef.current.addEventListener('input', e => {
                if(dummyAreaRef && dummyAreaRef.current && e.target instanceof HTMLTextAreaElement) {
                    dummyAreaRef.current.textContent = e.target.value + '\u200b'
                }
                if(e.target instanceof HTMLTextAreaElement) {
                    setTweet(e.target.value)
                }
            })
        }
    }, [focused])

    const onClickEvent = () => {
        setFocused(true)
    }

    const resetTweetBox = () => {
        setTweet('')
        setImageURL(null)
        setFocused(false)
    }

    const sendTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const postTweet = async () => {
            const postData: PostData = {
                ID: uuidv4(),
                userId: 'User_ID_1',
                userName: 'User Name 1',
                isVerified: true,
                body: tweet,
                postedAt: Timestamp.fromDate(new Date()),
                imageURL,
                avatar: ''
            }

            await addDoc(collection(db, 'posts'), postData)
            resetTweetBox()
        }

        void postTweet()
    }

    return (
        <div className="tweet-box px-4 pt-4 border-b border-tw-gray">
            <form>
                <TweetEditor
                    focused={focused}
                    onClickEvent={onClickEvent}
                    dummyAreaRef={dummyAreaRef}
                    textAreaRef={textAreaRef}
                />
                <div className="tweet-box__image-input flex py-4 pl-12">
                    <input
                        onChange={e => setImageURL(e.target.value)}
                        className="tweet-box__image-input w-full outline-0"
                        placeholder="Input here the URL of an image."
                    />
                    <Button
                        onClick={sendTweet}
                        size="large"
                        variant="contained"
                        type="submit"
                        className={`tweet-box__tweet ${tweet.length ? null : 'tweet-box__tweet--disabled'}`}
                    >
                        Tweet
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
