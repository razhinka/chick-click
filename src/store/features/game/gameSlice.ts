import { createSlice, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";

// Типы данных
interface ScoreState {
  value: number;
}

export interface Building {
  id: number;
  name: string;
  basePrice: number;
  level: number;
  production: number; // Добавили производство яиц в секунду
}

export interface GameState {
  score: ScoreState;
  buildings: ReturnType<typeof buildingsAdapter.getInitialState>;
  lastUpdate: number; 
}

// Адаптер для зданий
export const buildingsAdapter = createEntityAdapter<Building>();

// Начальные данные зданий
export const initialBuildingsData: Building[] = [
  { id: 1, name: "Курятник", basePrice: 15, level: 0, production: 0.1 },
  { id: 2, name: "Яичная ферма", basePrice: 100, level: 0, production: 1 },
  { id: 3, name: "Инкубатор", basePrice: 500, level: 0, production: 5 },
];

// Начальное состояние
export const initialState: GameState = {
  score: {
    value: 0,
  },
  buildings: buildingsAdapter.addMany(
    buildingsAdapter.getInitialState(),
    initialBuildingsData
  ),
  lastUpdate: Date.now(),
};

// Создаем срез
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Увеличиваем счет
    incrementScore: (state, action: PayloadAction<number>) => {
      state.score.value += action.payload;
    },
    
    // Покупка здания
    purchaseBuilding: (state, action: PayloadAction<{ id: number; cost: number }>) => {
      const { id, cost } = action.payload;
      if (state.score.value >= cost) {
        state.score.value -= cost;
        const building = state.buildings.entities[id];
        if (building) {
          buildingsAdapter.updateOne(state.buildings, {
            id,
            changes: { level: building.level + 1 },
          });
        }
      }
    },
    
    // Обновление времени последнего тика
    updateLastTick: (state) => {
      state.lastUpdate = Date.now();
    },
    
    // Сброс игры
    resetGame: () => initialState,
  }
});

// Экспортируем действия
export const { 
  incrementScore, 
  purchaseBuilding, 
  updateLastTick, 
  resetGame 
} = gameSlice.actions;

// Экспортируем редьюсер
export default gameSlice.reducer;