import { Random } from "@woowacourse/mission-utils";

class Racing{

    #scoreNumber;
    #carName;

    constructor(racingCar){
        this.#scoreNumber = [];
        this.#carName = [];
        this.racing = racingCar;
    }

    racingPlay = (racingCarName, forward_number) => {
        racingCarName.forEach((data, index) => {
            if(forward_number[index] >= 4){
                racingCarName[index] = data + '-';
            }
        });
        return racingCarName;
    }

    randomForwardCount = (num) => {
        let forwardNumber = [];
        for(let i = 0; i < num; i++){
            forwardNumber.push(Random.pickNumberInRange(0, 9))
        }
        return forwardNumber;
    }

    racingCarResult = (racingCarPlay) => {
        for(let i = 0; i < racingCarPlay.length; i++){
            this.#scoreNumber.push((racingCarPlay[i].substr(racingCarPlay[i].indexOf('-', racingCarPlay[i].indexOf(':'))).trim()).length);
        }
        const MAX_VALUE = Math.max(...this.#scoreNumber);
        const RACING_MAX_VALUE = this.#racingScoreCompare(MAX_VALUE);
        return RACING_MAX_VALUE;
    }

    carNameUpdate = (carName) => {
        return carName.reduce((arr, cur, idx) => {
            this.#carName.push(cur+' : ');
            return this.#carName;
        }, "");
    }

    #racingScoreCompare = (maxValue) => {
        for(let i = 0; i < this.#scoreNumber.length; i++){
            if(this.#scoreNumber[i] === maxValue){
                this.racing.racingCarWinner.push(i);
            }
        }
        return this.racing.racingCarWinner;
    }
}

export default Racing