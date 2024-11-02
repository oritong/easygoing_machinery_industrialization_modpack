/*
let product_material = [
    'iron',
]
let colors = [
    0xf0f0f0,
    0xe97900,
    0xb8ffff,
    0x505050
]
StartupEvents.registry('item', e => {
    product_material.forEach((m, index) => {
        let l = colors[index];
        
        // 检查当前材料是否在 no_product_material 中
        if (no_product_material.includes(m)) {
            // 当前材料在 no_product_material 中，跳过 no_semi_finished_products 中的半成品
            semi_finished_products.forEach(c => {
                if (!no_semi_finished_products.includes(c)) {
                    // 如果半成品不在 no_semi_finished_products 中，则创建物品
                    e.create(`gregtech:${m}_${c}_dust`).texture(`gregtech:item/${c}`).color(l);
                }
            });
        } else {
            // 当前材料不在 no_product_material 中，正常创建所有物品
            semi_finished_products.forEach(c => {
                e.create(`gregtech:${m}_${c}_dust`).texture(`gregtech:item/${c}`).color(l);
            });
        }
    });
});
*/