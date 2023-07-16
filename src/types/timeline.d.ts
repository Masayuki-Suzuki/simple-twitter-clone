import { Nullable } from './utilities'
import { Timestamp } from 'firebase/firestore'

export type PostData = {
    ID: string
    userName: string
    isVerified: boolean
    userId: string
    postedAt: Timestamp
    body: string
    imageURL: Nullable<string>
}

export type PostProps = Omit<PostData, 'ID'>
