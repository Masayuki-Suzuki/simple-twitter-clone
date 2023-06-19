import React from 'react'

export type TrendHeaderProps = {
    caption: string
    title: string
}

const TrendHeader = ({caption, title}: TrendHeaderProps) => (
    <div className="trend-feature__wrapper">
        <p className="trend-caption text-trend-caption mb-1">{ caption }</p>
        <h4 className="text-emphasise font-bold">{ title }</h4>
    </div>
)

export default TrendHeader
