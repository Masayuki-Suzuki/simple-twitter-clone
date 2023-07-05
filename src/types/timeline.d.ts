import { Nullable } from './utilities'

export type PostProps = {
    userName: string
    isVerified: boolean
    userId: string
    postedAt: string
    body: string
    imageURL: Nullable<string>
}
