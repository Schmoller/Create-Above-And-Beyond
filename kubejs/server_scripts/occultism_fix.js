function OCrusher(event, id, input, output, count, time, ignoreMultiplier) {
    event.custom({
        "type": "occultism:crushing",
        "crushing_time": time,
        "ignore_crushing_multiplier": ignoreMultiplier,
        "ingredient": {
            "tag": input
        },
        "result": {
            "count": count,
            "tag": output
        }
    }).id(`occultism:crushing/${id}`)
}

function OMiner(event, id, miner, output, weight) {
    event.custom({
        "type": "occultism:miner",
        "ingredient": {
            "tag": miner
        },
        "result": {
            "tag": output
        },
        "weight": weight
    }).id(`occultism:miner/${id}`)
}

ServerEvents.recipes(event => {
    OCrusher(event, 'ruby_dust', 'forge:ores/ruby', 'forge:dusts/ruby', 4, 200, false)
    OCrusher(event, 'certus_quartz_dust_from_gem', 'forge:gems/certus_quartz', 'forge:dusts/ruby', 1, 200, false)
    OCrusher(event, 'lead_dust_from_ingot', 'forge:ingots/lead', 'forge:dusts/lead', 1, 200, true)
    OCrusher(event, 'silver_dust_from_raw_block', 'forge:storage_blocks/raw_silver', 'forge:dusts/silver', 18, 200, false)
    OCrusher(event, 'diamond_dust_from_gem', 'forge:gems/diamond', 'forge:dusts/diamond', 1, 200, false)
    OCrusher(event, 'emerald_dust', 'forge:ores/emerald', 'forge:dusts/emerald', 4, 200, false)
    OCrusher(event, 'invar_dust_from_ingot', 'forge:ingots/invar', 'forge:dusts/invar', 1, 200, true)
    OCrusher(event, 'iron_dust', 'forge:ores/iron', 'forge:dusts/iron', 2, 200, false)
    OCrusher(event, 'quartz_dust_from_gem', 'forge:gems/quartz', 'forge:dusts/quartz', 1, 200, false)
    OCrusher(event, 'iron_dust_from_raw_block', 'forge:storage_blocks/raw_iron', 'forge:dusts/iron', 18, 200, false)
    OCrusher(event, 'cinnabar_dust_from_gem', 'forge:gems/cinnabar', 'forge:dusts/cinnabar', 1, 200, false)
    OCrusher(event, 'iron_dust_from_ingot', 'forge:ingots/iron', 'forge:dusts/iron', 1, 200, true)
    OCrusher(event, 'end_stone_dust', 'forge:end_stones', 'forge:dusts/end_stone', 1, 200, false)
    OCrusher(event, 'nickel_dust_from_ingot', 'forge:ingots/nickel', 'forge:dusts/nickel', 1, 200, true)
    OCrusher(event, 'tin_dust_from_raw_block', 'forge:storage_blocks/raw_tin', 'forge:dusts/tin', 18, 200, false)
    OCrusher(event, 'iesnium_dust_from_ingot', 'forge:ingots/iesnium', 'forge:dusts/iesnium', 1, 200, true)
    OCrusher(event, 'iesnium_dust', 'forge:ores/iesnium', 'forge:dusts/iesnium', 2, 200, false)
    OCrusher(event, 'lead_dust_from_raw', 'forge:raw_materials/lead', 'forge:dusts/lead', 2, 200, false)
    OCrusher(event, 'cinnabar_dust', 'forge:ores/cinnabar', 'forge:dusts/cinnabar', 4, 200, false)
    OCrusher(event, 'copper_dust', 'forge:ores/copper', 'forge:dusts/copper', 2, 200, false)
    OCrusher(event, 'datura', 'forge:crops/datura', 'forge:seeds/datura', 2, 200, false)
    OCrusher(event, 'arcane_crystal_dust', 'forge:ores/arcane_crystal', 'forge:dusts/arcane_crystal', 2, 200, false)
    OCrusher(event, 'emerald_dust_from_gem', 'forge:gems/emerald', 'forge:dusts/emerald', 1, 200, false)
    OCrusher(event, 'electrum_dust_from_ingot', 'forge:ingots/electrum', 'forge:dusts/electrum', 1, 200, true)
    OCrusher(event, 'netherite_dust_from_ingot', 'forge:ingots/netherite', 'forge:dusts/netherite', 1, 200, true)
    OCrusher(event, 'copper_dust_from_raw', 'forge:raw_materials/copper', 'forge:dusts/copper', 2, 200, false)
    OCrusher(event, 'nickel_dust_from_raw_block', 'forge:storage_blocks/raw_nickel', 'forge:dusts/nickel', 18, 200, false)
    OCrusher(event, 'copper_dust_from_ingot', 'forge:ingots/copper', 'forge:dusts/copper', 1, 200, true)
    OCrusher(event, 'nickel_dust', 'forge:ores/nickel', 'forge:dusts/nickel', 2, 200, false)
    OCrusher(event, 'lapis_dust_from_gem', 'forge:gems/lapis', 'forge:dusts/lapis', 1, 200, false)
    OCrusher(event, 'iesnium_dust_from_raw_block', 'forge:storage_blocks/raw_iesnium', 'forge:dusts/iesnium', 18, 200, false)
    OCrusher(event, 'iesnium_dust_from_raw', 'forge:raw_materials/iesnium', 'forge:dusts/iesnium', 2, 200, false)
    OCrusher(event, 'sapphire_dust_from_gem', 'forge:gems/sapphire', 'forge:dusts/sapphire', 1, 200, false)
    OCrusher(event, 'sulfur_dust', 'forge:ores/sulfur', 'forge:dusts/sulfur', 4, 200, false)
    OCrusher(event, 'nickel_dust_from_raw', 'forge:raw_materials/nickel', 'forge:dusts/nickel', 2, 200, false)
    OCrusher(event, 'tin_dust_from_ingot', 'forge:ingots/tin', 'forge:dusts/tin', 1, 200, true)
    OCrusher(event, 'sapphire_dust', 'forge:ores/sapphire', 'forge:dusts/sapphire', 4, 200, false)
    OCrusher(event, 'tin_dust_from_raw', 'forge:raw_materials/tin', 'forge:dusts/tin', 2, 200, false)
    OCrusher(event, 'quartz_dust', 'forge:ores/quartz', 'forge:dusts/quartz', 4, 200, false)
    OCrusher(event, 'lead_dust_from_raw_block', 'forge:storage_blocks/raw_lead', 'forge:dusts/lead', 18, 200, false)
    OCrusher(event, 'gold_dust_from_raw', 'forge:raw_materials/gold', 'forge:dusts/gold', 2, 200, false)
    OCrusher(event, 'iron_dust_from_raw', 'forge:raw_materials/iron', 'forge:dusts/iron', 2, 200, false)
    OCrusher(event, 'gold_dust', 'forge:ores/gold', 'forge:dusts/gold', 2, 200, false)
    OCrusher(event, 'gold_dust_from_ingot', 'forge:ingots/gold', 'forge:dusts/gold', 1, 200, true)
    OCrusher(event, 'enderium_dust_from_ingot', 'forge:ingots/enderium', 'forge:dusts/enderium', 1, 200, true)
    OCrusher(event, 'gold_dust_from_raw_block', 'forge:storage_blocks/raw_gold', 'forge:dusts/gold', 18, 200, false)
    OCrusher(event, 'blaze_powder_from_rod', 'forge:rods/blaze', 'forge:dusts/blaze', 1, 200, false)
    OCrusher(event, 'ruby_dust_from_gem', 'forge:gems/ruby', 'forge:dusts/ruby', 1, 200, false)
    OCrusher(event, 'arcane_crystal_dust_from_gem', 'forge:gems/arcane_crystal', 'forge:dusts/arcane_crystal', 1, 200, false)
    OCrusher(event, 'apatite_dust', 'forge:ores/apatite', 'forge:dusts/apatite', 4, 200, false)
    OCrusher(event, 'bronze_dust_from_ingot', 'forge:ingots/bronze', 'forge:dusts/bronze', 1, 200, true)
    OCrusher(event, 'lead_dust', 'forge:ores/lead', 'forge:dusts/lead', 2, 200, false)
    OCrusher(event, 'copper_dust_from_raw_block', 'forge:storage_blocks/raw_copper', 'forge:dusts/copper', 18, 200, false)
    OCrusher(event, 'silver_dust_from_raw', 'forge:raw_materials/silver', 'forge:dusts/silver', 2, 200, false)
    OCrusher(event, 'signalum_dust_from_ingot', 'forge:ingots/signalum', 'forge:dusts/signalum', 1, 200, true)
    OCrusher(event, 'constantan_dust_from_ingot', 'forge:ingots/constantan', 'forge:dusts/constantan', 1, 200, true)
    OCrusher(event, 'obsidian_dust', 'forge:obsidian', 'forge:dusts/obsidian', 1, 200, false)
    OCrusher(event, 'lumium_dust_from_ingot', 'forge:ingots/lumium', 'forge:dusts/lumium', 1, 200, true)
    OCrusher(event, 'sulfur_dust_from_gem', 'forge:gems/sulfur', 'forge:dusts/sulfur', 1, 200, false)
    OCrusher(event, 'silver_dust_from_ingot', 'forge:ingots/silver', 'forge:dusts/silver', 1, 200, true)
    OCrusher(event, 'diamond_dust', 'forge:ores/diamond', 'forge:dusts/diamond', 4, 200, false)
    OCrusher(event, 'apatite_dust_from_gem', 'forge:gems/apatite', 'forge:dusts/apatite', 1, 200, false)
    OCrusher(event, 'lapis_dust', 'forge:ores/lapis', 'forge:dusts/lapis', 4, 200, false)

    OMiner(event, 'master/stella_arcanum', 'occultism:miners/master', 'forge:ores/stella_arcanum', 100)
    OMiner(event, 'ores/sapphire_ore', 'occultism:miners/ores', 'forge:ores/sapphire', 200)
    OMiner(event, 'ores/cinnabar_ore', 'occultism:miners/ores', 'forge:ores/cinnabar', 190)
    OMiner(event, 'ores/coal_ore', 'occultism:miners/ores', 'forge:ores/coal', 1000)
    OMiner(event, 'ores/lapis_ore', 'occultism:miners/ores', 'forge:ores/lapis', 343)
    OMiner(event, 'ores/xpetrified_ore', 'occultism:miners/ores', 'forge:ores/xpetrified_ore', 200)
    OMiner(event, 'ores/lead_ore', 'occultism:miners/ores', 'forge:ores/lead', 500)
    OMiner(event, 'ores/iron_ore', 'occultism:miners/ores', 'forge:ores/iron', 750)
    OMiner(event, 'ores/niter_ore', 'occultism:miners/ores', 'forge:ores/niter', 244)
    OMiner(event, 'ores/ruby_ore', 'occultism:miners/ores', 'forge:ores/ruby', 200)
    OMiner(event, 'ores/diamond_ore', 'occultism:miners/ores', 'forge:ores/diamond', 218)
    OMiner(event, 'ores/runic_stone', 'occultism:miners/ores', 'forbidden_arcanus:runic_stones', 200)
    OMiner(event, 'ores/arcane_crystal', 'occultism:miners/ores', 'forge:ores/arcane_crystal', 200)
    OMiner(event, 'ores/sulfur_ore', 'occultism:miners/ores', 'forge:ores/sulfur', 222)
    OMiner(event, 'ores/gold_ore', 'occultism:miners/ores', 'forge:ores/gold', 311)
    OMiner(event, 'ores/copper_ore', 'occultism:miners/ores', 'forge:ores/copper', 584)
    OMiner(event, 'ores/zinc_ore', 'occultism:miners/ores', 'forge:ores/zinc', 186)
    OMiner(event, 'ores/nickel_ore', 'occultism:miners/ores', 'forge:ores/nickel', 232)
    OMiner(event, 'ores/emerald_ore', 'occultism:miners/ores', 'forge:ores/emerald', 156)
})