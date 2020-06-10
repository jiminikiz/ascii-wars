define(function(){
    var rooms = {
        closet: {
            text: 'You awake in a small room. You remember nonthing and your head is swirling. You wonder if you had too much to drink last night as your stomach is lurching. It is rather cold, your skin is covered in... pixelbumps? You are lying on a flat sleeping pad. It is dead silent, save for a slight hum of machiniery and what sounds like... club music? The room is glowing red, blue, and green as there are vials of pixelated, glowing liquid lining the walls in vending machine style shelves. To the right of you is a _banana suit_. To the left of you is a _baseball bat_. To the front of you is a thick looking **door**. You are wearing a compass watch on your wrist, letting you know that the door is to the **north**.',
            actions: {
                examine: 'You are in a small, closet-sized room. In this room, you surrounded by vials of glowing, pixelated liquid that are lining vending-machine-like shelves. There is an exit door to the north.',
                take: ['red-vial','blue-vial','green-vial','key','baseball-bat','banana-suit'],
                smell: 'It smells faintly of lemon.',
                move: [{
                    facing: 'N',
                    caption: 'Main Hall'
                }]
            }
        },
        hall: {
            text: 'Entering this room immeadiately wakes you up! Rather loud music is playing (Uhnz, uhnz, uhnz, uhnz...) that is tapping directly into your adrenaline ("somebody scream!"). The room is lit with and black lights and LED track lights that slowly fade into different colors. A disco cube hangs in the center of the ceiling. There are **doors** in every direction. The floor is carpeted white, which glows insanely bright when the LED track lights turn off in their last interval. Trippy duuude!',
            actions: {
                examine: 'You are damn near blinded by the light',
                take: [],
                smell: 'It smells strongy of fruity loops!',
                move: [{
                    facing: 'N',
                    caption: '',
                    locked: true
                },{
                    facing: 'NE',
                    caption: 'Billiards',
                },{
                    facing: 'E',
                    caption: 'Bar',
                    locked: true
                },{
                    facing: 'SE',
                    caption: 'Armory',
                    locked: true
                },{
                    facing: 'S',
                    caption: 'Vixels'
                },{
                    facing: 'SW',
                    caption: 'Restroom A',
                },{
                    facing: 'W',
                    caption: 'Employees Only',
                    locked: true
                },{
                    facing: 'NW',
                    caption: 'Restroom B',
                },{
                    facing: '-Z',
                    caption: 'Basement',
                    locked: true
                }]
            }
        }
    }

    return function Story() {
        this.rooms = rooms;
    }
});
