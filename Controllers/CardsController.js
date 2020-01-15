
export class CardsController{

    constructor(screen){
        this.screen = screen;
    }

    handleSettings(){
        alert("settings");
    }

    handleDeck(){
        this.screen.props.navigation.navigate('StandardDeck');
    }

    handleMonopoly(){
        this.screen.props.navigation.navigate('MonopolyDeck');
    }
    
    handleScattergories(){
        this.screen.props.navigation.navigate('ScattergoriesDeck');
    }

    handleMadGab(){
        this.screen.props.navigation.navigate('MadGab');
    }
}