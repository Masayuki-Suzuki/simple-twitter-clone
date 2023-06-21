import React from 'react'
import WidgetBox from '../utilities/WidgetBox'
import WhoToFollowItem, { WhoToFollowItemProps } from './WhoToFollowItem'

const USERS_MOCK: WhoToFollowItemProps[] = [
    {
        userID: 'userID002',
        userName: 'User Name 2',
    },
    {
        userID: 'userID003',
        userName: 'User Name 3',
    },
    {
        userID: 'userID004',
        userName: 'User Name 4',
    },
]

const getItemList = () => {
    if(Array.isArray(USERS_MOCK) && USERS_MOCK.length) {
        return USERS_MOCK.map(item => (
            <WhoToFollowItem userName={item.userName} userID={item.userID} />
        ))
    }
    return null
}

const whoToFollow = () => (
    <WidgetBox noPadding>
        <div className="who-to-follow">
            <h3 className="text-widget-title px-3 pt-3 pb-4">Who to follow</h3>
            { getItemList() }
            <div className="px-3 py-4 hover:bg-gray-200 transition-colors duration-300">
                <a className="no-underline text-body font-medium text-tw-blue" href="#">Show more</a>
            </div>
        </div>
    </WidgetBox>
)

export default whoToFollow
