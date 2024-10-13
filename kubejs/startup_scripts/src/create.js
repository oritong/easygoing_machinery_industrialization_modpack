StartupEvents.registry("item", e => {
	e.create('he_li_c_o_pt_er_ingot', 'basic')
	e.create('he_li_c_o_pt_er_dust', 'basic')
	e.create('he_li_c_o_pt_er_plate', 'basic')
	e.create('he_li_c_o_pt_er_nugget', 'basic')

	e.create('palworld:fist_plate', 'basic')
	e.create('palworld:sky_plate', 'basic')
	e.create('palworld:legend_plate', 'basic').rarity("uncommon")
	e.create('palworld:blank_plate', 'basic')
	e.create('palworld:pixie_plate', 'basic')
	e.create('palworld:dread_plate', 'basic')
	e.create('palworld:draco_plate', 'basic')
	e.create('palworld:icicle_plate', 'basic')
	e.create('palworld:mind_plate', 'basic')
	e.create('palworld:zap_plate', 'basic')
	e.create('palworld:meadow_plate', 'basic')
	e.create('palworld:splash_plate', 'basic')
	e.create('palworld:flame_plate', 'basic')
	e.create('palworld:iron_plate', 'basic')
	e.create('palworld:spooky_plate', 'basic')
	e.create('palworld:insect_plate', 'basic')
	e.create('palworld:stone_plate', 'basic')
	e.create('palworld:earth_plate', 'basic')
	e.create('palworld:toxic_plate', 'basic')

	e.create('palworld:normal_tera_shard')
	e.create('palworld:fire_tera_shard')
	e.create('palworld:water_tera_shard')
	e.create('palworld:stellar_tera_shard')
	e.create('palworld:fairy_tera_shard')
	e.create('palworld:steel_tera_shard')
	e.create('palworld:dark_tera_shard')
	e.create('palworld:dragon_tera_shard')
	e.create('palworld:ghost_tera_shard')
	e.create('palworld:rock_tera_shard')
	e.create('palworld:bug_tera_shard')
	e.create('palworld:psychic_tera_shard')
	e.create('palworld:flying_tera_shard')
	e.create('palworld:ground_tera_shard')
	e.create('palworld:poison_tera_shard')
	e.create('palworld:fighting_tera_shard')
	e.create('palworld:ice_tera_shard')
	e.create('palworld:grass_tera_shard')
	e.create('palworld:electric_tera_shard')

	e.create('palworld:black')
	e.create('palworld:white')
})

StartupEvents.registry('block', e => {
	e.create('enchanting_apparatus', 'basic').defaultTranslucent().renderType('cutout')
	e.create('iron_ore_small').material('stone').tagBoth('forge:ores').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
	e.create('copper_ore_small').material('stone').tagBoth('forge:ores').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
	e.create('tin_ore_small').material('stone').tagBoth('forge:ores').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
})

StartupEvents.registry("fluid", (event) => {
	// ModID声明如果选择不更改ModID(默认即"kubejs")直接把ModID这个变量取消
	const MODID = "craetemetallurgy:"
	// 路径常量
	const PATH = "block/fluid/"
	
	/* 
	* 定义流体
	* 在添加下一种流体时要记得在[]后加上逗号
	* 并且一定要严格按照格式进行
	* [流体id, 颜色]
	*/
	let fluidRegisters = [
		["molten_andesite_alloy", 0xc2c2c2],
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(MODID + name) // 声明id
			.thickTexture(color) // 流体颜色
			.bucketColor(color) // 桶内流体颜色
			.noBlock()
	})
})


StartupEvents.registry("sound_event", (event) => {
    event.create("music.take")
})

StartupEvents.registry("item", (event) => {
    event.create("kubejs:take_disc", "music_disc")
        .song("kubejs:music.take", 141)
        .tag("music_discs")
})