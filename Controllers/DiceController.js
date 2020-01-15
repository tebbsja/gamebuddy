import {dice1, dice2, dice3, dice4, dice5, dice6} from '../Images';

var dieArr = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
];

export class DiceController{



    constructor(screen){
        this.screen = screen;
    }

    handleSettings(){
        this.screen.props.navigation.navigate('Settings');
    }

    handleRoll(numDice, numSides){
        var die = [];
        for(var i=0; i < numDice; i++){
            var index = (Math.floor(Math.random() * numSides));
            die.push(dieArr[index]);
        }

        return die;
    }
}