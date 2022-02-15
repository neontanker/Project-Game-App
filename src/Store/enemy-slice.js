import { createSlice } from "@reduxjs/toolkit";
const initialState = { currentEnemies: {} };

export const battleSlice = createSlice({
  name: "enemy",
  initialState: initialState,
  reducers: {
    changeCurrentEnemies: (state, action) => {
      console.log("Current enemies slice", action.payload);
      state.currentEnemies = action.payload;
      console.log("state", state.currentLocation);
      console.log("action", action.payload);
    },
    attack: (state, action) => {
      state.currentEnemies.health -= action.payload;
    },
  },
});

export const { changeCurrentEnemies, attack } = battleSlice.actions;

export default battleSlice.reducer;
