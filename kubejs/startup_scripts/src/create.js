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
	e.create('fire_clay_bricks').material('stone').requiresTool(true).tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_stone_tool")
})
/*
以下为 MaterialJS 支持的值（Minecraft 1.19.4）：
"grass" | "spore_blossom" | "dripstone" | "slime" | "berry_bush" | "ice" | "gilded_blackstone" | "small_amethyst_bud" | "amethyst_cluster" | "mud" 
| "amethyst" | "dragon_egg" | "packed_mud" | "crop" | "anvil" | "dirt" | "nether_sprouts" | "powder_snow" | "air" | "pointed_dripstone" | "muddy_mangrove_roots" 
| "lava" | "chain" | "sculk_sensor" | "leaves" | "clay" | "netherrack" | "medium_amethyst_bud" | "basalt" | "portal" | "mud_bricks" | "soul_soil" 
| "mangrove_roots" | "big_dripleaf" | "sculk_catalyst" | "bone" | "vine" | "web" | "polished_deepslate" | "coral" | "weeping_vines" | "plant" 
| "sculk_shrieker" | "large_amethyst_bud" | "explosive" | "copper" | "roots" | "ancient_debris" | "netherite" | "snow" | "moss_carpet" | "sculk_vein" 
| "stone" | "sculk" | "glow_lichen" | "hanging_roots" | "cake" | "nether_wart" | MaterialJS | "froglight" | "honey" | "small_dripleaf" | "kelp" | "nether_ore" 
| "sand" | "frogspawn" | "water" | "glass" | "azalea_leaves" | "tuff" | "metal" | "rooted_dirt" | "soul_sand" | "moss" | "deepslate" | "cave_vines" | "twisting_vines" 
| "deepslate_bricks" | "nylium" | "vegetable" | "azalea" | "scaffolding" | "flowering_azalea" | "sponge" | "lodestone" | "nether_bricks" | "lantern" | "candle" 
| "sea_grass" | "calcite" | "wart_block" | "nether_gold_ore" | "bamboo_sapling" | "wool" | "deepslate_tiles" | "bamboo" | "shroomlight" | "wood" | "hard_crop"
*/
StartupEvents.registry("sound_event", (event) => {
    event.create("music.take")
})

StartupEvents.registry("item", (event) => {
    event.create("kubejs:take_disc", "music_disc")
        .song("kubejs:music.take", 141)
        .tag("music_discs")
})