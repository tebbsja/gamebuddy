import { ColorPicker, fromHsv, toHsv} from 'react-native-color-picker';
var ColorScheme = require('color-scheme'); 

export class SettingsController{
    constructor(){
        this.numDice = 2;
        this.diceSides = 6;
        this.timerSec = 30;
        this.swatchStatus = [true,true,false,false];
        this.numTeams = 2;
        this.teamColors = ['blue', 'red', '', ''];
        this.teamHighlights = ['#e6ecff', '#FFEEEE', 'grey', 'grey'];
        this.teamAccents = ['#001f7a', '#8D0000', 'grey', 'grey'];
        this.timerIncrement = 5;
    }

    setSwatch(id, bool){
        this.swatchStatus[id] = bool;
    }

    setTeamColor(id, color){
        this.teamColors[id] = color;
    }

    getSwatchStatus(){
        return this.swatchStatus;
    }
    getTimerSec(){
        return this.timerSec;
    }

    hexToHSL(hex){
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    return h;
    }

    hslToHex(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
          const hex = Math.round(x * 255).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    setScreen(screen){
        this.screen = screen;
    }

    getTeamColors(){
        return this.teamColors;
    }

    getTeamHighlights(){
        return this.teamHighlights;
    }

    getTeamAccents(){
        return this.teamAccents;
    }

    setNumTeams()
    {
        this.numTeams++;
        this.screen.setState({numTeams: this.numTeams});
    }

    handleTeamColorChange(id, color){
        var scheme = new ColorScheme;
        console.log(color);
        scheme.from_hex(color.slice(1)).scheme('mono').variation('light');
        var c = scheme.colors();

        scheme.from_hex(color.slice(1)).scheme('mono').variation('hard');
        var c1 = scheme.colors();

        var lightC = c[2];
        var darkC = c1[1];

        this.teamColors[id] = color;
        this.teamAccents[id] = '#'+darkC;
        this.teamHighlights[id] = '#'+lightC;
    }

    handleTimerSlide(value){
        this.screen.setState({timerSec: value});
        this.timerSec = value;
    }

    handleDiceSlide(value)
    {
        this.screen.setState({numDice: value});
        this.numDice = value;
    }

    handleTeamSlide(value)
    {
        this.screen.setState({numTeams: value});
        this.numTeams = value;
    }

    getNumDice(){
        return this.numDice;
    }
    getNumTeams(){
        return this.numTeams;
    }
}