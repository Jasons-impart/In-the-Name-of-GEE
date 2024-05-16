ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "naturesaura:tree_ritual",//森林仪式
            "ingredients":[//输入物品，最多八种
                {"item":"elementalcraft:infuser"},
                {"item":"elementalcraft:firecrystal"},
                {"item":"elementalcraft:watercrystal"},
                {"item":"elementalcraft:earthcrystal"},
                {"item":"elementalcraft:aircrystal"},
            ],
            "sapling":{
                "item": "naturesaura:ancient_sapling"//仪式所需树苗
            },
            "output":{
                "item": "ars_nouveau:imbuement_chamber",//产物
            },
            "time": 100//时间  
        }
    ),
    event.custom(
        {
            "type": "naturesaura:altar",//灌注
            "input": {
                "item": "elementalcraft:inert_crystal"//输入
            },
            "output": {
                "item": "elementalcraft:contained_crystal"//产出
            },
            "catalyst": {
                "item": "naturesaura:conversion_catalyst"//催化剂
            },
            "aura": 500,//灵气消耗
            "time": 80//时间
        }
    )

})