ServerEvents.recipes(e => {
    banthings.forEach(Item => {
        e.remove({ output: Item })
    })
    banlists.forEach(Lists => {
        e.remove({ id: Lists})
    })
    e.remove({mod: 'farmersdelight', not:{id: 'farmersdelight:cutting_board'}})
    e.remove({mod: 'dumplings_delight'})
})

let banthings = [
    'umapyoi:jewel'
]
let banlists = [
    'minecraft:bamboo_block',
    'minecraft:scaffolding'
]
/*
// 物品过滤器例子 + 配方移除例子
// 移除所有配方:
event.remove({}) 
// 移除输出物品为石斧的配方：
event.remove({output: 'minecraft:stone_pickaxe'}) 
// 移除输出物品带有羊毛tag的配方：
event.remove({output: '#minecraft:wool'})
// 移除输入物品带有红石tag的配方：
event.remove({input: '#forge:dusts/redstone'})
// 移除农夫乐事添加的配方：
event.remove({mod: 'farmersdelight'})
// 移除所有营火配方：
event.remove({type: 'minecraft:campfire_cooking'}) 
// 移除除熔炉以外所有输出物品为石头的配方:
event.remove({not:{type:"minecraft:smelting"},output:"stone"}) 
// 移除输出物品为熟鸡肉的营火配方：
event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'})
// 移除熔炉或高炉的输出物品为铁锭的配方：
event.remove([{type:'minecraft:smelting',output:'minecraft:iron_ingot'}, {type:'minecraft:blasting', output:'minecraft:iron_ingot'}])	  
// 通过ID移除配方（data/minecraft/recipes/glowstone.json）：
// 注：配方ID和输出物品是两个概念！
event.remove({id: 'minecraft:glowstone'})

*/