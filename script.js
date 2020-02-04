$(document).ready(function () {
    var div = $('<div></div>')
    $(div).addClass('container')
    $('body').prepend(div)
    
    // Objective 4 Friend Names
    var friend = ['Calvin', 'Joshua', 'Mariah', 'Michael', 'Ryan']
    // Objective 5 Locations
    var location = ["Basement", "Bathroom", "Family Room", "Garage", "Kid's Bedroom", "Kitchen", "Laundry Room", "Master Bedroom", "Office", "Playroom"]
    // Objective 6 Weapons
    var weapon = ["Axe", "Baseball Bat", "Blunderbuss", "Claymore", "Cleaver", "Cooking Pot", "Crowbar", "Cutthroat Razor", "Golf Club", "Hammer", "Katana", "Khukri", "Kitchen Knife", "Revolver", "Scalpel", "Shank", "Shovel", "Umbrella", "Walking Cane", "Winchester Rifle"]

    // Objective 2
    createH3()
    // Objective 2 Part 1
    function createH3() {
        for (c = 1; c <= 100; c++) {
            var h3 = $(`<h3 id=a${c}>Accusation ${c}</h3>`)
            $(h3).addClass('accusation')
            console.log(c)
            $(div).append(h3)
         // Objective 2 Part 2 and Objective 3
            h3.click(clickHandler(c))
        }
        function clickHandler(c){
            return function(){
                // Objective 7
                var f = c % friend.length;
                var l = c % location.length;
                var w = c % weapon.length;
                alert(`Accusation ${c}: I accuse ${friend[f]}, with the ${weapon[w]} in the ${location[l]}`)
            }
        }
    }
})