import React from 'react'
import { InputLabel } from '@mui/material'

type ConfirmFieldPropsType = {
    label: string
    mt: number
    email: string
}

const ConfirmField = ({ mt, label, email }: ConfirmFieldPropsType) => {
    const marginTop = `${mt * 4}px`
    return (
        <div style={{ marginTop }}>
            <InputLabel className="capitalize text-gray-600 font-semibold">{ label }</InputLabel>
            <p className="text-xl leading-tight font-normal text-gray-500" style={{minHeight: 30}}>{ email }</p>
        </div>
    )
}

export default ConfirmField
