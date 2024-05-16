ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        "botania:pure_daisy/livingrock",
        "botania:pure_daisy/livingwood",
        "botania:mana_infusion/mana_diamond",
        "botania:mana_infusion/manasteel",
        "botania:gaia_ingot",
    ]);
    event.recipes.botania.pure_daisy(
        "botania:livingwood_log", "evilcraft:undead_log"
    );
    event.recipes.botania.pure_daisy(
        "botania:livingrock", "mna:decoration/arcane_stone"
    );
});
