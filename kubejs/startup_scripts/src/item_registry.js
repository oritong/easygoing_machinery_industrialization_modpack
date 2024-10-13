let registry_oritong = [
    
]
let registry_common = [
    'modern_industrialization:wood_plate',
]
StartupEvents.registry("item", e => {
    registry_oritong.forEach(thing => {
        e.create(`oritong:${thing}`);
    })
    registry_common.forEach(thing => {
        e.create(thing);
    })
})