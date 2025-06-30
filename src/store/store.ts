// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
// Импортируйте другие редьюсеры по мере добавления

const store = configureStore({
  reducer: {
    game: gameReducer,
    // Другие срезы состояния
  },
  
  // Автоматически включает redux-thunk и DevTools
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Для игровых объектов с циклами
    immutableCheck: true, // Проверка иммутабельности
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;