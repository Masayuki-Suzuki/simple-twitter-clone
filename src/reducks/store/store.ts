import { fetchStatus } from '../fetchStatus/slices'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        fetchStatus
    }
})
