BlockEvents.rightClicked(event => {
    // 检查玩家是否在潜行并且空手
    if (event.player.isCrouching() && event.player.mainHandItem.isEmpty()) {
        // 检查右键的方块是否为泥土
        if (event.block.id === 'minecraft:dirt') {
            // 获取玩家右键点击的方块位置
            let pos = event.block.pos;

            // 在泥土上方生成掉落物
            event.server.runCommandSilent(`summon minecraft:item ${pos.x} ${pos.y + 1} ${pos.z} {Item:{id:"mangia_sassi:sasso",Count:1}}`)
        }
    }
});

// 监听玩家手持物品的事件
PlayerEvents.tick(event => {
    let player = event.player;
    let offHandItem = player.getOffhandItem();

    // 检查玩家左手是否拿着指定物品
    if (offHandItem.getId() === 'mangia_sassi:sassocaldo') {
        // 使玩家燃烧
        player.setRemainingFireTicks(100)
    }
});