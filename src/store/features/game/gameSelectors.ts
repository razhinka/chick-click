import { createSelector } from '@reduxjs/toolkit';
import { GameState, buildingsAdapter } from './gameSlice';
import type { RootState } from '../../store';

// Селектор для получения всего состояния игры
export const selectGameState = (state: RootState) => state.game;

// Селекторы для зданий
export const {
  selectAll: selectAllBuildings,
  selectById: selectBuildingById,
  selectEntities: selectBuildingEntities,
} = buildingsAdapter.getSelectors((state: RootState) => state.game.buildings);

// Селектор для текущего счета
export const selectScore = (state: RootState) => state.game.score.value;

// Селектор для яиц в секунду (EPS)
export const selectScorePerSecond = createSelector(
  [selectAllBuildings],
  (buildings) => {
    return buildings.reduce((sps, building) => {
      return sps + building.level * building.production;
    }, 0);
  }
);

// Новый селектор: возвращает цены для всех зданий
export const selectAllBuildingPrices = createSelector(
  [selectAllBuildings, (state: RootState) => state],
  (buildings, state) => {
    return buildings.map(building => 
      selectBuildingCurrentPrice(state, building.id)
    );
  }
);

// Селектор для текущей цены здания
export const selectBuildingCurrentPrice = createSelector(
  [selectBuildingById],
  (building) => {
    if (!building) return 0;
    return Math.floor(building.basePrice * Math.pow(1.15, building.level));
  }
);