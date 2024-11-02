ItemEvents.tooltip( e => {
    
    e.add('kubejs:he_li_c_o_pt_er_dust', '§eHeLiCOPtEr')
    e.add('kubejs:he_li_c_o_pt_er_nugget', '§eHeLiCOPtEr')
    e.add('kubejs:he_li_c_o_pt_er_plate', '§eHeLiCOPtEr')
    e.add('thrown:kzzyc', '§c这是一个空指针，你抛出了它，但是……代价呢？')
    e.add('palworld:black', Text.translate('tt.black'))
    e.add('palworld:white', Text.translate('tt.white'))
    e.add('youkaishomecoming:reimu_hairband', Text.translate('tt.reimuhb'))
    e.add('kubejs:doge_coin', Text.translate('tt.doge_coin'))
    e.add('kubejs:rotom', Text.translate('tt.rotom'))
    e.add('kubejs:copper_credit', Text.translate('tt.copper_credit'))
    e.add('kubejs:gold_credit', Text.translate('tt.gold_credit'))
    e.add('kubejs:osmium_credit', Text.translate('tt.osmium_credit'))
    e.add('kubejs:neutronium_credit', Text.translate('tt.neotronium_credit'))
})
const tooltip = [
    ['kubejs:he_li_c_o_pt_er_ingot', '§eHeLiCOPtEr'],
    ['kubejs:another_item', '§eAnotherItem'],
    ['tic3:all_gear', '§7上一个是小齿轮铸模 \n §e当前为齿轮铸模 \n §7下一个为大齿轮铸模'],
    ['tic3:all_gear_large', '§7上一个是齿轮铸模 \n §e当前为大齿轮铸模 \n §7下一个为板铸模'],
    ['tic3:all_plate', '§7上一个是大齿轮铸模 \n §e当前为板铸模 \n §7下一个为大板铸模'],
    ['tic3:all_large_plate', '§7上一个是板铸模 \n §e当前为大板铸模 \n §7下一个为杆铸模'],
    ['tic3:all_rod', '§7上一个是大板铸模 \n §e当前为杆铸模 \n §7下一个为长杆铸模'],
    ['tic3:all_long_rod', '§7上一个是杆铸模 \n §e当前为长杆铸模 \n §7下一个为螺栓铸模'],
    ['tic3:all_bolt', '§7上一个是长杆铸模 \n §e当前为螺栓铸模 \n §7下一个为扇叶铸模'],
    ['tic3:all_blade', '§7上一个是螺栓铸模 \n §e当前为扇叶铸模 \n §7下一个为锭铸模'],
    ['tic3:all_ingot', '§7上一个是扇叶铸模 \n §e当前为锭铸模 \n §7下一个为大齿轮铸模'],
    ['tic3:all_nugget', '§7上一个是锭铸模 \n §e当前为粒铸模 \n §7下一个为环铸模'],
    ['tic3:all_ring', '§7上一个是粒铸模 \n §e当前为环铸模 \n §7下一个为线铸模'],
    ['tic3:all_wire', '§7上一个是环铸模 \n §e当前为线铸模 \n §7下一个为细线铸模'],
    ['tic3:all_fine_wire', '§7上一个是线铸模 \n §e当前为细线铸模 \n §7下一个为小齿轮铸模'],
    ['tic3:all_gear_small', '§7上一个是细线铸模 \n §e当前为小齿轮铸模 \n §7下一个为齿轮铸模']
];

ItemEvents.tooltip(e => {
    tooltip.forEach(item => {
        const key = item[0]
        const text = item[1]
        
        e.add(key, Text.translate('tt.' + key))// 输出第一段
    });
});

ClientEvents.lang('zh_cn', e => {
    tooltip.forEach(item => {
        const key = item[0]
        const text = item[1]
        e.add('tt.' + key, text)// 输出第二段
    })
})