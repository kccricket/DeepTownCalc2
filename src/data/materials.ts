import MaterialName from "@/game-types/MaterialName";
import MaterialSource from "@/game-types/MaterialSource";

export default [
  {
    name: MaterialName.Coal,
    source: MaterialSource.Mining
  },
  {
    name: "copper",
    source: "mining"
  },
  {
    name: "amber",
    source: "mining"
  },
  {
    name: "iron",
    source: "mining"
  },
  {
    name: "aluminum",
    source: "mining"
  },
  {
    name: "silver",
    source: "mining"
  },
  {
    name: "gold",
    source: "mining"
  },
  {
    name: "emerald",
    source: "mining"
  },
  {
    name: "platinum",
    source: "mining"
  },
  {
    name: "topaz",
    source: "mining"
  },
  {
    name: "ruby",
    source: "mining"
  },
  {
    name: "diamond",
    source: "mining"
  },
  {
    name: "sapphire",
    source: "mining"
  },
  {
    name: "amethyst",
    source: "mining"
  },
  {
    name: "titaniumOre",
    source: "mining"
  },
  {
    name: "alexandrite",
    source: "mining"
  },
  {
    name: "uranium",
    source: "mining"
  },
  {
    name: "obsidian",
    source: "mining"
  },
  {
    name: "uraniumRod",
    source: "enrichment",
    time: 600,
    components: [
      {
        material: "uranium",
        quantity: 100
      },
      {
        material: "sodium",
        quantity: 50
      }
    ]
  },
  {
    name: "polishedAlexandrite",
    source: "jewelCrafting",
    time: 60,
    components: [
      {
        material: "alexandrite",
        quantity: 5
      }
    ]
  },
  {
    name: "titanium",
    source: "chemistry",
    time: 20,
    batch: 50,
    components: [
      {
        material: "sulfuricAcid",
        quantity: 1
      },
      {
        material: "titaniumOre",
        quantity: 100
      }
    ]
  },
  {
    name: "diethylEther",
    source: "chemistry",
    time: 60,
    components: [
      {
        material: "sulfuricAcid",
        quantity: 1
      },
      {
        material: "ethanol",
        quantity: 1
      }
    ]
  },
  {
    name: "gunpowder",
    source: "chemistry",
    time: 120,
    batch: 20,
    components: [
      {
        material: "diethylEther",
        quantity: 1
      },
      {
        material: "sulfuricAcid",
        quantity: 2
      },
      {
        material: "tree",
        quantity: 2
      }
    ]
  },
  {
    name: "gear",
    source: "crafting",
    time: 80,
    components: [
      {
        material: "diamondCutter",
        quantity: 1
      },
      {
        material: "titaniumBar",
        quantity: 1
      }
    ]
  },
  {
    name: "bomb",
    source: "crafting",
    time: 120,
    components: [
      {
        material: "titaniumBar",
        quantity: 5
      },
      {
        material: "gunpowder",
        quantity: 10
      }
    ]
  },
  {
    name: "titaniumBar",
    source: "smelting",
    time: 60,
    components: [
      {
        material: "titanium",
        quantity: 5
      }
    ]
  },
  {
    name: "copperBar",
    source: "smelting",
    time: 10,
    components: [
      {
        material: "copper",
        quantity: 5
      }
    ]
  },
  {
    name: "ironBar",
    source: "smelting",
    time: 15,
    components: [
      {
        material: "iron",
        quantity: 5
      }
    ]
  },
  {
    name: "glass",
    source: "smelting",
    time: 60,
    components: [
      {
        material: "silicon",
        quantity: 2
      }
    ]
  },
  {
    name: "aluminumBar",
    source: "smelting",
    time: 15,
    components: [
      {
        material: "aluminum",
        quantity: 5
      }
    ]
  },
  {
    name: "steelBar",
    source: "smelting",
    time: 45,
    components: [
      {
        material: "ironBar",
        quantity: 1
      },
      {
        material: "graphite",
        quantity: 1
      }
    ]
  },
  {
    name: "silverBar",
    source: "smelting",
    time: 60,
    components: [
      {
        material: "silver",
        quantity: 5
      }
    ]
  },
  {
    name: "charcoal",
    source: "smelting",
    time: 60,
    batch: 50,
    components: [
      {
        material: "tree",
        quantity: 1
      }
    ]
  },
  {
    name: "goldBar",
    source: "smelting",
    time: 60,
    components: [
      {
        material: "gold",
        quantity: 5
      }
    ]
  },
  {
    name: "steelPlate",
    source: "smelting",
    time: 120,
    components: [
      {
        material: "steelBar",
        quantity: 5
      }
    ]
  },
  {
    name: "graphite",
    source: "crafting",
    time: 5,
    value: 15,
    components: [
      {
        material: "coal",
        quantity: 5
      }
    ]
  },
  {
    name: "copperNail",
    source: "crafting",
    time: 20,
    batch: 10,
    value: 10,
    components: [
      {
        material: "copperBar",
        quantity: 1
      }
    ]
  },
  {
    name: "wire",
    source: "crafting",
    time: 30,
    batch: 5,
    value: 15,
    components: [
      {
        material: "copperBar",
        quantity: 1
      }
    ]
  },
  {
    name: "battery",
    source: "crafting",
    time: 120,
    value: 200,
    components: [
      {
        material: "amber",
        quantity: 1
      },
      {
        material: "ironBar",
        quantity: 1
      },
      {
        material: "copperBar",
        quantity: 5
      }
    ]
  },
  {
    name: "circuit",
    source: "crafting",
    time: 180,
    value: 2070,
    components: [
      {
        material: "ironBar",
        quantity: 10
      },
      {
        material: "graphite",
        quantity: 50
      },
      {
        material: "copperBar",
        quantity: 20
      }
    ]
  },
  {
    name: "lamp",
    source: "crafting",
    time: 80,
    value: 760,
    components: [
      {
        material: "wire",
        quantity: 10
      },
      {
        material: "graphite",
        quantity: 20
      },
      {
        material: "copperBar",
        quantity: 5
      }
    ]
  },
  {
    name: "flask",
    source: "crafting",
    time: 60,
    value: 800,
    components: [
      {
        material: "glass",
        quantity: 1
      }
    ]
  },
  {
    name: "amberCharger",
    source: "crafting",
    time: 5,
    value: 4,
    components: [
      {
        material: "amber",
        quantity: 1
      }
    ]
  },
  {
    name: "aluminumBottle",
    source: "crafting",
    time: 30,
    value: 55,
    components: [
      {
        material: "aluminumBar",
        quantity: 1
      }
    ]
  },
  {
    name: "amberInsulation",
    source: "crafting",
    time: 20,
    value: 125,
    components: [
      {
        material: "amber",
        quantity: 10
      },
      {
        material: "aluminumBottle",
        quantity: 1
      }
    ]
  },
  {
    name: "insulatedWire",
    source: "crafting",
    time: 200,
    value: 750,
    components: [
      {
        material: "wire",
        quantity: 1
      },
      {
        material: "amberInsulation",
        quantity: 1
      }
    ]
  },
  {
    name: "greenLaser",
    source: "crafting",
    time: 20,
    batch: 5,
    value: 400,
    components: [
      {
        material: "polishedEmerald",
        quantity: 1
      },
      {
        material: "insulatedWire",
        quantity: 1
      },
      {
        material: "lamp",
        quantity: 1
      }
    ]
  },
  {
    name: "diamondCutter",
    source: "crafting",
    time: 30,
    value: 5000,
    components: [
      {
        material: "steelPlate",
        quantity: 1
      },
      {
        material: "polishedDiamond",
        quantity: 5
      }
    ]
  },
  {
    name: "motherboard",
    source: "crafting",
    time: 1800,
    value: 17000,
    components: [
      {
        material: "silicon",
        quantity: 3
      },
      {
        material: "circuit",
        quantity: 3
      },
      {
        material: "goldBar",
        quantity: 1
      }
    ]
  },
  {
    name: "solidPropellant",
    source: "crafting",
    time: 1200,
    value: 27000,
    components: [
      {
        material: "rubber",
        quantity: 3
      },
      {
        material: "aluminumBar",
        quantity: 10
      }
    ]
  },
  {
    name: "accumulator",
    source: "crafting",
    time: 180,
    value: 9000,
    components: [
      {
        material: "sodium",
        quantity: 20
      },
      {
        material: "sulfur",
        quantity: 20
      }
    ]
  },
  {
    name: "solarPanel",
    source: "crafting",
    time: 60,
    value: 69000,
    components: [
      {
        material: "rubber",
        quantity: 1
      },
      {
        material: "silicon",
        quantity: 10
      },
      {
        material: "glass",
        quantity: 50
      }
    ]
  },
  {
    name: "silicon",
    source: "chemicalMining",
    time: 600,
    batch: 5,
    value: 100
  },
  {
    name: "sulfur",
    source: "chemicalMining",
    time: 600,
    batch: 5,
    value: 100
  },
  {
    name: "sodium",
    source: "chemicalMining",
    time: 600,
    batch: 5,
    value: 100
  },
  {
    name: "oil",
    source: "oilPumping",
    value: 21
  },
  {
    name: "water",
    source: "waterCollection",
    value: 5
  },
  {
    name: "tree",
    source: "greenhouse",
    time: 1800,
    batch: 10,
    value: 193,
    components: [
      {
        material: "treeSeed",
        quantity: 1
      },
      {
        material: "water",
        quantity: 10
      }
    ]
  },
  {
    name: "liana",
    source: "greenhouse",
    time: 1800,
    components: [
      {
        material: "lianaSeed",
        quantity: 1
      },
      {
        material: "water",
        quantity: 20
      }
    ]
  },
  {
    name: "grape",
    source: "greenhouse",
    time: 1800,
    batch: 2,
    components: [
      {
        material: "grapeSeed",
        quantity: 1
      },
      {
        material: "water",
        quantity: 15
      }
    ]
  },
  {
    name: "treeSeed",
    source: "shop",
    value: 20
  },
  {
    name: "lianaSeed",
    source: "shop",
    value: 1000
  },
  {
    name: "grapeSeed",
    source: "shop",
    value: 1200
  },
  {
    name: "cleanWater",
    source: "chemistry",
    time: 600,
    value: 1200,
    components: [
      {
        material: "water",
        quantity: 1
      },
      {
        material: "flask",
        quantity: 1
      }
    ]
  },
  {
    name: "rubber",
    source: "chemistry",
    time: 1800,
    value: 4000,
    batch: 2,
    components: [
      {
        material: "liana",
        quantity: 1
      }
    ]
  },
  {
    name: "sulfuricAcid",
    source: "chemistry",
    time: 1800,
    value: 3500,
    components: [
      {
        material: "cleanWater",
        quantity: 1
      },
      {
        material: "sulfur",
        quantity: 2
      }
    ]
  },
  {
    name: "ethanol",
    source: "chemistry",
    time: 1800,
    value: 4200,
    components: [
      {
        material: "aluminumBottle",
        quantity: 1
      },
      {
        material: "grape",
        quantity: 2
      }
    ]
  },
  {
    name: "refinedOil",
    source: "chemistry",
    time: 1800,
    value: 16500,
    components: [
      {
        material: "flask",
        quantity: 1
      },
      {
        material: "hydrogen",
        quantity: 10
      },
      {
        material: "oil",
        quantity: 10
      }
    ]
  },
  {
    name: "plastic",
    source: "chemistry",
    time: 600,
    value: 40000,
    components: [
      {
        material: "refinedOil",
        quantity: 1
      },
      {
        material: "coal",
        quantity: 50
      },
      {
        material: "greenLaser",
        quantity: 1
      }
    ]
  },
  {
    name: "hydrogen",
    source: "chemistry",
    time: 900,
    value: 400,
    batch: 2,
    byproduct: "oxygen",
    components: [
      {
        material: "cleanWater",
        quantity: 1
      }
    ]
  },
  {
    name: "oxygen",
    source: "hydrogen",
    value: 800
  },
  {
    name: "polishedAmber",
    source: "jewelCrafting",
    time: 30,
    value: 70,
    components: [
      {
        material: "amber",
        quantity: 5
      }
    ]
  },
  {
    name: "polishedEmerald",
    source: "jewelCrafting",
    time: 30,
    value: 160,
    components: [
      {
        material: "emerald",
        quantity: 5
      }
    ]
  },
  {
    name: "amberBracelet",
    source: "jewelCrafting",
    time: 120,
    value: 280,
    components: [
      {
        material: "polishedAmber",
        quantity: 1
      },
      {
        material: "silverBar",
        quantity: 1
      }
    ]
  },
  {
    name: "emeraldRing",
    source: "jewelCrafting",
    time: 300,
    value: 450,
    components: [
      {
        material: "polishedEmerald",
        quantity: 1
      },
      {
        material: "goldBar",
        quantity: 1
      }
    ]
  },
  {
    name: "polishedTopaz",
    source: "jewelCrafting",
    time: 60,
    value: 70,
    components: [
      {
        material: "topaz",
        quantity: 5
      }
    ]
  },
  {
    name: "polishedRuby",
    source: "jewelCrafting",
    time: 60,
    value: 75,
    components: [
      {
        material: "ruby",
        quantity: 5
      }
    ]
  },
  {
    name: "polishedDiamond",
    source: "jewelCrafting",
    time: 60,
    value: 90,
    components: [
      {
        material: "diamond",
        quantity: 5
      }
    ]
  },
  {
    name: "polishedSapphire",
    source: "jewelCrafting",
    time: 60,
    value: 80,
    components: [
      {
        material: "sapphire",
        quantity: 5
      }
    ]
  },
  {
    name: "polishedAmethyst",
    source: "jewelCrafting",
    time: 60,
    value: 90,
    components: [
      {
        material: "amethyst",
        quantity: 5
      }
    ]
  },
  {
    name: "mayaCalendar",
    source: "jewelCrafting",
    time: 120,
    components: [
      {
        material: "goldBar",
        quantity: 10
      },
      {
        material: "silverBar",
        quantity: 2
      }
    ]
  },
  {
    name: "hairComb",
    source: "jewelCrafting",
    time: 120,
    components: [
      {
        material: "silverBar",
        quantity: 1
      },
      {
        material: "polishedAmethyst",
        quantity: 15
      },
      {
        material: "polishedAlexandrite",
        quantity: 10
      }
    ]
  }
];
