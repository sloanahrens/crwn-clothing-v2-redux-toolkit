import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload; // this only looks like mutating immutable state, behind the scenes it isn't
    }
  }
})

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;