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

const gamePersistConfig = {
  key: 'game',
  storage,
};

const gameReducer = combineReducers({
  phase: gameSlice.phase.reducer,
  cubes: gameSlice.cubes.reducer,
  points: gameSlice.points.reducer,
  seconds: gameSlice.seconds.reducer,
});

const gamePersistedReducer = persistReducer(gamePersistConfig, gameReducer);

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
    game: gamePersistedReducer,
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
