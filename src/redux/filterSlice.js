import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChangeValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { onChangeValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilters = state => state.filter;
