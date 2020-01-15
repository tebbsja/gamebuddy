
export class ScoreboardController{

    constructor(screen){
        this.screen = screen;
    }

    handleSettings(){
        this.screen.props.navigation.navigate('Settings');

    }

    handleDecrement(score){
        return (score -1);
    }
    handleIncrement(score){
        return (score + 1);
    }
}