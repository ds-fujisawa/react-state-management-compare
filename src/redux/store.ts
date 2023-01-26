import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: string[] = [];

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => [
      ...state,
      action.payload,
    ],
    delTodo: (state, action: PayloadAction<string>) =>
      state.filter(s => s !== action.payload),
  },
});

export const rootReducer = combineReducers({
  todos: slice.reducer,
});

export type StoreType = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
