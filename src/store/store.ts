import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filters/filtersSlice';
import timelineReducer from './features/timeline/timelineSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    timeline: timelineReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;