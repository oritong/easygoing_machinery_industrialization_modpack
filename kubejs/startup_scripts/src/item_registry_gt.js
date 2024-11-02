StartupEvents.registry('item', e => {
    const product = [
        ['aluminium', 0xc8fbfc, 'Al'],
        ['invar', 0xa89c69, 'Fe₆₄Ni₃₆'],
        ['iron', 0xf0f0f0, 'Fe'],
        ['copper', 0xc15a36, 'Cu'],
        ['steel', 0x888888, 'Fe'],
        ['tin', 0xd1d5d5, 'Sn'],
        ['gold', 0xffec4f, 'Au'],
        ['silver', 0xc1f0f0, 'Ag'],
        ['bronze', 0xff8a4b, 'CuH²Sn']
    ];
    const semi_finished_products = [
        'gear',
        'rod',
        'plate',
        'large_plate',
        'blade',
        'bolt',
        'curved_plate',
        'fine_wire',
        'ring',
        'rotor',
        'wire',
        'gear_large',
        'gear_small',
        'precision_gear_mechanism',
        'ingot',
        'dust',
        'tiny_dust',
        'nugget',
        'long_rod'
    ];

    product.forEach(([a, d, f]) => {
        semi_finished_products.forEach(b => {
            e.create(`gregtech:${a}_${b}`).texture(`gregtech:item/${b}`).color(d).tooltip(`§e${f}`).tag(`oritong:${b}`)
        })
    })
})
