import React from 'react'
import TrendHeader, { TrendHeaderProps } from './TrendHeader'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const TrendCommon = ({ caption, title, count }: TrendHeaderProps) => (
    <div className="trend-common px-3 py-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
        <div className="flex justify-between">
            <TrendHeader caption={caption} title={title} count={count} />
            <div className="trend-common__action">
                <MoreHorizIcon className="text-gray-400"/>
            </div>
        </div>
        <p className="text-trend-caption"></p>
    </div>
)

export default TrendCommon
