import { createSlice, PayloadAction, createAsyncThunk, createSelector, createEntityAdapter, EntityId } from "@reduxjs/toolkit";
import type { RootState } from '../../rootReduser';

// ���������������� ����������
interface ScoreState {
    value: number;
    // ������ scorePerSecond - ����� ��������� �����������
}

export interface Building {
    id: EntityId;
    name: string;
    basePrice: number;
    level: number; // ������������ lvl � level ��� ���������������
    // ����� currentPrice - ����� ���������
}

export interface Upgrade {
    id: EntityId;
    name: string;
    description: string;
    basePrice: number;
    purchased: boolean; // ������� ���� �������
    // ����� currentPrice - ����� ���������
}

export interface SettingsState {
    lang: string;
}

export interface GameState {
    score: ScoreState;
    buildings: ReturnType<typeof buildingsAdapter.getInitialState>;
    upgrades: ReturnType<typeof upgradesAdapter.getInitialState>;
    settings: SettingsState;
    lastUpdate: number; 
}

export const buildingsAdapter = createEntityAdapter<Building>({
    sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

export const upgradesAdapter = createEntityAdapter<Upgrade>({
    sortComparer: (a, b) => a.id.toString().localeCompare(b.id.toString()),
});

export const initialBuildingsData: Building[] = [
    { id: 1, name: "курсор", basePrice: 15, level: 0 },
    { id: 2, name: "омерика", basePrice: 100, level: 0 },
    { id: 3, name: "сосать", basePrice: 500, level: 0 },
]

export const initialUpgradesData: Upgrade[] = [
  { 
    id: 1, 
    name: "Усиленный толстый пенис", 
    description: "Пенис становится толще в попе омериканца", 
    basePrice: 100, 
    purchased: false 
  },
  // ... другие улучшения
];

export const initialState: GameState = {
    score: {
        value: 0,
    },
    buildings: buildingsAdapter.addMany(
        buildingsAdapter.getInitialState(),
        initialBuildingsData
    ),
    upgrades: upgradesAdapter.addMany(
        upgradesAdapter.getInitialState(),
        initialUpgradesData,
    ),
    settings: {
        lang: 'ru',
    },
    lastUpdate: Date.now(),
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        incrementScore: (state, action: PayloadAction<number>) => {
            state.score.value += action.payload;
        },
        purchaseBuilding: {
            reducer(state, action: PayloadAction<{ id: EntityId; cost: number }>) {
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
            prepare(id: EntityId, cost: number) {
                return { payload: { id, cost } };
            },
        },
        purchaseUpgrade: {
            reducer(state, action: PayloadAction<{ id: EntityId; cost: number }>) {
                const { id, cost } = action.payload;
                if (state.score.value >= cost) {
                    state.score.value -= cost;
                    upgradesAdapter.updateOne(state.upgrades, {
                        id,
                        changes: { purchased: true },
                    });
                }
            },
            prepare(id: EntityId, cost: number) {
                return { payload: { id, cost } };
            },
        },
        updateLastTick: (state) => {
            state.lastUpdate = Date.now();
        },

        resetGame: () => initialState,
    }

})

export const { incrementScore, purchaseBuilding, purchaseUpgrade, updateLastTick, resetGame } = gameSlice.actions;

export default gameSlice.reducer;