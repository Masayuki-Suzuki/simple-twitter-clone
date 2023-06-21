import React from 'react'
import TrendHeader from './TrendHeader'

const TrendFeature = () => (
    <div className="trend-feature px-3 py-4 flex justify-between cursor-pointer hover:bg-gray-200 transition-colors duration-300">
        <TrendHeader caption="motor sport · 2hours ago" title="Canadian GP" />
        <div className="trend-feature__image rounded-2xl overflow-hidden">
            <img className="object-cover min-h-full min-w-full" src="/Circuit_Gilles_Villeneuve.jpg" />
        </div>
    </div>
)

export default TrendFeature
