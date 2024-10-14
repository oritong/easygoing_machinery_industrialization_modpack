let registry_oritong = [
]
let registry_common = [
    'modern_industrialization:wood_plate',
    'oritong',
    'copper_credit'
]
StartupEvents.registry("item", e => {
    registry_oritong.forEach(thing => {
        e.create(`oritong:${thing}`);
    })
    registry_common.forEach(thing => {
        e.create(thing);
    })
    e.create('doge_coin').rarity("uncommon")
    e.create('osmium_credit').rarity("rare")
    e.create('gold_credit').rarity("uncommon")
    e.create('neutronium_credit').rarity("epic")
})