import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'

// Define a type for the slice state
interface FiltersState {
    selectedFilter: string
    isVisibleBuilding: boolean
}

// Define the initial state using that type
const initialState: FiltersState = {
    selectedFilter: "",
    isVisibleBuilding: false,
}

export const filtersSlice = createSlice({
  name: 'filters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload
    },
    setIsVisibleBuilding: (state, action: PayloadAction<boolean>) => {
      state.isVisibleBuilding = action.payload
    }
  }
})

export const { setActiveFilter } = filtersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getSelectedFilter = (state: RootState) => state.filters.selectedFilter

export default filtersSlice.reducer