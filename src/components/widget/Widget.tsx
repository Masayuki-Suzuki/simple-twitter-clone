import React from 'react'
import Search from './Search'
import GetVerified from './GetVerified'
import TrendWidget from './Trend'

const Widget = () => (
    <div className="widget h-full p-2 flex flex-col gap-2.5">
        <Search />
        <GetVerified />
        <TrendWidget />
    </div>
)

export default Widget
