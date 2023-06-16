import React from 'react'

type WidgetBoxProps = {
    customClass?: string
    children: React.ReactNode
}

const widgetBox = ({customClass, children}: WidgetBoxProps) => {
    let className = 'bg-tw-bg-lite rounded-2xl p-3'

    if (customClass) {
        className += ` ${customClass}`
    }

    return (
        <div className={className}>
            { children }
        </div>
    )
}

export default widgetBox
