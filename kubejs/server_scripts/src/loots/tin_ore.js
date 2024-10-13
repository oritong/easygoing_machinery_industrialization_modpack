ServerEvents.highPriorityData(event => {
    event.addJson('kubejs:loot_tables/blocks/tin_ore_small.json', {
        "type": "minecraft:block",
        "pools": [
            {
                "rolls": 1,
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_tin_dust",
                        "weight": 55
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_cassiterite_dust",
                        "weight": 33
                    },
                    {
                        "type": "minecraft:item",
                        "name": "gtceu:impure_cassiterite_sand_dust",
                        "weight": 12
                    }
                ]
            }
        ]
    });
});
