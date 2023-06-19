import React from 'react'
import WidgetBox from '../utilities/WidgetBox'
import TrendFeature from './TrendFeature'
import { TrendHeaderProps } from './TrendHeader'
import TrendCommon from './TrendCommon'

const TREND_MOCK: TrendHeaderProps[] = [
    {
        caption: 'Trending in Canada',
        title: 'Justin Trudeau'
    },
    {
        caption: 'Trending',
        title: 'React'
    },
    {
        caption: 'Trending',
        title: 'Typescript'
    },
    {
        caption: 'Trending',
        title: 'Golang'
    }
]

const getTrendElement = ():React.ReactNode => {
    if(Array.isArray(TREND_MOCK) && TREND_MOCK.length) {
        return TREND_MOCK.map(elm => <TrendCommon caption={elm.caption} title={elm.title} />)
    }
    return null
}

const TrendWidget = () => (
    <WidgetBox>
        <h3 className="text-widget-title">What's happening</h3>
        <TrendFeature />
        {getTrendElement()}
    </WidgetBox>
)

export default TrendWidget
