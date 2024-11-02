ServerEvents.recipes(e => {

    e.recipes.kubejs.shaped('minecraft:bamboo_block', [
        'AA',
        'AA'
    ],{
        A: 'minecraft:bamboo'
    })
    e.recipes.kubejs.shaped('minecraft:scaffolding', [
        'AAA',
        'AAA',
        'ABA'
    ],{
        A: 'bamboo',
        B: '#minecraft:axes'
    }).damageIngredient('#minecraft:axes', 10)
})