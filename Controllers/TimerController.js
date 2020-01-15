
import Sound from 'react-native-sound';
const buzz = require('../assets/sounds/buzzer.mp3');
const tick = require('../assets/sounds/tick.mp3');

export class TimerController{

    

    constructor(screen){
        this.screen = screen;
        this.timer = 0;
        Sound.setCategory('Playback');

        this.buzz = new Sound(buzz, "", (error) => {
            if (error){
                console.log("error", error);
                return
            }
        })
        this.tick = new Sound(tick, "", (error) => {
            if (error){
                console.log("error", error);
                return
            }
        })
    }

    handleSettings(){
    }
    handleStart(){
        //if press start

        this.screen.setState({status: 'Stop'});
   
            this.timer = setInterval(() => {
                var nuTime = this.screen.state.time - 1;
                this.tick.play();
          
                this.screen.setState({time: nuTime});
                if(nuTime == 0){
                  clearInterval(this.timer);
                  this.screen.setState({status: 'Start'});
                  this.buzz.play();
                  this.screen.setState({time: global.Settings.getTimerSec()});

                }
              }, 1000);



    }
    handleStop(){
        clearInterval(this.timer);
        this.screen.setState({status: 'Start'});
    }

    handleFiveInc(){
        var nuTime = this.screen.state.time + 5;
        this.screen.setState({time: nuTime});
    }

    handleReset(){
        var nuTime = global.Settings.getTimerSec();
        clearInterval(this.timer);
        this.screen.setState({status: 'Start'});
        this.screen.setState({time: nuTime});
    }
}