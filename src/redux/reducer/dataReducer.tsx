import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  dataAns: string[],
  quesInfo: string[]
}

// Define the initial state using that type
const initialState: CounterState = {
  dataAns: [],
  quesInfo: []

}

export const sliceData = createSlice({
  name: 'getAnswer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    ansData: (state, action: PayloadAction<string>) => {
      state.dataAns = [ ...state.dataAns, action.payload]
    },
    emptyData: (state, action: PayloadAction<string>) => {
        state.dataAns = []
      },

    saveData: (state, action: PayloadAction<string>) => {
        state.quesInfo = [...state.quesInfo, action.payload]
      },

    emptyQuesData: (state, action: PayloadAction<string>) => {
        state.quesInfo = []
      },
    
  }
})

export const { ansData, emptyData, saveData, emptyQuesData } = sliceData.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.dataReducer.dataAns

export default sliceData.reducer