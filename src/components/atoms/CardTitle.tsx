import React from 'react'

type CardTitlePropsType = {
    title: string
}

export const CardTitle = ({ title }: CardTitlePropsType) => (
    <h3 className="card-title">{title}</h3>
)
