let trans_key = [
    'item.kubejs.doge_coin',
    'tt.black',
    'tt.white','item.palworld.black',
    'item.palworld.white',
    'item.palworld.legend_plate',
    'item.mangia_sassi.sasso',
    'item.mangia_sassi.sassocaldo',
    'tt.reimuhb',
    'item.kubejs.doge_coin',
    'item.kubejs.copper_credit',
    'item.kubejs.gold_credit',
    'item.kubejs.osmium_credit',
    'item.kubejs.neutronium_credit'
]
    let lang = [
    '狗狗币',
    'I：I是环R的非空子集，满足： \n （1）任意a，b∈I，有a-b∈I \n （2）任意r∈R，a∈I，有ar，ra∈I',
    'I：I是环R的理想且I≠R',
    '理想之证',
    '真实之证',
    '<rainb><wave>传说石板',
    '食子',
    '§c炎石',
    '<rainb><wave><wave><wave><wave>我们东方厨也要有自己的天使指环',
    '狗狗币',
    '铜币',
    '金币',
    '锇币',
    '中子素币'
]
let namem = [
    '铁',
    '铜',
    '铝',
    '钢'
]
let namec = [
    '齿轮',
    '杆',
    '板',
    '大板',
    '扇叶',
    '螺栓',
    '弯曲板',
    '细线',
    '环',
    '转子',
    '线',
    '粉',
    '粉（小堆）',
    '粒',
    '大齿轮',
    '小齿轮',
    '精致齿轮构件',
    '锭',
    '圆板'
]
let product_material = [
    'iron',
    'copper',
    'aluminium',
    'steel'
]
let semi_finished_products = [
    'gear',
    'rod',
    'plate',
    'large_plate',
    'blade',
    'bolt',
    'curved_plate',
    'fine_wire',
    'ring',
    'rotor',
    'wire',
    'dust',
    'tiny_dust',
    'nugget',
    'gear_large',
    'gear_small',
    'precision_gear_mechanism',
    'ingot',
    'disk'
]
ClientEvents.lang('zh_cn', e => {
    trans_key.forEach((key, index) => {
        let translation = lang[index];
        e.add(key, translation); // 将键值对添加到语言文件
    });
});

ClientEvents.lang('zh_cn', e => {
    product_material.forEach((m, index) => {
        let a = namem[index];
        semi_finished_products.forEach((c, subIndex) => {
            let b = namec[subIndex]
                e.add(`item.gregtech.${m}_${c}`, `${a}${b}`)
        });
    });
})


