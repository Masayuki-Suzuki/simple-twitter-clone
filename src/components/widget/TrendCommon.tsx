import React from 'react'
import TrendHeader, { TrendHeaderProps } from './TrendHeader'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const TrendCommon = ({ caption, title }: TrendHeaderProps) => (
    <div className="trend-common">
        <div className="flex justify-between">
            <TrendHeader caption={caption} title={title}/>
            <div className="trend-common__action">
                <MoreHorizIcon/>
            </div>
        </div>
        <p className="text-trend-caption"></p>
    </div>
)

export default TrendCommon
