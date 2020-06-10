/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { RootState } from 'app/rootReducer'

export const fetchUserById = createAsyncThunk<
  // Return type of the payload creator
  number,
  // First argument to the payload creator
  number,
  {
    extra: {
      jwt: string
    }
    rejectValue: number
  }
>('users/fetchById', async (userId, thunkApi) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
  })

  return 20

  return thunkApi.rejectWithValue(await response.json())
})

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state): CounterState => {
      state.value += 1
      return state
    },
    decrement: (state): CounterState => {
      state.value -= 1
      return state
    },
    incrementByAmount: (state, action: PayloadAction<number>): CounterState => {
      state.value += action.payload
      return state
    },
    loadAmount: (): void => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(action.payload)
      state.value = 10
    })
    builder.addCase(fetchUserById.rejected, (state, action) => {
      console.log(action.payload)
      state.value = 0
    })
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  loadAmount,
} = counterSlice.actions

export const valueSelector = createSelector<RootState, number, number>(
  (state) => state.counter.value,
  (value) => value + 10,
)

export default counterSlice.reducer
