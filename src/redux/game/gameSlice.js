import { createSlice } from '@reduxjs/toolkit';

const phase = createSlice({
  name: 'game',
  initialState: false,
  reducers: {
    toggleStart: state => !state,
  },
});

const randomizeIndexes = (state, { payload }) => {
  const indexes = [];
  while (indexes.length !== payload) {
    const i = Math.floor(Math.random() * 100);
    if (!indexes.includes(i) && !state.includes(i)) {
      indexes.push(i);
    }
  }
  return [...state, ...indexes];
};

const onRemoveCube = (state, { payload }) =>
  state.filter(item => item !== payload);

const cubes = createSlice({
  name: 'game',
  initialState: [],
  reducers: {
    initCubes: randomizeIndexes,
    resetGame: () => [],
    removeCube: onRemoveCube,
  },
});

const points = createSlice({
  name: 'game',
  initialState: 0,
  reducers: {
    addPoint: state => state + 1,
    resetGame: () => 0,
  },
});

export default { phase, cubes, points };
