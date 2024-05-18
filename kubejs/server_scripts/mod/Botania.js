ServerEvents.recipes(event => {
    event.remove({ mod:
        "botania"
    });
    event.recipes.botania.pure_daisy(
        "botania:livingwood_log", "evilcraft:undead_log"
    );
    event.recipes.botania.pure_daisy(
        "botania:livingrock", "mna:decoration/arcane_stone"
    );
});
