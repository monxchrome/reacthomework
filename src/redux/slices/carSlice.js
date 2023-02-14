import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services/carService";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    carsForUpdate: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.repsonse.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async({car}, thunkAPI) => {
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, data}, thunkAPI) => {
        try {
            await carService.updateById(id, data)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carsForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload;
                state.cars = items
                state.prev = prev
                state.next = next
            })
})

const {reducer:carReducer, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    update
}

export {
    carReducer,
    carActions,
}