import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // SOLUTION RECOMMENDED BY REDUX
    // incremented(state) {
    //   state.value++ // it's immutable due to immer lib
    // }
    incremented(state) {
      return {
        ...state,
        value: state.value + 1
      }
    },
    amountAdded(state, action: PayloadAction<number>) {
      return {
        ...state,
        value: state.value + action.payload
      }
    }
  }
})

// createSlice automatically produces action creators!!!
// so "incremented" is an action creator
export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer
