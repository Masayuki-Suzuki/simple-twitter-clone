import React from 'react'
import WidgetBox from '../utilities/WidgetBox'
import TrendFeature from './TrendFeature'
import { TrendHeaderProps } from './TrendHeader'
import TrendCommon from './TrendCommon'

const TREND_MOCK: TrendHeaderProps[] = [
    {
        caption: 'Trending in Canada',
        title: 'Justin Trudeau',
        count: '999K'
    },
    {
        caption: 'Trending',
        title: 'React',
        count: '888k'
    },
    {
        caption: 'Trending',
        title: 'Typescript',
        count: '777K'
    },
]

const getTrendElement = ():React.ReactNode => {
    if(Array.isArray(TREND_MOCK) && TREND_MOCK.length) {
        return TREND_MOCK.map(elm => (
            <TrendCommon
                caption={elm.caption}
                title={elm.title}
                count={elm.count}
                key={elm.title}
            />
        ))
    }
    return null
}

const TrendWidget = () => (
    <WidgetBox noPadding>
        <h3 className="text-widget-title px-3 pt-3 pb-4">What's happening</h3>
        <TrendFeature />
        {getTrendElement()}
        <div className="trend-readmore px-3 py-4 hover:bg-gray-200 transition-colors duration-300">
            <a className="no-underline text-body font-medium text-tw-blue" href="#">Show more</a>
        </div>
    </WidgetBox>
)

export default TrendWidget
