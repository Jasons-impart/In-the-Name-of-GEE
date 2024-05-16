ServerEvents.recipes(event => {
    event.remove({
        type: "mna:progression-condition"
    });
    event.custom({
        type: "mna:progression-condition",
        tier: 1,
        advancement: "minecraft:husbandry/balanced_diet",
    });
});
