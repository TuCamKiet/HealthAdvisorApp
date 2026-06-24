import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  steps: number;
  calories: number;
  water: number;
}

const initialState: DashboardState = {
  steps: 0,
  calories: 0,
  water: 0,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,

  reducers: {
    setSteps(state, action: PayloadAction<number>) {
      state.steps = action.payload;
    },

    setCalories(state, action: PayloadAction<number>) {
      state.calories = action.payload;
    },

    setWater(state, action: PayloadAction<number>) {
      state.water = action.payload;
    },
  },
});

export const { setSteps, setCalories, setWater } = dashboardSlice.actions;

export default dashboardSlice.reducer;
