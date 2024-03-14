// Block Placement

function opposite(face) {
	if (face.equals('down'))
		return 'up'
	if (face.equals('east'))
		return 'west'
	if (face.equals('west'))
		return 'east'
	if (face.equals('north'))
		return 'south'
	if (face.equals('south'))
		return 'north'
	return 'down'
}

// onEvent('server.datapack.first', event => {

// 	// "Fixes" Extended Caves wiping its config contents
// 	let extcaves_conf = java("com.polyvalord.extcaves.config.Config")
// 	let suppl_conf = java("net.mehvahdjukaar.supplementaries.configs.ServerConfigs")
// 	let no_thankyou = suppl_conf.block.CAGE_ALL_MOBS

// 	extcaves_conf.gen_block_lavastone = no_thankyou
// 	extcaves_conf.gen_block_oldstone = no_thankyou
// 	extcaves_conf.gen_vines = no_thankyou
// 	extcaves_conf.gen_block_sedimentstone = no_thankyou
// 	extcaves_conf.gen_block_dirtstone = no_thankyou
// 	extcaves_conf.gen_block_marlstone = no_thankyou
// 	extcaves_conf.gen_block_packed_ice = no_thankyou
// 	extcaves_conf.gen_mushrooms = no_thankyou
// 	extcaves_conf.gen_mosses = no_thankyou
// 	extcaves_conf.gen_rock_flints = no_thankyou

// })

// PlayerEvents.tick(event => {

// 	// Fixes advanced rocketry not applying low gravity on the moon
// 	let player = event.getPlayer()

// 	// player.tickCount
	
// 	if (player.minecraftPlayer.field_6012 % 10 != 0)
// 		return
// 	if (event.world.getDimension() != "custommoon:moon")
// 		return

// 	let effects = java("net.minecraft.world.effect.MobEffects")

// 	// SLOW_FALLING
// 	player.getPotionEffects().add(effects.field_5906, 20, 0, false, false) // slow fall
// 	// JUMP
// 	player.getPotionEffects().add(effects.field_5913, 20, 4, false, false) // jump boost

// })


PlayerEvents.tick(event => {

	// Fixes advanced rocketry not descending their rocket
	let player = event.getPlayer()
	if (player.getY() < 700)
		return

	let riding = player.getRidingEntity()
	if (!riding)
		return
	if (riding.getType() != "advancedrocketry:rocket")
		return

	let nbt = riding.getFullNBT()
	if (nbt["flight"] == 0) {
		nbt["flight"] = 1
		riding.setFullNBT(nbt)
	}

})

BlockEvents.placed(event => {

	// Auto-configure placed energy "pipez" to extract when near a dynamo
	let block = event.getBlock()
	if (block.getId().startsWith('pipez:energy_pipe')) {

		Direction.ALL.values().forEach(face => {
			let dynamo = block.offset(face)
			if (!dynamo.id.startsWith("thermal:dynamo"))
				return
			if (face.toString().toLowerCase() != opposite(dynamo.getProperties()['facing'].toString()))
				return

			let properties = block.getProperties()
			properties['has_data'] = true
			block.set(block.getId(), properties)
			let te = block.getEntity()
			if (!te)
				return
			let nbt = utils.newMap().toNBT()
			te.func_189515_b(nbt)
			let sides = nbt.func_150295_c("ExtractingSides", 1)
			sides.set(face.ordinal(), java("net.minecraft.nbt.ByteNBT").field_229670_c_)
			te.func_230337_a_(block.getBlockState(), nbt)
		})
		return
	}

	// Reverse placed Dynamos on Sneak 
	if (event.getEntity() == null)
		return
	if (block.getId().startsWith('thermal:dynamo')) {
		let properties = block.getProperties()
		if (event.getEntity().isCrouching()) {
			properties['facing'] = opposite(properties['facing'].toString())
			block.set(block.getId(), properties)
		}

		Direction.ALL.values().forEach(face => {
			if (face.toString().toLowerCase() != opposite(properties['facing'].toString()))
				return
			let pipe = block.offset(face.getOpposite())
			if (pipe.getId().startsWith('pipez:energy_pipe')) {
				let properties2 = pipe.getProperties()
				properties2['has_data'] = true
				pipe.set(pipe.getId(), properties2)
				let te = pipe.getEntity()
				if (!te)
					return
				let nbt = utils.newMap().toNBT()
				te.func_189515_b(nbt)
				let sides = nbt.func_150295_c("ExtractingSides", 1)
				sides.set(face.ordinal(), java("net.minecraft.nbt.ByteNBT").field_229670_c_)
				te.func_230337_a_(pipe.getBlockState(), nbt)
			}
		});
	}

})