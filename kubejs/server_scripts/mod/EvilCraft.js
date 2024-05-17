ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "evilcraft:blood_infuser",
        "evilcraft:blood_infusion_core",
        "evilcraft:promise_acceptor_iron",
        "evilcraft:promise_acceptor_gold",
        "evilcraft:promise_acceptor_diamond",
        "evilcraft:promise_speed_0",
        "evilcraft:promise_tier_1",
        "evilcraft:promise_tier_2",
        "evilcraft:promise_tier_3",
        "evilcraft:promise_efficiency_0"
    ]);
    event.shaped("evilcraft:promise_tier_1", [
        "ABA",
        "BCB",
        "ABA",
    ], {
        A: "forbidden_arcanus:arcane_crystal_block",
        B: "mna:animus_dust",
        C: "evilcraft:promise_acceptor_iron"
    }); 
    event.shaped("evilcraft:blood_infuser", [
        "AAA",
        "ABA",
        "AAA",
    ], {
        A: "mna:decoration/arcane_stone",
        B: "evilcraft:blood_infusion_core",
    });
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "naturesaura:infused_iron_block",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 40000
        },
        "result": {
          "item": "evilcraft:promise_acceptor_iron"
        },
        "duration": 1000,
        "xp": 10,
        "tier": 0
    });

})
