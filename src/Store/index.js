import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import enemySlice from "./enemy-slice";
import heroSlice from "./hero-slice";
import locationSlice from "./location-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    currentLocation: locationSlice,
    enemy: enemySlice,
    hero: heroSlice,
  },
});

export default store;
