// priority: 100

/**
 * @param { Internal.RecipesEventJS } event
 * @param { Internal.ItemStack[] } items
 */
function remove_recipes_output(event, items) {
    event.remove({ output: items })
}
/**
 * @param { Internal.RecipesEventJS } event
 * @param { ResourceLocation[] } ids
 */
function remove_recipes_id(event, ids) {
    ids.forEach(id => {
        event.remove({ id: id })
    })
}
/**
 * @param { Internal.RecipesEventJS } event
 * @param { string[] } types
 */
function remove_recipes_type(event, types) {
    types.forEach(type => {
        event.remove({ type: type })
    })
}
/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string[] } mods
 */
function remove_recipes_mod(event, mods) {
    mods.forEach(mod => {
        event.remove({ mod: mod })
    })
}

/**
 * @param { Internal.RecipesEventJS } event
 * @param { int } tier
 * @param { string } output
 * @param { int } quantity
 * @param { string[] } items
 * @param { string[] } patterns
 */
function manaweaving_recipe(event, tier, output, quantity, items, patterns) {
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: tier,//等阶
        output: output,//输出物品
        quantity: quantity,//输出个数
        items: items,//输入物品
        patterns: patterns//织魔图案
    });
}
