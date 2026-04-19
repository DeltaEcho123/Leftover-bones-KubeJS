ItemEvents.foodEaten(event => {
    if (event.item.id == 'minecraft:chicken'|| event.item.id == 'minecraft:cooked_chicken') {
        event.player.give('minecraft:bone');
    }
})

ItemEvents.foodEaten(event => {
    if (event.item.id.includes('fish') || event.item.id.includes('salmon') || event.item.id.includes('cod')) {
        event.player.give('kubejs:fish_bone');
    }
})

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:bone_meal'),
        [
        'kubejs:fish_bone',
        ]
    )
})