ServerEvents.highPriorityData(event => {
    event.addJson('kubejs:loot_tables/blocks/iron_ore_small.json', {
        "type": "minecraft:block",
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_iron_dust",
                        "weight": 11
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_almandine_dust",
                        "weight": 7
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_hematite_dust",
                        "weight": 24
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_magnetite_dust",
                        "weight": 21
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_pyrite_dust",
                        "weight": 8
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_goethite_dust",
                        "weight": 10
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_vanadium_magnetite_dust",
                        "weight": 8
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_ilmenite_dust",
                        "weight": 1
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_yellow_limonite_dust",
                        "weight": 7
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_chromite_dust",
                        "weight": 1
                    }
                ]
            }
        ]
    });
});
