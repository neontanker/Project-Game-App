import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentLocation: {},
  value: 0,
  isFighting: false,
  fightEnded: false,
  fightStatus: null,
};

export const locationSlice = createSlice({
  name: "currentLocation",
  initialState: initialState,
  reducers: {
    changeCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
      state.fightEnded = false;
      console.log("state", state.currentLocation);
      console.log("action", action.payload);
    },
    increment: (state) => {
      state.value += 1;
    },
    toggleFight: (state) => {
      state.isFighting = !state.isFighting;
    },
    toggleEndFight: (state, action) => {
      const { fightStatus } = action.payload || {};
      state.fightStatus = fightStatus;
      state.fightEnded = !state.fightEnded;
    },
  },
});

export const { changeCurrentLocation, increment, toggleFight, toggleEndFight } =
  locationSlice.actions;

export default locationSlice.reducer;
