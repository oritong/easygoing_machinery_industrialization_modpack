particle dragon_breath ~ ~ ~ 0.1 0.1 0.1 0.02 5 force
particle wax_off ~ ~ ~ 0.3 0.3 0.3 0 3 force
execute as @e[distance=..4.5,type=!end_crystal] run damage @s 4.0 mob_attack by @e[tag=dut_dragon,limit=1]
execute as @s[nbt={OnGround:1b}] at @s run function dut:enderdragon/dragon_charge/explode