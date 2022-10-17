import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'

// Define a type for the slice state
interface TimelineState {
    selectedTime: number
}

// Define the initial state using that type
const initialState: TimelineState = {
    selectedTime: 1,
}

export const timeLineSlice = createSlice({
  name: 'timeline',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSelectedTime: (state, action: PayloadAction<number>) => {
      state.selectedTime = action.payload
    },

  }
})

export const { setSelectedTime } = timeLineSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const getSelectedFilter = (state: RootState) => state.filters.selectedFilter

export default timeLineSlice.reducer