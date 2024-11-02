let ore = [
    'coal',
    'copper',
    'gold',
    'iron',
    'lapis',
    'redstone',
    'silver',
    'tin'
]

StartupEvents.registry('block', e => {
    ore.forEach(type => {
        e.create(`oritong:${type}_bpf`).material('metal').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
        e.create(`oritong:${type}_ore`).material('stone').tagBoth('oritong:ores').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
    })
    e.create('oritong:basic_portal_frame').material('metal').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
})
