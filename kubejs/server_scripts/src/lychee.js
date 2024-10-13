ServerEvents.recipes(e => {
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'mangia_sassi:sassocaldo'
        },
        "block_in": 'minecraft:cobblestone',
        "post": [
            {
                "type": "drop_item",
                "item": 'minecraft:flint',
            },
            {
                "type": "place",
                "block": "minecraft:air"
            },
            {
                "type": 'damage_item',
                'count': '1'
            }
        ]
    })
})