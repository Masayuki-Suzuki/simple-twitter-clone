import { RootState } from '../../types/store'

const initialState: RootState = {
    fetchStatus: {
        isLoading: false,
        error: null
    }
}

export default initialState
