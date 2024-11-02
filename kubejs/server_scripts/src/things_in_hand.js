BlockEvents.rightClicked(event => {
    if (event.player.isCrouching() && event.player.mainHandItem.isEmpty()) {
        if (event.block.id === 'minecraft:dirt') {
            let pos = event.block.pos
            event.server.runCommandSilent(`summon minecraft:item ${pos.x} ${pos.y + 1} ${pos.z} {Item:{id:"mangia_sassi:sasso",Count:1}}`)
        }
    }
});
PlayerEvents.tick(event => {
    let player = event.player
    let offHandItem = player.getOffhandItem()
    if (offHandItem.getId() === 'mangia_sassi:sassocaldo') {
        player.setRemainingFireTicks(100)
    }
})

// A: 
ItemEvents.rightClicked('tic3:all_gear', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(N).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(B).withCount(1));item.shrink(1)
        }
    }
});

// B: 
ItemEvents.rightClicked('tic3:all_gear_large', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(A).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(C).withCount(1));item.shrink(1)
        }
    }
});

// C: 
ItemEvents.rightClicked('tic3:all_plate', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(B).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(D).withCount(1));item.shrink(1)
        }
    }
});

// D: 
ItemEvents.rightClicked('tic3:all_large_plate', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(C).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(E).withCount(1));item.shrink(1)
        }
    }
});

// E: 
ItemEvents.rightClicked('tic3:all_rod', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(D).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(F).withCount(1));item.shrink(1)
        }
    }
});

// F: 
ItemEvents.rightClicked('tic3:all_long_rod', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(E).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(G).withCount(1));item.shrink(1)
        }
    }
});

// G: 
ItemEvents.rightClicked('tic3:all_bolt', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(F).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(H).withCount(1));item.shrink(1)
        }
    }
});

// H: 
ItemEvents.rightClicked('tic3:all_blade', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(G).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(I).withCount(1));item.shrink(1)
        }
    }
});

// I: 
ItemEvents.rightClicked('tic3:all_ingot', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(H).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(J).withCount(1));item.shrink(1)
        }
    }
});

// J: 
ItemEvents.rightClicked('tic3:all_nugget', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(I).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(K).withCount(1));item.shrink(1)
        }
    }
});

// K: 
ItemEvents.rightClicked('tic3:all_ring', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(J).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(L).withCount(1));item.shrink(1)
        }
    }
});

// L: 
ItemEvents.rightClicked('tic3:all_wire', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(K).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(M).withCount(1));item.shrink(1)
        }
    }
});

// M: 
ItemEvents.rightClicked('tic3:all_fine_wire', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(L).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(N).withCount(1));item.shrink(1)
        }
    }
});

// N: 
ItemEvents.rightClicked('tic3:all_gear_small', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "main_hand") {
        if (player.isShiftKeyDown()) {
            player.give(Item.of(M).withCount(1));item.shrink(1)
        } else {
            player.give(Item.of(A).withCount(1));item.shrink(1)
        }
    }
});

let A = 'tic3:all_gear';
let B = 'tic3:all_gear_large';
let C = 'tic3:all_plate';
let D = 'tic3:all_large_plate';
let E = 'tic3:all_rod';
let F = 'tic3:all_long_rod';
let G = 'tic3:all_bolt';
let H = 'tic3:all_blade';
let I = 'tic3:all_ingot';
let J = 'tic3:all_nugget';
let K = 'tic3:all_ring';
let L = 'tic3:all_wire';
let M = 'tic3:all_fine_wire';
let N = 'tic3:all_gear_small';
/*
ItemEvents.rightClicked('ender_pearl', e => {
    const { player, item } = e
    if (PlayerCurios.isPresent(player, 'kubejs:saddle_with_endpearl') && !player.isCreative()) item.count += 1
})
EntityEvents.spawned('ender_pearl', e => {
    const { entity, entity: { owner: player} } = e
    if (PlayerCurios.isPresent(player, 'kubejs:saddle_with_endpearl')) player.startRiding(entity)
})
*/