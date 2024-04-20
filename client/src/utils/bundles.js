const bundles = [
  {
    name: "Spring Foraging Bundle",
    required: 4,
    items: [
      {
        name: "Wild Horseradish",
        imageName: "/images/Wild_Horseradish.png",
      },
      {
        name: "Daffodil",
        imageName: "/images/Daffodil.png",
      },
      {
        name: "Leek",
        imageName: "/images/Leek.png",
      },
      {
        name: "Dandelion",
        imageName: "/images/Dandelion.png",
      },
    ],
  },
  {
    name: "Summer Foraging Bundle",
    required: 3,
    items: [
      {
        name: "Grape",
        imageName: "/images/Grape.png",
      },
      {
        name: "Spice Berry",
        imageName: "/images/Spice_Berry.png",
      },
      {
        name: "Sweet Pea",
        imageName: "/images/Sweet_Pea.png",
      },
    ],
  },
  {
    name: "Fall Foraging Bundle",
    required: 4,
    items: [
      {
        name: "Common Mushroom",
        imageName: "/images/Common_Mushroom.png",
      },
      {
        name: "Wild Plum",
        imageName: "/images/Wild_Plum.png",
      },
      {
        name: "Hazelnut",
        imageName: "/images/Hazelnut.png",
      },
      {
        name: "Blackberry",
        imageName: "/images/Blackberry.png",
      },
    ],
  },
  {
    name: "Winter Foraging Bundle",
    required: 4,
    items: [
      {
        name: "Winter Root",
        imageName: "/images/Winter_Root.png",
      },
      {
        name: "Crystal Fruit",
        imageName: "/images/Crystal_Fruit.png",
      },
      {
        name: "Snow Yam",
        imageName: "/images/Snow_Yam.png",
      },
      {
        name: "Crocus",
        imageName: "/images/Crocus.png",
      },
    ],
  },
  {
    name: "Construction Bundle",
    required: 4,
    items: [
      {
        name: "Wood (99)",
        imageName: "/images/Wood.png",
      },
      {
        name: "Wood (99)",
        imageName: "/images/Wood.png",
      },
      {
        name: "Stone (99)",
        imageName: "/images/Stone.png",
      },
      {
        name: "Hardwood (10)",
        imageName: "/images/Hardwood.png",
      },
    ],
  },
  {
    name: "Exotic Foraging Bundle",
    required: 5,
    items: [
      {
        name: "Coconut",
        imageName: "/images/Coconut.png",
      },
      {
        name: "Cactus Fruit",
        imageName: "/images/Cactus_Fruit.png",
      },
      {
        name: "Cave Carrot",
        imageName: "/images/Cave_Carrot.png",
      },
      {
        name: "Red Mushroom",
        imageName: "/images/Red_Mushroom.png",
      },
      {
        name: "Purple Mushroom",
        imageName: "/images/Purple_Mushroom.png",
      },
      {
        name: "Maple Syrup",
        imageName: "/images/Maple_Syrup.png",
      },
      {
        name: "Oak Resin",
        imageName: "/images/Oak_Resin.png",
      },
      {
        name: "Pine Tar",
        imageName: "/images/Pine_Tar.png",
      },
      {
        name: "Morel",
        imageName: "/images/Morel.png",
      },
    ],
  },
  {
    name: "Spring Crops Bundle",
    required: 4,
    items: [
      {
        name: "Parsnip",
        imageName: "/images/Parsnip.png",
      },
      {
        name: "Green Bean",
        imageName: "/images/Green_Bean.png",
      },
      {
        name: "Cauliflower",
        imageName: "/images/Cauliflower.png",
      },
      {
        name: "Potato",
        imageName: "/images/Potato.png",
      },
    ],
  },
  {
    name: "Summer Crops Bundle",
    required: 4,
    items: [
      {
        name: "Tomato",
        imageName: "/images/Tomato.png",
      },
      {
        name: "Hot Pepper",
        imageName: "/images/Hot_Pepper.png",
      },
      {
        name: "Blueberry",
        imageName: "/images/Blueberry.png",
      },
      {
        name: "Melon",
        imageName: "/images/Melon.png",
      },
    ],
  },
  {
    name: "Fall Crops Bundle",
    required: 4,
    items: [
      {
        name: "Corn",
        imageName: "/images/Corn.png",
      },
      {
        name: "Eggplant",
        imageName: "/images/Eggplant.png",
      },
      {
        name: "Pumpkin",
        imageName: "/images/Pumpkin.png",
      },
      {
        name: "Yam",
        imageName: "/images/Yam.png",
      },
    ],
  },
  {
    name: "Quality Crops Bundle",
    required: 3,
    items: [
      {
        name: "Parsnip (5)",
        imageName: "/images/Parsnip_Gold.png",
      },
      {
        name: "Melon (5)",
        imageName: "/images/Melon_Gold.png",
      },
      {
        name: "Pumpkin (5)",
        imageName: "/images/Pumpkin_Gold.png",
      },
      {
        name: "Corn (5)",
        imageName: "/images/Corn_Gold.png",
      },
    ],
  },
  {
    name: "Animal Bundle",
    required: 5,
    items: [
      {
        name: "Large Milk",
        imageName: "/images/Large_Milk.png",
      },
      {
        name: "Large Egg (Brown)",
        imageName: "/images/Large_Brown_Egg.png",
      },
      {
        name: "Large Egg",
        imageName: "/images/Large_Egg.png",
      },
      {
        name: "Large Goat Milk",
        imageName: "/images/Large_Goat_Milk.png",
      },
      {
        name: "Wool",
        imageName: "/images/Wool.png",
      },
      {
        name: "Duck Egg",
        imageName: "/images/Duck_Egg.png",
      },
    ],
  },
  {
    name: "Artisan Bundle",
    required: 6,
    items: [
      {
        name: "Truffle Oil",
        imageName: "/images/Truffle_Oil.png",
      },
      {
        name: "Cloth",
        imageName: "/images/Cloth.png",
      },
      {
        name: "Goat Cheese",
        imageName: "/images/Goat_Cheese.png",
      },
      {
        name: "Cheese",
        imageName: "/images/Cheese.png",
      },
      {
        name: "Honey",
        imageName: "/images/Honey.png",
      },
      {
        name: "Jelly",
        imageName: "/images/Jelly.png",
      },
      {
        name: "Apple",
        imageName: "/images/Apple.png",
      },
      {
        name: "Apricot",
        imageName: "/images/Apricot.png",
      },
      {
        name: "Orange",
        imageName: "/images/Orange.png",
      },
      {
        name: "Peach",
        imageName: "/images/Peach.png",
      },
      {
        name: "Pomegranate",
        imageName: "/images/Pomegranate.png",
      },
      {
        name: "Cherry",
        imageName: "/images/Cherry.png",
      },
    ],
  },
  {
    name: "River Fish Bundle",
    required: 4,
    items: [
      {
        name: "Sunfish",
        imageName: "/images/Sunfish.png",
      },
      {
        name: "Catfish",
        imageName: "/images/Catfish.png",
      },
      {
        name: "Shad",
        imageName: "/images/Shad.png",
      },
      {
        name: "Tiger Trout",
        imageName: "/images/Tiger_Trout.png",
      },
    ],
  },
  {
    name: "Lake Fish",
    required: 4,
    items: [
      {
        name: "Largemouth Bass",
        imageName: "/images/Largemouth_Bass.png",
      },
      {
        name: "Carp",
        imageName: "/images/Carp.png",
      },
      {
        name: "Bullhead",
        imageName: "/images/Bullhead.png",
      },
      {
        name: "Sturgeon",
        imageName: "/images/Sturgeon.png",
      },
    ],
  },
  {
    name: "Ocean Fish",
    required: 4,
    items: [
      {
        name: "Sardine",
        imageName: "/images/Sardine.png",
      },
      {
        name: "Tuna",
        imageName: "/images/Tuna.png",
      },
      {
        name: "Red Snapper",
        imageName: "/images/Red_Snapper.png",
      },
      {
        name: "Tilapia",
        imageName: "/images/Tilapia.png",
      },
    ],
  },
  {
    name: "Night Fishing Bundle",
    required: 3,
    items: [
      {
        name: "Walleye",
        imageName: "/images/Walleye.png",
      },
      {
        name: "Bream",
        imageName: "/images/Bream.png",
      },
      {
        name: "Eel",
        imageName: "/images/Eel.png",
      },
    ],
  },
  {
    name: "Crab Pot Bundle",
    required: 5,
    items: [
      {
        name: "Lobster",
        imageName: "/images/Lobster.png",
      },
      {
        name: "Crayfish",
        imageName: "/images/Crayfish.png",
      },
      {
        name: "Crab",
        imageName: "/images/Crab.png",
      },
      {
        name: "Cockle",
        imageName: "/images/Cockle.png",
      },
      {
        name: "Mussel",
        imageName: "/images/Mussel.png",
      },
      {
        name: "Shrimp",
        imageName: "/images/Shrimp.png",
      },
      {
        name: "Snail",
        imageName: "/images/Snail.png",
      },
      {
        name: "Periwinkle",
        imageName: "/images/Periwinkle.png",
      },
      {
        name: "Oyster",
        imageName: "/images/Oyster.png",
      },
      {
        name: "Clam",
        imageName: "/images/Clam.png",
      },
    ],
  },
  {
    name: "Specialty Fish Bundle",
    required: 4,
    items: [
      {
        name: "Pufferfish",
        imageName: "/images/Pufferfish.png",
      },
      {
        name: "Ghostfish",
        imageName: "/images/Ghostfish.png",
      },
      {
        name: "Sandfish",
        imageName: "/images/Sandfish.png",
      },
      {
        name: "Woodskip",
        imageName: "/images/Woodskip.png",
      },
    ],
  },
  {
    name: "Blacksmith's Bundle",
    required: 3,
    items: [
      {
        name: "Copper Bar",
        imageName: "/images/Copper_Bar.png",
      },
      {
        name: "Iron Bar",
        imageName: "/images/Iron_Bar.png",
      },
      {
        name: "Gold Bar",
        imageName: "/images/Gold_Bar.png",
      },
    ],
  },
  {
    name: "Geologist's Bundle",
    required: 4,
    items: [
      {
        name: "Quartz",
        imageName: "/images/Quartz.png",
      },
      {
        name: "Earth Crystal",
        imageName: "/images/Earth_Crystal.png",
      },
      {
        name: "Frozen Tear",
        imageName: "/images/Frozen_Tear.png",
      },
      {
        name: "Fire Quartz",
        imageName: "/images/Fire_Quartz.png",
      },
    ],
  },
  {
    name: "Adventurer's Bundle",
    required: 2,
    items: [
      {
        name: "Slime (99)",
        imageName: "/images/Slime.png",
      },
      {
        name: "Bat Wing (10)",
        imageName: "/images/Bat_Wing.png",
      },
      {
        name: "Solar Essence",
        imageName: "/images/Solar_Essence.png",
      },
      {
        name: "Void Essence",
        imageName: "/images/Void_Essence.png",
      },
    ],
  },
  {
    name: "Chef's Bundle",
    required: 6,
    items: [
      {
        name: "MapleSyrup",
        imageName: "/images/Maple_Syrup.png",
      },
      {
        name: "Fiddlehead Fern",
        imageName: "/images/Fiddlehead_Fern.png",
      },
      {
        name: "Truffle",
        imageName: "/images/Truffle.png",
      },
      {
        name: "Poppy",
        imageName: "/images/Poppy.png",
      },
      {
        name: "Maki Roll",
        imageName: "/images/Maki_Roll.png",
      },
      {
        name: "Fried Egg",
        imageName: "/images/Fried_Egg.png",
      },
    ],
  },
  {
    name: "Dye Bundle",
    required: 6,
    items: [
      {
        name: "Red Mushroom",
        imageName: "/images/Red_Mushroom.png",
      },
      {
        name: "Sea Urchin",
        imageName: "/images/Sea_Urchin.png",
      },
      {
        name: "Sunflower",
        imageName: "/images/Sunflower.png",
      },
      {
        name: "Duck Feather",
        imageName: "/images/Duck_Feather.png",
      },
      {
        name: "Aquamarine",
        imageName: "/images/Aquamarine.png",
      },
      {
        name: "Red Cabbage",
        imageName: "/images/Red_Cabbage.png",
      },
    ],
  },
  {
    name: "Field Research Bundle",
    required: 4,
    items: [
      {
        name: "Purple Mushroom",
        imageName: "/images/Purple_Mushroom.png",
      },
      {
        name: "Nautilus Shell",
        imageName: "/images/Nautilus_Shell.png",
      },
      {
        name: "Chub",
        imageName: "/images/Chub.png",
      },
      {
        name: "Frozen Geode",
        imageName: "/images/Frozen_Geode.png",
      },
    ],
  },
  {
    name: "Fodder Bundle",
    required: 3,
    items: [
      {
        name: "Wheat (10)",
        imageName: "/images/Wheat.png",
      },
      {
        name: "Hay (10)",
        imageName: "/images/Hay.png",
      },
      {
        name: "Apple (3)",
        imageName: "/images/Apple.png",
      },
    ],
  },
  {
    name: "Enchanter's Bundle",
    required: 4,
    items: [
      {
        name: "Oak  Resin",
        imageName: "/images/Oak_Resin.png",
      },
      {
        name: "Wine",
        imageName: "/images/Wine.png",
      },
      {
        name: "Rabbit's Foot",
        imageName: "/images/Rabbit's_Foot.png",
      },
      {
        name: "Pomegranate",
        imageName: "/images/Pomegranate.png",
      },
    ],
  },
  {
    name: "2,500 Bundle",
    required: 1,
    items: [
      {
        name: "2,500g",
        imageName: "/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "5,000 Bundle",
    required: 1,
    items: [
      {
        name: "5,000g",
        imageName: "/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "10,000 Bundle",
    required: 1,
    items: [
      {
        name: "10,000g",
        imageName: "/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "25,000 Bundle",
    required: 1,
    items: [
      {
        name: "25,000g",
        imageName: "/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "The Missing Bundle",
    required: 5,
    items: [
      {
        name: "Silver or better quality wine",
        imageName: "/images/Wine_Silver.png",
      },
      {
        name: "Dinosaur Mayonnaise",
        imageName: "/images/Dinosaur_Mayonnaise.png",
      },
      {
        name: "Prismatic Shard",
        imageName: "/images/Prismatic_Shard.png",
      },
      {
        name: "Gold quality Ancient Fruit (5)",
        imageName: "/images/Ancient_Fruit_Gold.png",
      },
      {
        name: "Gold or better quality Void Salmon",
        imageName: "/images/Void_Salmon_Gold.png",
      },
      {
        name: "Caviar",
        imageName: "/images/Caviar.png",
      },
    ],
  },
];

export default bundles;
