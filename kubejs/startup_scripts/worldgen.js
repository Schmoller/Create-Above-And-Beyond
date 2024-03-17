WorldgenEvents.remove(event => {
    console.log('WorldGen event');
    event.printFeatures();
    event.printSpawns();
    event.removeOres(ores => {
        ores.blocks = ['minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore']
    })
    event.removeOres(ores => {
        ores.blocks = ['occultism:silver_ore', 'occultism:silver_ore_deepslate']
    })
})