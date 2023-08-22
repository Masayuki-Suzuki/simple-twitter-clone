import React from 'react'
import { TextField } from '@mui/material'
import { Nullable } from '../../types/utilities'

type CommonInputFieldPropsType = {
    inputType: 'email' | 'password' | 'text'
    label: string
    placeholder: string
    onInputAction: React.ChangeEventHandler<HTMLInputElement>
    mt: number
    isRequired: boolean
    name: string
    value: string
    error: Nullable<string>
}

const CommonInputField = ({
    inputType,
    label,
    placeholder,
    onInputAction,
    mt,
    isRequired,
    name,
    value,
    error
}: CommonInputFieldPropsType) => {
    const marginTop = `${mt * 4}px`
    const err = !!error

    return (
        <div style={{ marginTop }}>
            <TextField
                label={label}
                required={isRequired}
                error={err}
                onChange={onInputAction}
                placeholder={placeholder}
                name={name}
                value={value}
                type={inputType}
                inputProps={{ maxLength: 50 }}
            />
            {error ? (
                <p className="text-body text-default text-red-700 font-semibold mt-2 mb-3">
                    {error}
                </p>
            ) : null}
        </div>
    )
}

export default CommonInputField
