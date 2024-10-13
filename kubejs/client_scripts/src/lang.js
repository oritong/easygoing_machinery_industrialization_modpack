ClientEvents.lang('zh_cn', e => {
    e.add('tt.black', 'I：I是环R的非空子集，满足： \n （1）任意a，b∈I，有a-b∈I \n （2）任意r∈R，a∈I，有ar，ra∈I')
    e.add('tt.white', 'I：I是环R的理想且I≠R')
    e.add('item.palworld.black', '理想之证')
    e.add('item.palworld.white', '真实之证')
    e.add('item.palworld.legend_plate', '<rainb><wave>传说石板')
    e.add('item.mangia_sassi.sasso', '食子')
    e.add('item.mangia_sassi.sassocaldo', '§c炎石')
    e.add('tt.reimuhb', '<rainb><wave><wave><wave><wave>我们东方厨也要有自己的天使指环')
})

ClientEvents.lang('zh_cn', e => {
    product_material.forEach((m, index) => {
        let a = namem[index];
        semi_finished_products.forEach((c, subIndex) => {
            let b = namec[subIndex]
                e.add(`item.gregtech.${m}_${c}`, `${a}${b}`)
        });
    });
})
let namem = [
    '铁',
    '铜'
]
let namec = [
    '齿轮',
    '杆',
    '板',
    '扇叶',
    '螺栓',
    '弯曲板',
    '细线',
    '环',
    '转子',
    '线',
    '粉',
    '粉（小堆）',
    '粒'
]
let product_material = [
    'iron',
    'copper'
]
let semi_finished_products = [
    'gear',
    'rod',
    'plate',
    'blade',
    'bolt',
    'curved_plate',
    'fine_wire',
    'ring',
    'rotor',
    'wire',
    'dust',
    'tiny_dust',
    'nugget'
]

