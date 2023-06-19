import React from 'react'
import TrendHeader from './TrendHeader'

const TrendFeature = () => (
    <div className="trend-feature py-8 flex justify-between cursor-pointer hover:bg-gray-300">
        <TrendHeader caption="motor sport · 2hours ago" title="Canadian GP" />
        <div className="trend-feature__image rounded-lg overflow-hidden">
            <img className="object-cover min-h-full min-w-full" src="/Circuit_Gilles_Villeneuve.jpg" />
        </div>
    </div>
)

export default TrendFeature
