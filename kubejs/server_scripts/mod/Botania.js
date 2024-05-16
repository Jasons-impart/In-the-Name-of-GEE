ServerEvents.recipes(event => {
    event.remove({output: "botania:livingrock"}),
    event.remove({output: "botania:livingwood_log"}),
    event.remove({output: "botania:mana_diamond"}),
    event.remove({output: "botania:manasteel_ingot"}),
    event.remove({output: "botania:gaia_ingot"})
})
