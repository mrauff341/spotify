import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: "",
}

export const userToken = createSlice({
    name: 'uToken',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token += action.payload
        },
    },
})

export const {saveToken} = userToken.actions
export default userToken.reducer