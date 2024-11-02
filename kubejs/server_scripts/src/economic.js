ItemEvents.rightClicked('kubejs:rotom', event => {
    let player = event.player; // 获取触发事件的玩家
    let item = event.item; // 获取玩家所点击的物品
    if (event.getHand() == "off_hand") { // 判断是否使用副手点击
		if(player.isShiftKeyDown()){ // 检查玩家是否按住 Shift 键
			let inv = player.inventory.items // 获取玩家的物品栏
			let count = 0 // 初始化货币计数变量
			for(let i=0;i<inv.length;i++){ // 遍历玩家的物品栏
				let coincount = inv[i].getCount() // 获取物品堆叠数
				switch(inv[i].getItem().toString()){ // 检查物品类型
					case 'copper_credit': // 铜币，每个值1单位
						count += coincount// 加入总货币数
						inv[i].shrink(coincount); // 从物品栏移除铜币
						break;
					case 'gold_credit': // 铁币，每个值10单位
						count += coincount * 64
						inv[i].shrink(coincount);
						break;
					case 'osmium_credit': // 金币，每个值100单位
						count += coincount * 4096
						inv[i].shrink(coincount);
						break;
					case 'neutronium_credit': // 钻石币，每个值1000单位
						count += coincount * 262144
						inv[i].shrink(coincount);
						break;
				}
			}
			if(count >= 262144){ // 如果剩余货币大于等于1000
				player.give(Item.of('kubejs:neutronium_credit').withCount(parseInt(count / 262144))) // 兑换为钻石币
				count = count % 262144
			}
			if(count >= 4096){ // 处理金币兑换
				player.give(Item.of('kubejs:osmium_credit').withCount(parseInt(count / 4096)))
				count = count % 4096
			}
			if(count >= 64){ // 处理铁币兑换
				player.give(Item.of('kubejs:gold_credit').withCount(parseInt(count / 64)))
				count = count % 64
			}
			if(count >= 1){ // 处理剩余的铜币
				player.give(Item.of('kubejs:copper_credit').withCount(count))
			}
		}
		else{ // 如果没有按住 Shift 键
			let coin = player.getMainHandItem(); // 获取主手物品
			let count = parseInt(coin.getCount() / 64); // 计算可兑换数量（每10单位可以兑换1单位更高级的币种）
			switch(coin.getItem().toString()){ // 根据物品类型进行兑换
				case 'copper_credit':
					player.give(Item.of('kubejs:gold_credit').withCount(count)) // 兑换为铁币
					coin.shrink(count * 64); // 减少主手的铜币数量
					break;
				case 'gold_credit':
					player.give(Item.of('kubejs:osmium_credit').withCount(count)) // 兑换为金币
					coin.shrink(count * 64);
					break;
				case 'osmium_credit':
					player.give(Item.of('kubejs:neutronium_credit').withCount(count)) // 兑换为钻石币
					coin.shrink(count * 64);
					break;
			}
		}
    } else { // 如果使用主手点击
       let coin = player.getOffHandItem(); // 获取副手物品
	   if(player.isShiftKeyDown()){ // 如果按住 Shift 键
		   let count = coin.getCount(); // 获取物品堆叠数
		   switch(coin.getItem().toString()){ // 进行货币降级兑换
				case 'gold_credit':
					player.give(Item.of('kubejs:copper_credit').withCount(count * 64)) // 兑换为铜币
					coin.shrink(count); // 削减副手铁币数量
					break;
				case 'osmium_credit':
					player.give(Item.of('kubejs:gold_credit').withCount(count * 64)) // 兑换为铁币
					coin.shrink(count);
					break;
				case 'neutronium_credit':
					player.give(Item.of('kubejs:osmium_credit').withCount(count * 64)) // 兑换为金币
					coin.shrink(count);
					break;
			}
	   }
	   else{ // 如果没有按住 Shift 键
			switch(coin.getItem().toString()){ // 进行货币降级兑换（单次兑换1个）
				case 'gold_credit':
					player.give(Item.of('kubejs:copper_credit').withCount(64)) // 兑换为10个铜币
					coin.shrink(1); // 削减副手铁币数量
					break;
				case 'osmium_credit':
					player.give(Item.of('kubejs:gold_credit').withCount(64)) // 兑换为10个铁币
					coin.shrink(1);
					break;
				case 'neutronium_credit':
					player.give(Item.of('kubejs:osmium_credit').withCount(64)) // 兑换为10个金币
					coin.shrink(1);
					break;
			}
	   }
    }
})

// 注册银行存款命令
ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event

	event.register(Commands.literal('b-s') // 注册命令 /bank-save
		.executes(c => save(c.source.player)) // 执行 save 方法存款
	)
	let save = (player) => {
		let inv = player.inventory.items // 获取玩家的物品栏
		let count = player.persistentData.getInt("balance"); // 获取玩家的存款余额
		for(let i=0;i<inv.length;i++){ // 遍历物品栏
			let coincount = inv[i].getCount() // 获取物品堆叠数
			switch(inv[i].getItem().toString()){ // 根据货币类型增加余额
				case 'copper_credit':
					count += coincount
					inv[i].shrink(coincount); // 移除物品
					break;
				case 'gold_credit':
					count += coincount * 64
					inv[i].shrink(coincount);
					break;
				case 'osmium_credit':
					count += coincount * 4096
					inv[i].shrink(coincount);
					break;
				case 'neutronium_credit':
					count += coincount * 262144
					inv[i].shrink(coincount);
					break;
			}
		}
		player.persistentData.putInt("balance", count); // 存储新的余额
		player.setStatusMessage("当前余额：§6" + count + "C") // 显示玩家余额
		return 1;
	}

	event.register(Commands.literal('b-e') // 注册命令 /bank-extract
	.executes(c => extract(c.source.player, -1)) // 提取全部余额
		.then(Commands.argument("value", Arguments.INTEGER.create(event)) // 允许提取指定数额
		.executes(c => extract(c.source.player, Arguments.INTEGER.getResult(c, "value"))) // 提取指定数额
		)
	)

	let extract = (player, amount) => {
		let count = player.persistentData.getInt("balance"); // 获取当前余额
		if(amount < 0 || amount > count){ amount = count; } // 如果输入非法值，则提取全部
		count -= amount; // 扣除提取的余额
		if(amount>=262144){
			player.give(Item.of('kubejs:neutronium_credit').withCount(parseInt(amount/262144)))
			amount=amount % 262144
		}
		if(amount>=4096){
			player.give(Item.of('kubejs:osmium_credit').withCount(parseInt(amount/4096)))
			amount=amount % 4096
		}
		if(amount>=64){
			player.give(Item.of('kubejs:gold_credit').withCount(parseInt(amount/64)))
			amount=amount % 64
		}
		if(amount>=1){
			player.give(Item.of('kubejs:copper_credit').withCount(parseInt(amount)))
		}
		player.persistentData.putInt("balance",count);
		player.setStatusMessage("当前余额：§6"+count+"C")
		return 1;
	}
	event.register(Commands.literal('bank')
		.executes(c => bank(c.source.player))
	)
	let bank=(player)=>{
		let count=player.persistentData.getInt("balance");
		player.setStatusMessage("当前余额：§6"+count+"C");
		return 1;
	}
})