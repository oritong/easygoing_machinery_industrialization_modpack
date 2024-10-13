/*BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create("Test")
    .pattern("ddd", "ggg")
    .pattern("ddd", "ggg")
    .pattern("pds", "gdg")
    .center("s", Blocks.STONE)
    .whereCond("d", b => b == Blocks.DIRT) // 表示 d 代表满足 b==... 的方块 b（可以用字符串）
    .where("g", Blocks.GRASS_BLOCK) // 表示 g 代表草方块（可以用字符串）
    .whereTag("p", "minecraft:planks") // 表示 p 代表带有 planks 标签的任意方块（可以用字符串）
    .craftingItem("minecraft:stick") // 需要手持触发合成的 Item
    .craftingItemTag("forge:ingots") // 需要手持触发合成的 Tag Item
    .result("2x minecraft:diamond") // 输出
    .result(Item.of("minecraft:golden_sword").withNBT({ Unbreakable: 1 })) // 输出的 Item（所附带的 NBT）
    .build());
*/
BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create('basic_table')
    .pattern("AA")
    .pattern("AB")
    .center("B", 'quark:cobblestone_bricks')
    .where("A", 'quark:cobblestone_bricks')
    .craftingItem('minecraft:air')
    .resultItem('extendedcrafting:basic_table')
    .build());
