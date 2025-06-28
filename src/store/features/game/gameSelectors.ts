import { createSelector } from '@reduxjs/toolkit';
import { GameState, buildingsAdapter, upgradesAdapter } from './gameSlice';
import type { RootState } from '../../rootReduser';

export const selectGameState = (state: RootState) => state.game;

export const {
    selectAll: selectAllBuildings,
    selectById: selectBuildingById,
    selectEntities: selectBuildingEntities,
} = buildingsAdapter.getSelectors((state: GameState) => state.buildings);

export const {
    selectAll: selectAllUpgrades,
    selectById: selectUpgradeById,
    selectEntities: selectUpgradeEntities,
} = upgradesAdapter.getSelectors((state: GameState) => state.upgrades);

export const selectScore = (state: GameState) => state.score.value;

// Мемоизированные селекторы
export const selectScorePerSecond = createSelector(
    [selectAllBuildings],
    (buildings) => {
        return buildings.reduce((sps, building) => {
            return sps + building.level * 0.1;
        }, 0);
    }
);

export const selectBuildingCurrentPrice = createSelector(
    [selectBuildingById],
    (building) => {
        if (!building) return 0;
        return building.basePrice * Math.pow(1.15, building.level);
    }
);

export const selectAvailableUpgrades = createSelector(
    [selectAllUpgrades, selectScore],
    (upgrades, score) => {
        return upgrades.filter(upgrade =>
            !upgrade.purchased && score >= upgrade.basePrice
        );
    }
);
