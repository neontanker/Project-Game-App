const HeroData = {
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

export default HeroData;
