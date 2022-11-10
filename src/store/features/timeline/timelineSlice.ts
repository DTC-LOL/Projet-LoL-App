import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TimelineState {
    mediaPlayerState: string,
}

// Define the initial state using that type
const initialState: TimelineState = {
    mediaPlayerState: 'stopped',
}

export const timeLineSlice = createSlice({
  name: 'timeline',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMediaPlayerState: (state, action: PayloadAction<string>) => {
      state.mediaPlayerState = action.payload
    }
  }
})

export const { setMediaPlayerState } = timeLineSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const getSelectedFilter = (state: RootState) => state.filters.selectedFilter

export default timeLineSlice.reducer