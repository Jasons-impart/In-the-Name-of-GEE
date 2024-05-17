ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "evilcraft:blood_infuser",
    ]);
    event.shaped("evilcraft:blood_infuser", [
        "AAA",
        "ACA",
        "AAA",
    ], {
        A: "mna:decoration/arcane_stone",
        C: "evilcraft:blood_infusion_core",
    });

});
