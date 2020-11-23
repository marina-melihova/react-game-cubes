import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { gameSlice } from './game';
import { statsSlice } from './stats';

const gameReducer = combineReducers({
  phase: gameSlice.phase.reducer,
  cubes: gameSlice.cubes.reducer,
  points: gameSlice.points.reducer,
});

const statsPersistConfig = {
  key: 'stats',
  storage,
  whitelist: ['score'],
};

const statsReducer = combineReducers({
  score: statsSlice.score.reducer,
});

const statsPersistedReducer = persistReducer(statsPersistConfig, statsReducer);

const store = configureStore({
  reducer: {
    game: gameReducer,
    stats: statsPersistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
