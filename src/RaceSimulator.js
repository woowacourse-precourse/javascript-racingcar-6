import {Console} from "@woowacourse/mission-utils";
import InputOutput from "./InputOutput.js";
import { winnerCommnet, LINE_BREAK } from "./Constant.js";
class RaceSimulator {

    constructor(){
        this.inputOutput = new InputOutput();
    }

    simulateRace(garage,count){
        for (let i = 0; count > i; i++){
            garage.forEach(car => {
                car.tryAdvance();
                Console.print(`${car.getName()} : ${car.getMovedDistance()}`)
        });
            this.inputOutput.print(LINE_BREAK)
        }
    }
    
    countScore(garage){
        const scoreBoard = []
        garage.forEach(car => {
            scoreBoard.push(car.getMovedDistance().length);
        })
        return scoreBoard;
    }

    announceWinners(garage,scoreList){
        const winnerScore = Math.max(...scoreList);
        const winner = garage.filter(car => car.getMovedDistance().length === winnerScore).map(car => car.getName());
        // Console.print(`${winnerCommnet} : ${winner}`)
        this.inputOutput.print(`${winnerCommnet} : ${winner}`);
    }
}

export default RaceSimulator;