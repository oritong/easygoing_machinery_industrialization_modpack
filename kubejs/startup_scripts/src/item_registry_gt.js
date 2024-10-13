let product_material = [
    'iron',
    'copper'
]
let semi_finished_products = [
    'gear',
    'rod',
    'plate',
    'blade',
    'bolt',
    'curved_plate',
    'fine_wire',
    'ring',
    'rotor',
    'wire'
]
let colors = [
    0xf0f0f0,
    0xe97900
]
StartupEvents.registry('item', e => {
product_material.forEach((m, index) => {
    let l = colors[index];
    semi_finished_products.forEach(c => {
        e.create(`gregtech:${m}_${c}`).texture(`gregtech:item/${c}`).color(l);
    });
});
})