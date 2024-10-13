ServerEvents.tags('item', e => {
  e.add('kjs:arcs', 'ars_nouveau:blue_archwood_sapling')
  e.add('kjs:arcs', 'ars_nouveau:red_archwood_sapling')
  e.add('kjs:arcs', 'ars_nouveau:purple_archwood_sapling')
  e.add('kjs:arcs', 'ars_nouveau:green_archwood_sapling')
  e.add('minecraft:axes', 'kubejs:flint_axe')
})
/*
// 监听标签事件
ServerEvents.tags('item', event => {
  // 将 minecraft:diamond_ore 添加至 #forge:cobblestone
  e.add('forge:cobblestone', 'minecraft:diamond_ore')
  
  // 从 #forge:cobblestone 中移除 minecraft:mossy_cobblestone
  e.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')
  
  // 移除 #forge:ingots/copper 中的所有对象
  e.removeAll('forge:ingots/copper')
  
  // 用于 FTB任务 检测物品NBT
  e.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')
  
  // 自定义标签（#forge:completely_new_tag）
  e.add('forge:completely_new_tag', 'minecraft:clay_ball')
  
  // 移除包含 minecraft:stick 的所有标签中的所有对象
  e.removeAllTagsFrom('minecraft:stick')
  
  // 将 #forge:stone 中所有非闪长岩对象添加到 #c:stone 中
  const stones = e.get('forge:stone').getObjectIds()
  const blacklist = Ingredient.of(/.*diorite.*(delete me)/)
  stones.forEach(stone => {
    if (!blacklist.test(stone)) {
      e.add('c:stone', stone)
    }
  })
})
*/
