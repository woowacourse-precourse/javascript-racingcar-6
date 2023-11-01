import {RacingGame} from '../Module/RacingGame';
import CarName from '../Controller/Validate/CarName';
import Attempt from '../Controller/Validate/Attempt';
import inputView from '../View/inputView';
import outputView from '../View/outputView';
import { ERROR } from '../Utils/Message';

class controller{
    constructor(){
        this.racingGame = new RacingGame();
    }
    
    startGame(){
        this.requireInputCarName();
    }

    requireInputCarName(){
        inputView.inputCarNames((input)=>{
            this.isAllowCarName(input);
        });
    }

    async isAllowCarName(input){
        const carName = new CarName(input);
        if(!(await carName.validate())){
            outputView.printError(ERROR.CAR_NAME);
            await this.requireInputCarName();
        }
        this.giveCarName(input);
    }

    giveCarName(input){
        this.racingGame.getCars(input);
        this.requireInputAttempt();
    }

    requireInputAttempt(){
        inputView.inputAttempt()
    }

    isAllowAttempt(input){
        this.attempt = new Attempt(input);
        if(!this.attempt.validate()){
            outputView.printError(ERROR.ATTEMPT);
            return this.requireInputAttempt();
        }
        this.racingGame.getAttempt(input);

    }

    requirePrintResult(){
        outputView.printResultTitle();

    }

    requirePlaying(){
        const [process, endGame] = this.racingGame.playing();
        outputView.printProcess(process);
        if(!endGame){
            return this.requirePlaying();
        } else{
            return outputView.printResult(this.racingGame.winner());
        }
    }
}

module.exports = controller;