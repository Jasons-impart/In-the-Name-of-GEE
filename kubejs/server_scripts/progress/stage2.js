ServerEvents.tags("item", event => {
    event.removeAll("twilightforest:portal/activator");
    event.add("twilightforest:portal/activator", "minecraft:dirt");
});
