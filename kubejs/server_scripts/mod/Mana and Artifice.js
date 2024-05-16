ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "mna:runeforge",


    ]);
    event.shaped("mna:runeforge", [
        "A A",
        "BCB",
        "ABA",
    ], {
        A: "mna:transmuted_silver",
        B: "mna:decoration/arcane_stone",
        C: "minecraft:blast_furnace"
    }); 

});
