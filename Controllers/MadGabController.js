import {mg1, mg2, mg3, mg4, mg5, mg6, mg7, mg8, mg9, mg10} from '../Images';

var arr = [mg1, mg2, mg3, mg4, mg5, mg6, mg7, mg8, mg9, mg10];

export class MadGabController{

    constructor(screen){
        this.screen = screen;
    }

    handleCard(){
        var c_index =  Math.floor(Math.random() * 10);

        var ret = arr[c_index];
 
        this.screen.setState({card: ret});
    }
}