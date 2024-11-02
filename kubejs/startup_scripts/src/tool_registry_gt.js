StartupEvents.registry('item', e => {
    e.create('flint_axe', 'axe').maxDamage(64).tag('forge:tools').tag('minecraft:axes')
    e.create('stone_hammer', 'pickaxe').maxDamage(280).tag('forge:tools').tag('oritong:hammer')
    e.create('iron_clang', 'basic').maxDamage(350).tag('forge:tools')
})