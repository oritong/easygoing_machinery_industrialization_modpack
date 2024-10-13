ServerEvents.loaded(e => {
    e.server.gameRules.set("doMobSpawning", false)
    e.server.gameRules.set("doWeatherCycle", false)
    e.server.gameRules.set("doDaylightCycle", false)
    e.server.gameRules.set("keepInventory", true)
    e.server.gameRules.set("doImmediateRespawn", true)
})

PlayerEvents.respawned(event => {
    let player = event.player;
    
    // 给予玩家缓慢II效果，持续8秒（160刻）
    player.potion("minecraft:slowness", 160, 1);
    
    // 给予玩家失明效果，持续5秒（100刻）
    player.potion("minecraft:blindness", 100, 0);
    
    // 给予玩家虚弱I效果，持续5秒（100刻）
    player.potion("minecraft:weakness", 100, 0);
    
    // 发送消息到聊天栏
    player.tell("<rainb>你不小心步入了深渊，但有女神拉起了你");
});
