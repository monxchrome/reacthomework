import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll()
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]:(state, action) => {
            state.users = action.payload
        },
        [getAll.rejected]:(state, action) => {
            state.loading = false
            state.errors = action.payload
        },
        [getAll.pending]:(state, action) => {
            state.loading = true
        }
    }
})

const {reducer:userReducer, actions:{setSelectedUser}} = userSlice;

const userActions = {
    setSelectedUser,
    getAll
}

export {
    userReducer,
    userActions
}