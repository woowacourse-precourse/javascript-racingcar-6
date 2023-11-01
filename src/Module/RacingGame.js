import { MissionUtils } from '@woowacourse/mission-utils';

class Move {
    isMove(){
        return this.makeNumber() > 4;
    }

    makeNumber(){
        return MissionUtils.Random.pickNumberInRange(1,9);
    }
}

class RacingGame {
    constructor() {
        this.move = new Move();
        this.carList = []; // this.carList = {};
        this.attempt = 0;
        this.winnerScore=0;
    }

    getCars(input){
        this.makeList(input.split(","));
    }

    makeList(cars){
        cars.forEach((car) => {
            this.carList[car] = 0;            
        });
    }

    getAttempt(input){
        this.attempt = +input;
    }

    playing(){
        Object.keys(this.carList).forEach((car)=>{
            if(this.move.isMove()){
                this.carList[car] += 1;
                this.winnerScore = Math.max(this.winnerScore, this.carList[car]);
            }
        })
        this.process();
        return [this.carList, this.endGame()];
    }

    process(){
        return this.attempt += -1;
    }

    endGame(){
        return this.attempt === 0;
    }

    winner(){
        const winner=[];
        Object.keys(this.carList).forEach((car)=>{
            if(this.winnerScore===this.carList[car]){
                return winner.push(car);
            }
        })
        return winner;
    }
}

module.exports = {Move, RacingGame};