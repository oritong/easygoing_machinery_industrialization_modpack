execute as @e[distance=..6.5,type=!end_crystal] run damage @s 8.0 mob_attack by @e[tag=dut_dragon,limit=1]
summon dragon_fireball ~ ~0.5 ~ {Motion:[0d,-2d,0d]}
particle explosion ~ ~ ~ 0 0 0 0 1 force
kill @s