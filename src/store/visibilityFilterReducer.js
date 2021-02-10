import { createSlice } from '@reduxjs/toolkit';



// enum
export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

const visibilityFilterSlice = createSlice({
  name: 'visibilityFilterReducer',
  initialState: visibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => {
      console.log(action.payload);

      return (state = action.payload);
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;
export const visibilityFilterReducer = visibilityFilterSlice.reducer;
