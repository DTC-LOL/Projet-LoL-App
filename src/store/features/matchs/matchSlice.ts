import { createSlice } from '@reduxjs/toolkit'
import {IGameData } from '@typesDef/match';

// Define a type for the slice state
interface MatchState {
    matchs: Array<any>;
}

// Define the initial state using that type
const initialState: MatchState = {
    matchs: [],
}

export const MatchSlice = createSlice({
	name: 'matchs',
  initialState,
  reducers: {
    setMatchs: (state, payload) => {
      state.matchs = [...state.matchs, payload]
    },

  }
})

export const { setMatchs } = MatchSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const getSelectedFilter = (state: RootState) => state.filters.selectedFilter

export default MatchSlice.reducer