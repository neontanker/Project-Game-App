const Images = {
  swampImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2020/06/29/00/26/iris-5350997_960_720.jpg)`,
    backgroundSize: "cover",
  },
  swampEnemyImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2013/07/12/17/46/drop-152407_960_720.png)`,
  },
  hutImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2013/07/13/12/21/hut-159711_960_720.png)`,
  },
  hutEnemyImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/10/08/19/36/thief-2831254_960_720.png)`,
  },
  castleImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/04/01/09/14/castle-1299233_960_720.png)`,
  },
  castleEnemyImage: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2018/04/03/15/29/fantasy-3287062_960_720.png)`,
  },
};

const LocationsData = [
  {
    id: 1,
    location: "Hut",
    style: Images.hutImage,
    name: "Placeholder",
    enemy: {
      name: "Trader",
      health: 20,
      str: 2,
      def: 3,
      style: Images.hutEnemyImage,
      exp: 50,
    },
  },
  {
    id: 2,
    location: "Castle",
    style: Images.castleImage,
    name: "Knight",
    enemy: {
      name: "Knight",
      health: 30,
      str: 4,
      def: 6,
      style: Images.castleEnemyImage,
      exp: 100,
    },
  },
  {
    id: 3,
    location: "Swamp",
    style: Images.swampImage,
    name: "Slime",
    enemy: {
      name: "Slime",
      health: 10,
      str: 2,
      def: 2,
      style: Images.swampEnemyImage,
      exp: 25,
    },
  },
];

export default LocationsData;
