import React from 'react'

type WidgetBoxProps = {
    customClass?: string
    children: React.ReactNode
    noPadding?: boolean
}

const widgetBox = ({customClass, children, noPadding}: WidgetBoxProps) => {
    let className = 'bg-tw-bg-lite rounded-2xl overflow-hidden'

    if (!noPadding) {
        className += ' p-3'
    }

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
