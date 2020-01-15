import {sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10} from '../Images';

var arr = [sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10];

export class ScattergoriesDeckController{

    constructor(screen){
        this.screen = screen;
    }

    handleCard(){
        var c_index =  Math.floor(Math.random() * 10);

        var ret = arr[c_index];
 
        this.screen.setState({card: ret});
    }
}