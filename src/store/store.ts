// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
// ������������ ������ ��������� �� ���� ����������

const store = configureStore({
  reducer: {
    game: gameReducer,
    // ������ ����� ���������
  },
  
  // ������������� �������� redux-thunk � DevTools
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // ��� ������� �������� � �������
    immutableCheck: true, // �������� ���������������
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;