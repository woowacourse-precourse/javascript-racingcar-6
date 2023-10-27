import { Console } from '@woowacourse/mission-utils';
import CarMotion from './CarMotion.js';
import FindIndex from './FindIndex.js';

const carMotion = new CarMotion;
const findIndex = new FindIndex;

class Output {
    constructor(CAR,MOVE_COUNT,TRY) {
        this.CAR = CAR;
        this.MOVE_COUNT = MOVE_COUNT;
        this.TRY = TRY;
    }
    PrintResult() {
        for(let i in this.CAR) {
            Console.print(`${this.CAR[i]} : ${'-'.repeat(this.MOVE_COUNT[i])}`);
        }
        console.log("");
    }
    RunWhileFinish() {
        let IsFinish = false;
        while(!IsFinish){
            this.PrintResult(carMotion.MoveOrStop(this.CAR,this.MOVE_COUNT));
            if(this.MOVE_COUNT.join('').indexOf(this.TRY) != '-1') {
                IsFinish = true;
            }
        }
    }
    PrintOneWinner() {
        Console.print(`최종 우승자 : ${this.CAR[this.MOVE_COUNT.join('').indexOf(this.TRY)]}`);
    }
    PrintSeveralWinner(RESULT){
        let SEVERAL_WINNER = [];
        for(let i in RESULT) {
            SEVERAL_WINNER.push(this.CAR[RESULT[i]]);
        }
        Console.print(`최종 우승자 : ${SEVERAL_WINNER.join(',')}`);
    }
    WhoIsWinner() {
        let WINNER_COUNT = 0;
        WINNER_COUNT = this.MOVE_COUNT.filter(el => el == this.TRY).length;
        if(WINNER_COUNT >= 2) {
            let RESULT = findIndex.FindArrayIndex(this.MOVE_COUNT,this.TRY);
            this.PrintSeveralWinner(RESULT);
        }else{
            this.PrintOneWinner();
        }
    }
}

export default Output;