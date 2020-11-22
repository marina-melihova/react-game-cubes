import { createSlice } from '@reduxjs/toolkit';

const addRecord = (state, { payload }) => {
  // state.push(payload);
  return [...state, payload];
};

const score = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    inputName: addRecord,
  },
});

export default { score };
