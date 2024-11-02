ServerEvents.recipes(e => {
    e.recipes.kubejs.shapeless('64x kubejs:osmium_credit', 'kubejs:neutronium_credit')
    e.recipes.kubejs.shapeless('64x kubejs:gold_credit', 'kubejs:osmium_credit')
    e.recipes.kubejs.shapeless('64x kubejs:copper_credit', 'kubejs:gold_credit')
    e.recipes.kubejs.shapeless('2x minecraft:stick', ['#minecraft:axes', 'minecraft:bamboo']).damageIngredient({tag:'#minecraft:axes'}, 1)
})