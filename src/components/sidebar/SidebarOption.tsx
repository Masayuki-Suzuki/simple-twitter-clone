import React, { FC } from 'react'

type SidebarOptionProps = {
    label: string
    children: React.ReactNode
}

const SidebarOption: FC<SidebarOptionProps> = ({ label, children }) => {
    return (
        <div className="sidebar__item flex items-center leading-none capitalize p-3">
            <span className="sidebar__icon">{children}</span>
            <span className="sidebar__item-label mx-4 font-medium">{label}</span>
        </div>
    )
}

export default SidebarOption
