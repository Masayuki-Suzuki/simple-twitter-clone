import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpCard from './SignUpCard'

const SignUpPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) {
            navigate('/')
        }
    }, [])

    return (
        <SignUpCard />
    )
}

export default SignUpPage
