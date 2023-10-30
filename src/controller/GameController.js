import getCarNames from '../view/inputView.js';
import InputValid from "../models/InputValid.js"

const startGame = () =>{
   let name = getCarNames();
   InputValid(name);

   let round =getRoundCount();
   InputValid(round);
 
}

export default startGame;