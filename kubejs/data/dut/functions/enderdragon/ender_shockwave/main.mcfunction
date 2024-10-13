execute positioned ~ ~3 ~ summon marker run function dut:enderdragon/ender_shockwave/particle
summon lightning_bolt ~ ~ ~
effect give @e[distance=..5] levitation 1 24 true
execute as @e[distance=..4.5,type=!end_crystal] run damage @s 10 mob_attack by @e[tag=dut_dragon,limit=1]
execute as @e[distance=..7,type=!end_crystal] run damage @s 6 mob_attack by @e[tag=dut_dragon,limit=1]
particle dragon_breath ~ ~ ~ 1.6 0.5 1.6 0.05 128 force
particle glow ~ ~1.5 ~ 0.3 3 0.3 0.02 48 force
particle flash ~ ~ ~ 0 0 0 0 1 force
kill @s