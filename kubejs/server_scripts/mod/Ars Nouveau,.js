ServerEvents.recipes(event => {
    remove_recipes_id(event, ["ars_nouveau:imbuement_chamber",]);
    remove_recipes_output(event, [
        "#forge:gems/source",
        "ars_nouveau:novice_spell_book",
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:arcane_core",
    ]);

});
