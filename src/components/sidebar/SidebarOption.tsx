import React, { FC } from 'react'

type SidebarOptionProps = {
    label: string
    isActive: boolean
    children: React.ReactNode
}

const SidebarOption: FC<SidebarOptionProps> = ({ label, isActive, children }) => {
    const className = `sidebar__item-label mx-4 ${isActive ? 'font-bold' : 'font-medium'}`

    return (
        <div className="sidebar__item inline-flex items-center leading-none capitalize p-3">
            <span className="sidebar__icon">{children}</span>
            <span className={className}>{label}</span>
        </div>
    )
}

export default SidebarOption
