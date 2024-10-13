LootJS.modifiers(e => {
    e.addBlockLootModifier('endless_modpack_ingredients:kobejs')
     .pool((p) => {
        p.addLoot('4x kubejs:he_li_c_o_pt_er_dust');
    });
})