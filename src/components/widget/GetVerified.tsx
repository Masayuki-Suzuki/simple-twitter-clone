import React from 'react'
import WidgetBox from '../utilities/WidgetBox'
import { Button } from '@mui/material'


const getVerified = () => (
    <WidgetBox customClass="widget__get-verified">
        <h3 className="get-verified__title text-widget-title">Get Verified</h3>
        <p className="get-verified__desc text-emphasise my-3">Subscribe to unlock new features.</p>
        <Button
            size="large"
            variant="contained"
            type="submit"
            className="get-verified__button mt-2"
        >
            Get Verified
        </Button>
    </WidgetBox>
)

export default getVerified
