const bundles = [
  {
    name: "Spring Foraging Bundle",
    items: [
      {
        name: "Wild Horseradish",
        donated: false,
        imageName: "../../public/images/Wild_Horseradish.png",
      },
      {
        name: "Daffodil",
        donated: false,
        imageName: "../../public/images/Daffodil.png",
      },
      {
        name: "Leek",
        donated: false,
        imageName: "../../public/images/Leek.png",
      },
      {
        name: "Dandelion",
        donated: false,
        imageName: "../../public/images/Dandelion.png",
      },
    ],
  },
  {
    name: "Summer Foraging Bundle",
    items: [
      {
        name: "Grape",
        donated: false,
        imageName: "../../public/images/Grape.png",
      },
      {
        name: "Spice Berry",
        donated: false,
        imageName: "../../public/images/Spice_Berry.png",
      },
      {
        name: "Sweet Pea",
        donated: false,
        imageName: "../../public/images/Sweet_Pea.png",
      },
    ],
  },
  {
    name: "Fall Foraging Bundle",
    items: [
      {
        name: "Common Mushroom",
        donated: false,
        imageName: "../../public/images/Common_Mushroom.png",
      },
      {
        name: "Wild Plum",
        donated: false,
        imageName: "../../public/images/Wild_Plum.png",
      },
      {
        name: "Hazelnut",
        donated: false,
        imageName: "../../public/images/Hazelnut.png",
      },
      {
        name: "Blackberry",
        donated: false,
        imageName: "../../public/images/Blackberry.png",
      },
    ],
  },
  {
    name: "Winter Foraging Bundle",
    items: [
      {
        name: "Winter Root",
        donated: false,
        imageName: "../../public/images/Winter_Root.png",
      },
      {
        name: "Crystal Fruit",
        donated: false,
        imageName: "../../public/images/Crystal_Fruit.png",
      },
      {
        name: "Snow Yam",
        donated: false,
        imageName: "../../public/images/Snow_Yam.png",
      },
      {
        name: "Crocus",
        donated: false,
        imageName: "../../public/images/Crocus.png",
      },
    ],
  },
  {
    name: "Construction Bundle",
    items: [
      {
        name: "Wood (99)",
        donated: false,
        imageName: "../../public/images/Wood.png",
      },
      {
        name: "Wood (99)",
        donated: false,
        imageName: "../../public/images/Wood.png",
      },
      {
        name: "Stone (99)",
        donated: false,
        imageName: "../../public/images/Stone.png",
      },
      {
        name: "Hardwood (10)",
        donated: false,
        imageName: "../../public/images/Hardwood.png",
      },
    ],
  },
  {
    name: "Exotic Foraging Bundle",
    items: [
      {
        name: "Coconut",
        donated: false,
        imageName: "../../public/images/Coconut.png",
      },
      {
        name: "Cactus Fruit",
        donated: false,
        imageName: "../../public/images/Cactus_Fruit.png",
      },
      {
        name: "Cave Carrot",
        donated: false,
        imageName: "../../public/images/Cave_Carrot.png",
      },
      {
        name: "Red Mushroom",
        donated: false,
        imageName: "../../public/images/Red_Mushroom.png",
      },
      {
        name: "Purple Mushroom",
        donated: false,
        imageName: "../../public/images/Purple_Mushroom.png",
      },
      {
        name: "Maple Syrup",
        donated: false,
        imageName: "../../public/images/Maple_Syrup.png",
      },
      {
        name: "Oak Resin",
        donated: false,
        imageName: "../../public/images/Oak_Resin.png",
      },
      {
        name: "Pine Tar",
        donated: false,
        imageName: "../../public/images/Pine_Tar.png",
      },
      {
        name: "Morel",
        donated: false,
        imageName: "../../public/images/Morel.png",
      },
    ],
  },
  {
    name: "Spring Crops Bundle",
    items: [
      {
        name: "Parsnip",
        donated: false,
        imageName: "../../public/images/Parsnip.png",
      },
      {
        name: "Green Bean",
        donated: false,
        imageName: "../../public/images/Green_Bean.png",
      },
      {
        name: "Cauliflower",
        donated: false,
        imageName: "../../public/images/Cauliflower.png",
      },
      {
        name: "Potato",
        donated: false,
        imageName: "../../public/images/Potato.png",
      },
    ],
  },
  {
    name: "Summer Crops Bundle",
    items: [
      {
        name: "Tomato",
        donated: false,
        imageName: "../../public/images/Tomato.png",
      },
      {
        name: "Hot Pepper",
        donated: false,
        imageName: "../../public/images/Hot_Pepper.png",
      },
      {
        name: "Blueberry",
        donated: false,
        imageName: "../../public/images/Blueberry.png",
      },
      {
        name: "Melon",
        donated: false,
        imageName: "../../public/images/Melon.png",
      },
    ],
  },
  {
    name: "Fall Crops Bundle",
    items: [
      {
        name: "Corn",
        donated: false,
        imageName: "../../public/images/Corn.png",
      },
      {
        name: "Eggplant",
        donated: false,
        imageName: "../../public/images/Eggplant.png",
      },
      {
        name: "Pumpkin",
        donated: false,
        imageName: "../../public/images/Pumpkin.png",
      },
      {
        name: "Yam",
        donated: false,
        imageName: "../../public/images/Yam.png",
      },
    ],
  },
  {
    name: "Quality Crops Bundle",
    items: [
      {
        name: "Parsnip (5)",
        donated: false,
        imageName: "../../public/images/Parsnip_Gold.png",
      },
      {
        name: "Melon (5)",
        donated: false,
        imageName: "../../public/images/Melon_Gold.png",
      },
      {
        name: "Pumpkin (5)",
        donated: false,
        imageName: "../../public/images/Pumpkin_Gold.png",
      },
      {
        name: "Corn (5)",
        donated: false,
        imageName: "../../public/images/Corn_Gold.png",
      },
    ],
  },
  {
    name: "Animal Bundle",
    items: [
      {
        name: "Large Milk",
        donated: false,
        imageName: "../../public/images/Large_Milk.png",
      },
      {
        name: "Large Egg (Brown)",
        donated: false,
        imageName: "../../public/images/Large_Brown_Egg.png",
      },
      {
        name: "Large Egg",
        donated: false,
        imageName: "../../public/images/Large_Egg.png",
      },
      {
        name: "Large Goat Milk",
        donated: false,
        imageName: "../../public/images/Large_Goat_Milk.png",
      },
      {
        name: "Wool",
        donated: false,
        imageName: "../../public/images/Wool.png",
      },
      {
        name: "Duck Egg",
        donated: false,
        imageName: "../../public/images/Duck_Egg.png",
      },
    ],
  },
  {
    name: "Artisan Bundle",
    items: [
      {
        name: "Truffle Oil",
        donated: false,
        imageName: "../../public/images/Truffle_Oil.png",
      },
      {
        name: "Cloth",
        donated: false,
        imageName: "../../public/images/Cloth.png",
      },
      {
        name: "Goat Cheese",
        donated: false,
        imageName: "../../public/images/Goat_Cheese.png",
      },
      {
        name: "Cheese",
        donated: false,
        imageName: "../../public/images/Cheese.png",
      },
      {
        name: "Honey",
        donated: false,
        imageName: "../../public/images/Honey.png",
      },
      {
        name: "Jelly",
        donated: false,
        imageName: "../../public/images/Jelly.png",
      },
      {
        name: "Apple",
        donated: false,
        imageName: "../../public/images/Apple.png",
      },
      {
        name: "Apricot",
        donated: false,
        imageName: "../../public/images/Apricot.png",
      },
      {
        name: "Orange",
        donated: false,
        imageName: "../../public/images/Orange.png",
      },
      {
        name: "Peach",
        donated: false,
        imageName: "../../public/images/Peach.png",
      },
      {
        name: "Pomegranate",
        donated: false,
        imageName: "../../public/images/Pomegranate.png",
      },
      {
        name: "Cherry",
        donated: false,
        imageName: "../../public/images/Cherry.png",
      },
    ],
  },
  {
    name: "River Fish Bundle",
    items: [
      {
        name: "Sunfish",
        donated: false,
        imageName: "../../public/images/Sunfish.png",
      },
      {
        name: "Catfish",
        donated: false,
        imageName: "../../public/images/Catfish.png",
      },
      {
        name: "Shad",
        donated: false,
        imageName: "../../public/images/Shad.png",
      },
      {
        name: "Tiger Trout",
        donated: false,
        imageName: "../../public/images/Tiger_trout.png",
      },
    ],
  },
  {
    name: "Lake Fish",
    items: [
      {
        name: "Largemouth Bass",
        donated: false,
        imageName: "../../public/images/Largemouth_Bass.png",
      },
      {
        name: "Carp",
        donated: false,
        imageName: "../../public/images/Carp.png",
      },
      {
        name: "Bullhead",
        donated: false,
        imageName: "../../public/images/Bullhead.png",
      },
      {
        name: "Sturgeon",
        donated: false,
        imageName: "../../public/images/Sturgeon.png",
      },
    ],
  },
  {
    name: "Ocean Fish",
    items: [
      {
        name: "Sardine",
        donated: false,
        imageName: "../../public/images/Sardine.png",
      },
      {
        name: "Tuna",
        donated: false,
        imageName: "../../public/images/Tuna.png",
      },
      {
        name: "Red Snapper",
        donated: false,
        imageName: "../../public/images/Red_Snapper.png",
      },
      {
        name: "Tilapia",
        donated: false,
        imageName: "../../public/images/Tilapia.png",
      },
    ],
  },
  {
    name: "Night Fishing Bundle",
    items: [
      {
        name: "Walleye",
        donated: false,
        imageName: "../../public/images/Walleye.png",
      },
      {
        name: "Bream",
        donated: false,
        imageName: "../../public/images/Bream.png",
      },
      {
        name: "Eel",
        donated: false,
        imageName: "../../public/images/Eel.png",
      },
    ],
  },
  {
    name: "Crab Pot Bundle",
    items: [
      {
        name: "Lobster",
        donated: false,
        imageName: "../../public/images/Lobster.png",
      },
      {
        name: "Crayfish",
        donated: false,
        imageName: "../../public/images/Crayfish.png",
      },
      {
        name: "Crab",
        donated: false,
        imageName: "../../public/images/Crab.png",
      },
      {
        name: "Cockle",
        donated: false,
        imageName: "../../public/images/Cockle.png",
      },
      {
        name: "Mussel",
        donated: false,
        imageName: "../../public/images/Mussel.png",
      },
      {
        name: "Shrimp",
        donated: false,
        imageName: "../../public/images/Shrimp.png",
      },
      {
        name: "Snail",
        donated: false,
        imageName: "../../public/images/Snail.png",
      },
      {
        name: "Periwinkle",
        donated: false,
        imageName: "../../public/images/Periwinkle.png",
      },
      {
        name: "Oyster",
        donated: false,
        imageName: "../../public/images/Oyster.png",
      },
      {
        name: "Clam",
        donated: false,
        imageName: "../../public/images/Clam.png",
      },
    ],
  },
  {
    name: "Specialty Fish Bundle",
    items: [
      {
        name: "Pufferfish",
        donated: false,
        imageName: "../../public/images/Pufferfish.png",
      },
      {
        name: "Ghostfish",
        donated: false,
        imageName: "../../public/images/Ghostfish.png",
      },
      {
        name: "Sandfish",
        donated: false,
        imageName: "../../public/images/Sandfish.png",
      },
      {
        name: "Woodskip",
        donated: false,
        imageName: "../../public/images/woodskip.png",
      },
    ],
  },
  {
    name: "Blacksmith's Bundle",
    items: [
      {
        name: "Copper Bar",
        donated: false,
        imageName: "../../public/images/Copper_Bar.png",
      },
      {
        name: "Iron Bar",
        donated: false,
        imageName: "../../public/images/Iron_Bar.png",
      },
      {
        name: "Gold Bar",
        donated: false,
        imageName: "../../public/images/Gold_Bar.png",
      },
    ],
  },
  {
    name: "Geologist's Bundle",
    items: [
      {
        name: "Quartz",
        donated: false,
        imageName: "../../public/images/Quartz.png",
      },
      {
        name: "Earth Crystal",
        donated: false,
        imageName: "../../public/images/Earth_Crystal.png",
      },
      {
        name: "Frozen Tear",
        donated: false,
        imageName: "../../public/images/Frozen_Tear.png",
      },
      {
        name: "Fire Quartz",
        donated: false,
        imageName: "../../public/images/Fire_Quartz.png",
      },
    ],
  },
  {
    name: "Adventurer's Bundle",
    items: [
      {
        name: "Slime (99)",
        donated: false,
        imageName: "../../public/images/Slime.png",
      },
      {
        name: "Bat Wing (10)",
        donated: false,
        imageName: "../../public/images/Bat_Wing.png",
      },
      {
        name: "Solar Essence",
        donated: false,
        imageName: "../../public/images/Solar_Essence.png",
      },
      {
        name: "Void Essence",
        donated: false,
        imageName: "../../public/images/Void_Essence.png",
      },
    ],
  },
  {
    name: "Chef's Bundle",
    items: [
      {
        name: "MapleSyrup",
        donated: false,
        imageName: "../../public/images/Maple_Syrup.png",
      },
      {
        name: "Fiddlehead Fern",
        donated: false,
        imageName: "../../public/images/Fiddlehead_Fern.png",
      },
      {
        name: "Truffle",
        donated: false,
        imageName: "../../public/images/Truffle.png",
      },
      {
        name: "Poppy",
        donated: false,
        imageName: "../../public/images/Poppy.png",
      },
      {
        name: "Maki Roll",
        donated: false,
        imageName: "../../public/images/Maki_Roll.png",
      },
      {
        name: "Fried Egg",
        donated: false,
        imageName: "../../public/images/Fried_Egg.png",
      },
    ],
  },
  {
    name: "Dye Bundle",
    items: [
      {
        name: "Red Mushroom",
        donated: false,
        imageName: "../../public/images/Red_Mushroom.png",
      },
      {
        name: "Sea Urchin",
        donated: false,
        imageName: "../../public/images/Sea_Urchin.png",
      },
      {
        name: "Sunflower",
        donated: false,
        imageName: "../../public/images/Sunflower.png",
      },
      {
        name: "Duck Feather",
        donated: false,
        imageName: "../../public/images/Duck_Feather.png",
      },
      {
        name: "Aquamarine",
        donated: false,
        imageName: "../../public/images/Aquamarine.png",
      },
      {
        name: "Red Cabbage",
        donated: false,
        imageName: "../../public/images/Red_Cabbage.png",
      },
    ],
  },
  {
    name: "Field Research Bundle",
    items: [
      {
        name: "Purple Mushroom",
        donated: false,
        imageName: "../../public/images/Purple_Mushroom.png",
      },
      {
        name: "Nautilus Shell",
        donated: false,
        imageName: "../../public/images/Nautilus_Shell.png",
      },
      {
        name: "Chub",
        donated: false,
        imageName: "../../public/images/Chub.png",
      },
      {
        name: "Frozen Geode",
        donated: false,
        imageName: "../../public/images/Frozen_Geode.png",
      },
    ],
  },
  {
    name: "Fodder Bundle",
    items: [
      {
        name: "Wheat (10)",
        donated: false,
        imageName: "../../public/images/Wheat.png",
      },
      {
        name: "Hay (10)",
        donated: false,
        imageName: "../../public/images/Hay.png",
      },
      {
        name: "Apple (3)",
        donated: false,
        imageName: "../../public/images/Apple.png",
      },
    ],
  },
  {
    name: "Enchanter's Bundle",
    items: [
      {
        name: "Oak  Resin",
        donated: false,
        imageName: "../../public/images/Oak_Resin.png",
      },
      {
        name: "Wine",
        donated: false,
        imageName: "../../public/images/Wine.png",
      },
      {
        name: "Rabbit's Foot",
        donated: false,
        imageName: "../../public/images/Rabbit's_Foot.png",
      },
      {
        name: "Pomegranate",
        donated: false,
        imageName: "../../public/images/Pomegranate.png",
      },
    ],
  },
  {
    name: "2,500 Bundle",
    items: [
      {
        name: "2,500g",
        donated: false,
        imageName: "../../public/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "5,000 Bundle",
    items: [
      {
        name: "5,000g",
        donated: false,
        imageName: "../../public/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "10,000 Bundle",
    items: [
      {
        name: "10,000g",
        donated: false,
        imageName: "../../public/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "25,000 Bundle",
    items: [
      {
        name: "25,000g",
        donated: false,
        imageName: "../../public/images/18px-Gold.png",
      },
    ],
  },
  {
    name: "The Missing Bundle",
    items: [
      {
        name: "Silver or better quality wine",
        donated: false,
        imageName: "../../public/images/Wine_Silver.png",
      },
      {
        name: "Dinosaur Mayonnaise",
        donated: false,
        imageName: "../../public/images/Dinosaur_Mayonnaise.png",
      },
      {
        name: "Prismatic Shard",
        donated: false,
        imageName: "../../public/images/Prismatic_Shard.png",
      },
      {
        name: "Gold quality Ancient Fruit (5)",
        donated: false,
        imageName: "../../public/images/Ancient_Fruit_Gold.png",
      },
      {
        name: "Gold or better quality Void Salmon",
        donated: false,
        imageName: "../../public/images/Void_Salmon_Gold.png",
      },
      {
        name: "Caviar",
        donated: false,
        imageName: "../../public/images/Caviar.png",
      },
    ],
  },
];

export default bundles;
