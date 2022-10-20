import { createSlice } from '@reduxjs/toolkit'

interface GameState {
    games: any;
	player: any;
}

const initialState: GameState = {
    games: null,
	player: null
}

export const GameSlice = createSlice({
	name: 'gamesData',
  initialState,
  reducers: {
    setGamesData: (state, payload) => {
      state.games = payload.payload
    },
	setPlayerData: (state, payload) => {
		state.player = payload.payload
	}
  }
})

export const { setGamesData, setPlayerData } = GameSlice.actions

export default GameSlice.reducer