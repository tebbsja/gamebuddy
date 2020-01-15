import {_2C, _2D, _2H, _2S, _3C, _3D, _3H, _3S,_4C, _4D, _4H, _4S,_5C, _5D, _5H, _5S,_6C, _6D, _6H, _6S,
    _7C, _7D, _7H, _7S,_8C, _8D, _8H, _8S,_9C, _9D, _9H, _9S,_10C, _10D, _10H, _10S,JC, JD, JH, JS,
    QC, QD, QH, QS,KC, KD, KH, KS, AC, AD, AH, AS} from '../Images';

    var cardArr = [
        _2C, _2D, _2H, _2S, _3C, _3D, _3H, _3S,_4C, _4D, _4H, _4S,_5C, _5D, _5H, _5S,_6C, _6D, _6H, _6S,
    _7C, _7D, _7H, _7S,_8C, _8D, _8H, _8S,_9C, _9D, _9H, _9S,_10C, _10D, _10H, _10S,JC, JD, JH, JS,
    QC, QD, QH, QS,KC, KD, KH, KS, AC, AD, AH, AS,
    ];
    

export class StandardDeckController{

    constructor(screen){
        this.screen = screen;
    }

    handleCard(){
        //shuffle, grab a card, set state as that card
       var c_index =  Math.floor(Math.random() * 52);

       var ret = cardArr[c_index];

       this.screen.setState({src: ret});

    }
}