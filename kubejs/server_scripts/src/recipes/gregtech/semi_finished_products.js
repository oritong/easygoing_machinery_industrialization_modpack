let material = [
    'iron',
    'copper',
    'aluminium',
    'steel',
    'invar',
    'tin',
    'gold',
    'silver',
    'bronze'
]
ServerEvents.recipes(e => {
    material.forEach(z => {
    e.recipes.kubejs.shapeless(`gregtech:${z}_plate`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_plate']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_plate')
    e.recipes.kubejs.shapeless(`4x gregtech:${z}_plate`, [`gregtech:${z}_large_palte`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`gregtech:${z}_large_plate`, [`4x gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_large_plate']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_large_plate')
    e.recipes.kubejs.shapeless(`gregtech:${z}_large_plate`, [`4x gregtech:${z}_plate`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_wire`, [`gregtech:${z}_plate`, 'mekanism:atomic_disassembler', '#oritong:tic3_wire']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_wire')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_wire`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_wire']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_wire')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_fine_wire`, [`gregtech:${z}_wire`, 'mekanism:atomic_disassembler', '#oritong:tic3_fine_wire']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_fine_wire')
    e.recipes.kubejs.shapeless(`4x gregtech:${z}_fine_wire`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_fine_wire']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_fine_wire')
    e.recipes.kubejs.shapeless(`4x gregtech:${z}_fine_wire`, [`gregtech:${z}_plate`, 'mekanism:atomic_disassembler', '#oritong:tic3_fine_wire']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_fine_wire')
    e.recipes.kubejs.shapeless(`gregtech:${z}_curved_plate`, [`gregtech:${z}_plate`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_rod`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_rod']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_rod')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_rod`, [`gregtech:${z}_long_rod`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`gregtech:${z}_long_rod`, [`2x gregtech:${z}_rod`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`gregtech:${z}_long_rod`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_long_rod']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_long_rod')
    e.recipes.kubejs.shapeless(`gregtech:${z}_precision_gear_mechanism`, [`gregtech:${z}_gear_small`, `gregtech:${z}_gear`, `gregtech:${z}_gear_large`, `gregtech:${z}_large_plate`, `3x gregtech:${z}_bolt`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`gregtech:${z}_ring`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_ring']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_ring')
    e.recipes.kubejs.shapeless(`gregtech:${z}_ring`, [`gregtech:${z}_rod`, 'mekanism:atomic_disassembler', '#oritong:tic3_ring']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_ring')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_ring`, [`gregtech:${z}_lang_rod`, 'mekanism:atomic_disassembler', '#oritong:tic3_ring']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_ring')
    e.recipes.kubejs.shapeless(`6x gregtech:${z}_blade`, [`gregtech:${z}_long_rod`, `2x gregtech:${z}_curved_plate`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_blade`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_blade']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_blade')
    e.recipes.kubejs.shapeless(`gregtech:${z}_rotor`, [`4x gregtech:${z}_blade`, 'mekanism:atomic_disassembler']).keepIngredient('mekanism:atomic_disassembler')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_gear_small`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_gear_small']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_gear_small')
    e.recipes.kubejs.shapeless(`gregtech:${z}_gear`, [`2x gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_gear']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_gear')
    e.recipes.kubejs.shapeless(`gregtech:${z}_gear_large`, [`3x gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_gear_large']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_gear_large')
    e.recipes.kubejs.shapeless(`4x gregtech:${z}_bolt`, [`gregtech:${z}_ingot`, 'mekanism:atomic_disassembler', '#oritong:tic3_bolt']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_bolt')
    e.recipes.kubejs.shapeless(`4x gregtech:${z}_bolt`, [`gregtech:${z}_long_rod`, 'mekanism:atomic_disassembler', '#oritong:tic3_bolt']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_bolt')
    e.recipes.kubejs.shapeless(`2x gregtech:${z}_bolt`, [`gregtech:${z}_rod`, 'mekanism:atomic_disassembler', '#oritong:tic3_bolt']).keepIngredient('mekanism:atomic_disassembler').keepIngredient('#oritong:tic3_bolt')
    })
})