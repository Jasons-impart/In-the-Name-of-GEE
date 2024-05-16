ServerEvents.recipes(event => {
    remove_recipes_output(event, ["naturesaura:gold_fiber"]);

    event.shaped("naturesaura:gold_fiber", [
        "ABA",
        "BCB",
        "ABA",
    ], {
        A: "ars_elemental:yellow_archwood_leaves",
        B: "mna:purified_vinteum_dust",
        C: "minecraft:grass"
    });

    event.custom({
        "type": "naturesaura:tree_ritual", // 森林仪式
        "ingredients": [ // 输入物品 最多八种
            { "item": "elementalcraft:infuser" },
            { "item": "elementalcraft:firecrystal" },
            { "item": "elementalcraft:watercrystal" },
            { "item": "elementalcraft:earthcrystal" },
            { "item": "elementalcraft:aircrystal" },
        ],
        "sapling": {
            "item": "naturesaura:ancient_sapling"
        },
        "output": {
            "item": "ars_nouveau:imbuement_chamber"
        },
        "time": 100
    });
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            { "item": "evilcraft:blood_infuser" },
            { "item": "forbidden_arcanus:deorum_ingot" },
            { "item": "bloodmagic:weakbloodorb" },
            { "item": "minecraft:redstone_block" },
            { "item": "forbidden_arcanus:deorum_ingot" },
            { "item": "the_bumblezone:royal_jelly_bottle" },
        ],
        "sapling": {
            "item": "occultism:otherworld_sapling"
        },
        "output": {
            "item": "bloodmagic:altar",
        },
        "time": 100
    });
    event.custom({
        "type": "naturesaura:altar", // 灌注
        "input": {
            "item": "elementalcraft:inert_crystal"
        },
        "output": {
            "item": "elementalcraft:contained_crystal"
        },
        "aura": 500,
        "time": 80
    });
    event.custom({
        "type": "naturesaura:altar", // 灌注
        "input": {
            "item": "evilcraft:dark_gem"
        },
        "output": {
            "item": "forbidden_arcanus:arcane_crystal"
        },
        "catalyst": {
            "item": "naturesaura:conversion_catalyst" // 催化剂
        },
        "aura": 1000,
        "time": 80
    });

});
