import { createSlice } from '@reduxjs/toolkit';

const addRecord = (state, { payload }) => [...state, payload];

const score = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    inputName: addRecord,
  },
});

export default { score };
