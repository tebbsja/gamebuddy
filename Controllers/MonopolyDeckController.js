import {cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, ch1, ch2, ch3, ch4,ch5,
ch6,ch7,ch8,ch9,ch10} from '../Images';

    var ccArr = [cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10];
    var chArr = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10];

    

export class MonopolyDeckController{

    constructor(screen){
        this.screen = screen;
    }

    handleCC(){
        var c_index =  Math.floor(Math.random() * 10);

        var ret = ccArr[c_index];
 
        this.screen.setState({cc: ret});
    }

    handleChance(){
        var c_index =  Math.floor(Math.random() * 10);

        var ret = chArr[c_index];
 
        this.screen.setState({chance: ret});
    }
}