const bundles = [
  {
    name: "Spring Foraging Bundle",
    items: [
      {
        name: "Wild Horseradish",
        donated: false,
        imageName: "Wild_Horseradish",
      },
      {
        name: "Daffodil",
        donated: false,
        imageName: "Daffodil",
      },
      {
        name: "Leek",
        donated: false,
        imageName: "Leek",
      },
      {
        name: "Dandelion",
        donated: false,
        imageName: "Dandelion",
      },
    ],
  },
  {
    name: "Summer Foraging Bundle",
    items: [
      {
        name: "Grape",
        donated: false,
        imageName: "Grape",
      },
      {
        name: "Spice Berry",
        donated: false,
        imageName: "Spice Berry",
      },
      {
        name: "Sweet Pea",
        donated: false,
        imageName: "SweetPea",
      },
    ],
  },
  {
    name: "Fall Foraging Bundle",
    items: [
      {
        name: "Common Mushroom",
        donated: false,
        imageName: "CommonMushroom",
      },
      {
        name: "Wild Plum",
        donated: false,
        imageName: "WildPlum",
      },
      {
        name: "Hazel Nut",
        donated: false,
        imageName: "HazelNut",
      },
      {
        name: "Blackberry",
        donated: false,
        imageName: "Blackberry",
      },
    ],
  },
  {
    name: "Winter Foraging Bundle",
    items: [
      {
        name: "Winter Root",
        donated: false,
        imageName: "WinterRoot",
      },
      {
        name: "Crystal Fruit",
        donated: false,
        imageName: "CrystalFruit",
      },
      {
        name: "Snow Yam",
        donated: false,
        imageName: "SnowYam",
      },
      {
        name: "Crocus",
        donated: false,
        imageName: "Crocus",
      },
    ],
  },
  {
    name: "Construction Bundle",
    items: [
      {
        name: "Wood (99)",
        donated: false,
        imageName: "Wood",
      },
      {
        name: "Wood (99)",
        donated: false,
        imageName: "Wood",
      },
      {
        name: "Stone (99)",
        donated: false,
        imageName: "Stone",
      },
      {
        name: "Hardwood (10)",
        donated: false,
        imageName: "Hardwood",
      },
    ],
  },
  {
    name: "Exotic Foraging Bundle",
    items: [
      {
        name: "Coconut",
        donated: false,
        imageName: "Coconut",
      },
      {
        name: "Cactus Fruit",
        donated: false,
        imageName: "CactusFruit",
      },
      {
        name: "Cave Carrot",
        donated: false,
        imageName: "CaveCarrot",
      },
      {
        name: "Red Mushroom",
        donated: false,
        imageName: "RedMushroom",
      },
      {
        name: "Purple Mushroom",
        donated: false,
        imageName: "PurpleMushroom",
      },
      {
        name: "Maple Syrup",
        donated: false,
        imageName: "MapleSyrup",
      },
      {
        name: "Oak Resin",
        donated: false,
        imageName: "OakResin",
      },
      {
        name: "Pine Tar",
        donated: false,
        imageName: "PineTar",
      },
      {
        name: "Morel",
        donated: false,
        imageName: "Morel",
      },
    ],
  },
  {
    name: "Spring Crops Bundle",
    items: [
      {
        name: "Parsnip",
        donated: false,
        imageName: "Parsnip",
      },
      {
        name: "Green Bean",
        donated: false,
        imageName: "GreenBean",
      },
      {
        name: "Cauliflower",
        donated: false,
        imageName: "Cauliflower",
      },
      {
        name: "Potato",
        donated: false,
        imageName: "Potato",
      },
    ],
  },
  {
    name: "Summer Crops Bundle",
    items: [
      {
        name: "Tomato",
        donated: false,
        imageName: "Tomato",
      },
      {
        name: "Hot Pepper",
        donated: false,
        imageName: "HotPepper",
      },
      {
        name: "Blueberry",
        donated: false,
        imageName: "Blueberry",
      },
      {
        name: "Melon",
        donated: false,
        imageName: "Melon",
      },
    ],
  },
  {
    name: "Fall Crops Bundle",
    items: [
      {
        name: "Corn",
        donated: false,
        imageName: "Corn",
      },
      {
        name: "Eggplant",
        donated: false,
        imageName: "Eggplant",
      },
      {
        name: "Pumpkin",
        donated: false,
        imageName: "Pumpkin",
      },
      {
        name: "Yam",
        donated: false,
        imageName: "Yam",
      },
    ],
  },
  {
    name: "Quality Crops Bundle",
    items: [
      {
        name: "Parsnip (5)",
        donated: false,
        imageName: "ParsnipGold",
      },
      {
        name: "Melon (5)",
        donated: false,
        imageName: "MelonGold",
      },
      {
        name: "Pumpkin (5)",
        donated: false,
        imageName: "PumpkinGold",
      },
      {
        name: "Corn (5)",
        donated: false,
        imageName: "CornGold",
      },
    ],
  },
  {
    name: "Animal Bundle",
    items: [
      {
        name: "Large Milk",
        donated: false,
        imageName: "LargeMilk",
      },
      {
        name: "Large Egg (Brown)",
        donated: false,
        imageName: "LargeEggBrown",
      },
      {
        name: "Large Egg",
        donated: false,
        imageName: "Large Egg",
      },
      {
        name: "Large Goat Milk",
        donated: false,
        imageName: "LargeGoatMilk",
      },
      {
        name: "Wool",
        donated: false,
        imageName: "Wool",
      },
      {
        name: "Duck Egg",
        donated: false,
        imageName: "DuckEgg",
      },
    ],
  },
  {
    name: "Artisan Bundle",
    items: [
      {
        name: "Truffle Oil",
        donated: false,
        imageName: "TruffleOil",
      },
      {
        name: "Cloth",
        donated: false,
        imageName: "Cloth",
      },
      {
        name: "Goat Cheese",
        donated: false,
        imageName: "Goat Cheese",
      },
      {
        name: "Cheese",
        donated: false,
        imageName: "Cheese",
      },
      {
        name: "Honey",
        donated: false,
        imageName: "Honey",
      },
      {
        name: "Jelly",
        donated: false,
        imageName: "Jelly",
      },
      {
        name: "Apple",
        donated: false,
        imageName: "Apple",
      },
      {
        name: "Apricot",
        donated: false,
        imageName: "Apricot",
      },
      {
        name: "Orange",
        donated: false,
        imageName: "Orange",
      },
      {
        name: "Peach",
        donated: false,
        imageName: "Peach",
      },
      {
        name: "Pomegranate",
        donated: false,
        imageName: "Pomegranate",
      },
      {
        name: "Cherry",
        donated: false,
        imageName: "Cherry",
      },
    ],
  },
  {
    name: "River Fish Bundle",
    items: [
      {
        name: "Sunfish",
        donated: false,
        imageName: "Sunfish",
      },
      {
        name: "Catfish",
        donated: false,
        imageName: "Catfish",
      },
      {
        name: "Shad",
        donated: false,
        imageName: "Shad",
      },
      {
        name: "Tiger Trout",
        donated: false,
        imageName: "TigerTrout",
      },
    ],
  },
  {
    name: "Lake Fish",
    items: [
      {
        name: "Largemouth Bass",
        donated: false,
        imageName: "LargemouthBass",
      },
      {
        name: "Carp",
        donated: false,
        imageName: "Carp",
      },
      {
        name: "Bullhead",
        donated: false,
        imageName: "Bullhead",
      },
      {
        name: "Sturgeon",
        donated: false,
        imageName: "Sturgeon",
      },
    ],
  },
  {
    name: "Ocean Fish",
    items: [
      {
        name: "Sardine",
        donated: false,
        imageName: "Sardine",
      },
      {
        name: "Tuna",
        donated: false,
        imageName: "Tuna",
      },
      {
        name: "Red Snapper",
        donated: false,
        imageName: "RedSnapper",
      },
      {
        name: "Tilapia",
        donated: false,
        imageName: "Tilapia",
      },
    ],
  },
  {
    name: "Night Fishing Bundle",
    items: [
      {
        name: "Walleye",
        donated: false,
        imageName: "Walleye",
      },
      {
        name: "Bream",
        donated: false,
        imageName: "Bream",
      },
      {
        name: "Eel",
        donated: false,
        imageName: "Eel",
      },
    ],
  },
  {
    name: "Crab Pot Bundle",
    items: [
      {
        name: "Lobster",
        donated: false,
        imageName: "Lobster",
      },
      {
        name: "Crayfish",
        donated: false,
        imageName: "Crayfish",
      },
      {
        name: "Crab",
        donated: false,
        imageName: "Crab",
      },
      {
        name: "Cockle",
        donated: false,
        imageName: "Cockle",
      },
      {
        name: "Mussel",
        donated: false,
        imageName: "Mussel",
      },
      {
        name: "Shrimp",
        donated: false,
        imageName: "Shrimp",
      },
      {
        name: "Snail",
        donated: false,
        imageName: "Snail",
      },
      {
        name: "Periwinkle",
        donated: false,
        imageName: "Periwinkle",
      },
      {
        name: "Oyster",
        donated: false,
        imageName: "Oyster",
      },
      {
        name: "Clam",
        donated: false,
        imageName: "Clam",
      },
    ],
  },
  {
    name: "Specialty Fish Bundle",
    items: [
      {
        name: "Pufferfish",
        donated: false,
        imageName: "Pufferfish",
      },
      {
        name: "Ghostfish",
        donated: false,
        imageName: "Ghostfish",
      },
      {
        name: "Sandfish",
        donated: false,
        imageName: "Sandfish",
      },
      {
        name: "Woodskip",
        donated: false,
        imageName: "Woodskip",
      },
    ],
  },
  {
    name: "Blacksmith's Bundle",
    items: [
      {
        name: "Copper Bar",
        donated: false,
        imageName: "CopperBar",
      },
      {
        name: "Iron Bar",
        donated: false,
        imageName: "IronBar",
      },
      {
        name: "Gold Bar",
        donated: false,
        imageName: "GoldBar",
      },
    ],
  },
  {
    name: "Geologist's Bundle",
    items: [
      {
        name: "Quartz",
        donated: false,
        imageName: "Quartz",
      },
      {
        name: "Earth Crystal",
        donated: false,
        imageName: "Earth Crystal",
      },
      {
        name: "Frozen Tear",
        donated: false,
        imageName: "FrozenTear",
      },
      {
        name: "Fire Quartz",
        donated: false,
        imageName: "Fire Quartz",
      },
    ],
  },
  {
    name: "Adventurer's Bundle",
    items: [
      {
        name: "Slime (99)",
        donated: false,
        imageName: "Slime",
      },
      {
        name: "Bat Wing (10)",
        donated: false,
        imageName: "BatWing",
      },
      {
        name: "Solar Essence",
        donated: false,
        imageName: "Solar Essence",
      },
      {
        name: "Void Essence",
        donated: false,
        imageName: "Void Essence",
      },
    ],
  },
  {
    name: "Chef's Bundle",
    items: [
      {
        name: "MapleSyrup",
        donated: false,
        imageName: "MapleSyrup",
      },
      {
        name: "Fiddlehead Fern",
        donated: false,
        imageName: "FiddleheadFern",
      },
      {
        name: "Truffle",
        donated: false,
        imageName: "Truffle",
      },
      {
        name: "Poppy",
        donated: false,
        imageName: "Poppy",
      },
      {
        name: "Maki Roll",
        donated: false,
        imageName: "Maki Roll",
      },
      {
        name: "Fried Egg",
        donated: false,
        imageName: "Fried Egg",
      },
    ],
  },
  {
    name: "Dye Bundle",
    items: [
      {
        name: "Red Mushroom",
        donated: false,
        imageName: "RedMushroom",
      },
      {
        name: "Sea Urchin",
        donated: false,
        imageName: "SeaUrchin",
      },
      {
        name: "Sunflower",
        donated: false,
        imageName: "Sunflower",
      },
      {
        name: "Duck Feather",
        donated: false,
        imageName: "DuckFeather",
      },
      {
        name: "Aquamarine",
        donated: false,
        imageName: "Aquamarine",
      },
      {
        name: "Red Cabbage",
        donated: false,
        imageName: "RedCabbage",
      },
    ],
  },
  {
    name: "Field Research Bundle",
    items: [
      {
        name: "Purple Mushroom",
        donated: false,
        imageName: "PurpleMushroom",
      },
      {
        name: "Nautilus Shell",
        donated: false,
        imageName: "NuatilusShell",
      },
      {
        name: "Chub",
        donated: false,
        imageName: "Chub",
      },
      {
        name: "Frozen Geode",
        donated: false,
        imageName: "FrozenGeode",
      },
    ],
  },
  {
    name: "Fodder Bundle",
    items: [
      {
        name: "Wheat (10)",
        donated: false,
        imageName: "Wheat",
      },
      {
        name: "Hay (10)",
        donated: false,
        imageName: "Hay",
      },
      {
        name: "Apple (3)",
        donated: false,
        imageName: "Apple",
      },
    ],
  },
  {
    name: "Enchanter's Bundle",
    items: [
      {
        name: "Oak  Resin",
        donated: false,
        imageName: "OakResin",
      },
      {
        name: "Wine",
        donated: false,
        imageName: "Wine",
      },
      {
        name: "Rabbit's Foot",
        donated: false,
        imageName: "RabbitsFoot",
      },
      {
        name: "Pomegranate",
        donated: false,
        imageName: "Pomegranate",
      },
    ],
  },
  {
    name: "2,500 Bundle",
    items: [
      {
        name: "2,500g",
        donated: false,
        imageName: "2500g",
      },
    ],
  },
  {
    name: "5,000 Bundle",
    items: [
      {
        name: "5,000g",
        donated: false,
        imageName: "5000g",
      },
    ],
  },
  {
    name: "10,000 Bundle",
    items: [
      {
        name: "10,000g",
        donated: false,
        imageName: "10000g",
      },
    ],
  },
  {
    name: "25,000 Bundle",
    items: [
      {
        name: "25,000g",
        donated: false,
        imageName: "25000g",
      },
    ],
  },
  {
    name: "The Missing Bundle",
    items: [
      {
        name: "Silver or better quality wine",
        donated: false,
        imageName: "SilverWine",
      },
      {
        name: "Dinosaur Mayonnaise",
        donated: false,
        imageName: "DinosaurMayonnaise",
      },
      {
        name: "Prismatic Shard",
        donated: false,
        imageName: "PrismaticShard",
      },
      {
        name: "Gold quality Ancient Fruit (5)",
        donated: false,
        imageName: "AncientFruitGold",
      },
      {
        name: "Gold or better quality Void Salmon",
        donated: false,
        imageName: "GoldSalmon",
      },
      {
        name: "Caviar",
        donated: false,
        imageName: "Caviar",
      },
    ],
  },
];

export default bundles;