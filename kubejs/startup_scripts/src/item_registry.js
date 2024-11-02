let registry_common = [
    'modern_industrialization:wood_plate',
    'oritong',
    'copper_credit',
    'miraidon',
    'fire_clay_brick',
    'fire_clay_dust',
    'peko_hammer',
    'neutron_redstone_dust'
]
StartupEvents.registry("item", e => {
    registry_tic3.forEach(thing => {
        e.create(`tic3:${thing}`).tag(`oritong:tic3_${thing}`).tag('oritong:tic3_mold')
        e.create(`tic3:all_${thing}`).glow(true).tag(`oritong:tic3_${thing}`).texture(`tic3:item/${thing}`).tag('oritong:tic3_mold')
    })
    registry_common.forEach(thing => {
        e.create(thing);
    })
    e.create('doge_coin').rarity("uncommon")
    e.create('osmium_credit').rarity("rare")
    e.create('gold_credit').rarity("uncommon")
    e.create('neutronium_credit').rarity("epic")
    e.create('rotom').rarity("epic")
})
let registry_tic3 = [
    'gear',
    'rod',
    'plate',
    'large_plate',
    'blade',
    'bolt',
    'fine_wire',
    'ring',
    'wire',
    'gear_large',
    'gear_small',
    'ingot',
    'nugget',
    'long_rod'
]
/*
ServerEvents.registry('item', e => {
    e.create('saddle_with_endpearl').maxStackSize(1).attachCapability('curios:itemstack', {}).tag('curios:curio')  // Adjusted the attachCapability method
} )
ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTeleportEvent$EnderPearl', e => {
    const { player } = e
    if (PlayerCurios.isPresent(player, 'kubejs:pearl_saddle')) event.setCanceled(true)
})
*/