ServerEvents.highPriorityData(event => {
    event.addJson('kubejs:loot_tables/blocks/copper_ore_small.json', {
        "type": "minecraft:block",
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_copper_dust",
                        "weight": 22
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_chalcopyrite_dust",
                        "weight": 38
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_tetrahedrite_dust",
                        "weight": 14
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_bornite_dust",
                        "weight": 14
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_chalcocite_dust",
                        "weight": 12
                    }
                ]
            }
        ]
    });
});
