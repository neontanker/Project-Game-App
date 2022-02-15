import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainHero: {
    name: "",
    stats: [
      {
        id: "str",
        name: "str",
        value: 0,
      },
      {
        id: "vit",
        name: "vit",
        value: 0,
      },
      {
        id: "int",
        name: "int",
        value: 0,
      },
      {
        id: "def",
        name: "def",
        value: 0,
      },
    ],
    maxHealth: 0,
    health: 0,
    abilities: {},
    style: {
      backgroundImage: `url(https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_960_720.jpg)`,
    },
    characterCreated: false,
    extras: {
      killed: 0,
      expToLevelUp: 25,
      experience: 0,
      statPoints: 5,
      level: 0,
      score: 0,
    },
  },
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    changeCharacter: (state, action) => {
      const { heroName } = action.payload;
      const vit = state.mainHero.stats[1].value;
      const defaultMaxHealth = 10;
      const calculatedHealth = defaultMaxHealth * 1 + 2 * vit;
      if (!state.mainHero.characterCreated) {
        state.mainHero.health = calculatedHealth;
        state.mainHero.name = heroName;
        state.mainHero.characterCreated = true;
      }
      state.mainHero.maxHealth = calculatedHealth;
      if (state.mainHero.maxHealth < state.mainHero.health) {
        state.mainHero.health = state.mainHero.maxHealth;
      }
    },
    changeHeroHealth: (state, action) => {
      const { damageTaken, damageHealed } = action.payload;
      if (damageTaken) {
        state.mainHero.health -= damageTaken;
      }
      if (damageHealed) {
        state.mainHero.health += damageHealed;
      }
    },
    levelUp: (state, action) => {
      const exp = action.payload;
      state.mainHero.extras.experience += exp;
      while (
        state.mainHero.extras.experience >= state.mainHero.extras.expToLevelUp
      ) {
        state.mainHero.extras.experience -= state.mainHero.extras.expToLevelUp;
        const increasedExpCap = state.mainHero.extras.expToLevelUp / 2;
        state.mainHero.extras.expToLevelUp += increasedExpCap;
        state.mainHero.extras.level += 1;
        state.mainHero.extras.statPoints += 1;
      }
    },
    setHeroBackground: (state, action) => {
      const { style } = action.payload;
      state.mainHero.style = style;
    },
    removeStatPoint: (state, action) => {
      const stats = state.mainHero.stats;
      const { id, value } = action.payload;
      const statIndex = stats.findIndex((stat) => stat.id === id);
      if (stats[statIndex].value <= 0) {
        return;
      }
      stats[statIndex].value -= value;
      state.mainHero.extras.statPoints += value;
      console.log("changedStats", stats[statIndex].value);
    },
    addStatPoint: (state, action) => {
      const stats = state.mainHero.stats;
      const { id, value } = action.payload;
      const statIndex = stats.findIndex((stat) => stat.id === id);
      if (state.mainHero.extras.statPoints <= 0) {
        return;
      }
      state.mainHero.extras.statPoints -= value;
      stats[statIndex].value += value;
    },
  },
});

export const {
  changeCharacter,
  levelUp,
  setHeroBackground,
  addStatPoint,
  removeStatPoint,
  changeHeroHealth,
} = heroSlice.actions;

export default heroSlice.reducer;
