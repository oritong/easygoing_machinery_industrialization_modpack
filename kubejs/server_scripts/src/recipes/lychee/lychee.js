ServerEvents.recipes(e => {
    e.custom({
        "type": "lychee:item_inside",
        "hide_in_viewer": true,
        "post": [
          {
            "type": "explode",
            "fire": true,
            "block_interaction": "destroy",
            "radius": 5
          }
        ],
        "item_in": [
          {
            "item": "kubejs:oritong"
          }
        ],
        "block_in": "lychee:always_true",
        "time": 1
      })
})