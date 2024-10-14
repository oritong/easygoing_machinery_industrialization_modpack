//代码来自xX流浪者Xx的海岛寿司店
PlayerEvents.tick(event => { // 监听每个tick（游戏帧）事件
	let player = event.player; // 获取当前触发事件的玩家对象
	let level = event.level; // 获取当前游戏世界对象
	let dial = player.persistentData.getInt("dialogue"); // 从玩家持久化数据中获取当前对话ID
	let dialstage = player.persistentData.getInt("dialoguestage"); // 从玩家持久化数据中获取当前对话阶段
	let curstage = dialstage; // 将当前对话阶段赋值给局部变量 curstage
	if(dial != 0){ // 如果对话ID不为0，说明有对话在进行
		let curdial = global.dialogues[dial]; // 根据对话ID从 global.dialogues 中获取对应的对话数据
		for(let i = 0; i < curdial.length; i++){ // 遍历当前对话的每一个条目
			if(curstage < 0) break; // 如果当前阶段小于0，跳出循环（对话结束）
			if(curstage <= curdial[i][0].length){ // 如果当前阶段没有超出当前对话条目的长度
                // 播放音效，给玩家播放 "note_block.hat" 声音
                level.runCommandSilent(`playsound minecraft:block.note_block.hat neutral ${player.getUsername().toString()} ${player.x} ${player.y} ${player.z} 0.3 1.1 0.3`);
				
                let text = {}; // 创建一个空对象，用于存储要渲染的文本数据
				// 将文本按每18个字符分块渲染到屏幕
				text["text" + parseInt(curstage / 18)] = {
					type: 'text', // 渲染类型为文本
					text: curdial[i][0].slice(parseInt(curstage / 18) * 18, curstage + 1), // 截取当前阶段对应的文本部分
					scale: 1.5, // 设置文本的缩放比例
					visible: true, // 设置文本可见
					alignX: "center", // 文本在X轴居中对齐
					alignY: "bottom", // 文本在Y轴底部对齐
					x: 0, y: -70 + (parseInt(curstage / 18)) * 18, // 设置文本在屏幕上的位置
					draw: "ingame" // 将文本绘制在游戏中
				};
				player.paint(text); // 将文本绘制到玩家的屏幕上
			}
			if(curstage == 0){ // 如果当前阶段为0，处理角色头像和名字显示
                let chra = {}; // 创建一个空对象，用于存储角色显示数据
                let chraname = curdial[i][2]; // 获取当前对话条目的角色名字
                if(chraname == "$player"){ // 如果角色名字是"$player"，替换为当前玩家的名字
                    chraname = player.getUsername();
                }
                chra["chraname"] = { // 设置角色名字显示的参数
                    type: 'text', // 类型为文本
                    text: chraname, // 设置文本内容为角色名字
                    scale: 1.5, // 文本缩放
                    visible: true, // 设置可见性
                    alignX: "center", // X轴居中
                    alignY: "bottom", // Y轴底部对齐
                    x: 0, y: -90, // 文本显示的位置
                    draw: "ingame" // 在游戏中绘制
                };
                if(curdial[i][3] == "l"){ // 如果当前对话角色在左侧
                    chra["leftchra"] = {
                        color: '#FFFFFF', // 角色的颜色为白色
                        type: 'rectangle', // 绘制类型为矩形
                        draw: 'ingame', // 绘制到游戏中
                        visible: true, // 可见
                        x: "$screenW*0.05", // X轴位置为屏幕左侧的5%
                        y: 0, // Y轴位置为0
                        w: "$screenW*0.21", h: "$screenW*0.28", // 角色头像的宽高比例
                        alignX: 'left', // 左对齐
                        alignY: 'center', // Y轴居中
                        texture: 'kubejs:textures/painter/' + curdial[i][1] // 使用指定的纹理文件显示角色头像
                    };
                    chra["rightchra"] = { color: '#888888' }; // 右侧角色头像灰显
                } else if(curdial[i][3] == "r"){ // 如果当前对话角色在右侧
                    chra["rightchra"] = {
                        color: '#FFFFFF', // 角色颜色为白色
                        type: 'rectangle', // 绘制类型为矩形
                        draw: 'ingame', // 绘制到游戏中
                        visible: true, // 可见
                        x: "-$screenW*0.05", // X轴位置为屏幕右侧的5%
                        y: 0, // Y轴位置
                        w: "$screenW*0.21", h: "$screenW*0.28", // 角色头像的宽高比例
                        alignX: 'right', // 右对齐
                        alignY: 'center', // Y轴居中
                        texture: 'kubejs:textures/painter/' + curdial[i][1] // 使用指定的纹理文件显示角色头像
                    };
                    chra["leftchra"] = { color: '#888888' }; // 左侧角色头像灰显
                } else if(curdial[i][3] == "w"){ // 如果当前对话角色位置为"w"（与"r"相同的逻辑）
                    chra["rightchra"] = {
                        color: '#FFFFFF', // 角色颜色为白色
                        type: 'rectangle', // 绘制类型为矩形
                        draw: 'ingame', // 绘制到游戏中
                        visible: true, // 可见
                        x: "-$screenW*0.15", // X轴位置为屏幕右侧的5%
                        y: 0, // Y轴位置
                        w: "$screenW*0.65", h: "$screenW*0.28", // 角色头像的宽高比例
                        alignX: 'right', // 右对齐
                        alignY: 'center', // Y轴居中
                        texture: 'kubejs:textures/painter/' + curdial[i][1] // 使用指定的纹理文件显示角色头像
                    };
                    chra["leftchra"] = { color: '#888888' }; // 左侧角色头像灰显
                } else { // 如果当前对话条目没有角色左右位置指定，两个角色头像都灰显
                    chra["leftchra"] = { color: '#888888' };
                    chra["rightchra"] = { color: '#888888' };
                }
                player.paint(chra); // 将角色头像和名字绘制到屏幕上
                
                
			}
			if(curstage == 0){ // 当阶段为0时，隐藏所有文本（对话结束）
				player.paint({
					text1: { type: 'text', visible: false }, // 隐藏文本
					text2: { type: 'text', visible: false },
					text3: { type: 'text', visible: false },
					text4: { type: 'text', visible: false }
			    });
			}
			curstage -= (curdial[i][0].length * 8); // 减少当前阶段值，用于进入下一个对话条目
		}
		if(curstage > 0){ // 如果当前阶段大于0（对话完成）
			player.persistentData.putInt("dialogue", 0); // 重置对话ID为0
			player.persistentData.putInt("dialoguestage", 0); // 重置对话阶段为0
			player.paint({ // 隐藏所有角色头像和文本
                rightchra: { type: 'rectangle', visible: false },
                leftchra: { type: 'rectangle', visible: false },
                chraname: { type: 'text', visible: false },
				text0: { type: 'text', visible: false },
				text1: { type: 'text', visible: false },
				text2: { type: 'text', visible: false },
				text3: { type: 'text', visible: false },
				text4: { type: 'text', visible: false }
			});
		} else { // 如果当前阶段未完成，进入下一个对话阶段
			player.persistentData.putInt("dialoguestage", dialstage + 1); // 阶段递增
		}
	}
});

FTBQuestsEvents.customReward(event => { // 监听自定义奖励事件
    let tags = event.reward.tags; // 获取奖励的标签
    let player = event.player; // 获取玩家对象
    
    if(tags.contains("dialogue")){ // 如果奖励包含 "dialogue" 标签
        let dialogue = 0; // 初始化对话ID
        tags.forEach((tag) => { // 遍历标签
            if(!isNaN(tag)){ // 如果标签是数字，表示为对话ID
                dialogue = parseInt(tag); // 将标签转换为整数并赋值给 dialogue
            }
        });
        player.closeMenu(); // 关闭玩家的菜单
        player.persistentData.putInt("dialogue", dialogue); // 设置玩家的对话ID
        player.persistentData.putInt("dialoguestage", 0); // 设置对话阶段为0
    }
});

global.dialogues={
    10010001:[
        ["——————（嘟嘟声）——————","","","m"],
        ["我知晓你为何而来","","？？？","m"],
        ["总有人妄想从小石头中得到一切","","？？？","m"],
        ["殊不知他们已深陷深渊","","？？？","m"],
        ["但请你一定要记住","","？？？","m"],
        ["........","one_shot.png","","w"]
    ]}