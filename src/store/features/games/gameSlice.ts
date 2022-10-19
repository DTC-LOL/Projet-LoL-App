import { createSlice } from '@reduxjs/toolkit'

interface GameState {
    games: any;
}

const initialState: GameState = {
    games: null,
}

export const GameSlice = createSlice({
	name: 'gamesData',
  initialState,
  reducers: {
    setGamesData: (state, payload) => {
      state.games = payload.payload
    }
  }
})

export const { setGamesData } = GameSlice.actions

export default GameSlice.reducer