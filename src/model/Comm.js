import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from "../constant/OutputMessage.js";

class Comm{

    #carName
    #outRacingData
    #outputWinnerData

    constructor(){
        this.#carName = [];
        this.#outRacingData = '';
        this.#outputWinnerData = '';
    }

    outputRacingMessage = (reacingCarResult) => {
        reacingCarResult.reduce((acc, cur, idx) => {
            this.#outRacingData = this.#outRacingData.concat(cur+'\n');
        }, "");
        Console.print(this.#outRacingData);
        this.#outRacingData = '';
    }

    outputWinnerMessage = (name, winnerIndex) => {
        winnerIndex.forEach((data, index) => {
            if(index != 0){
                this.#outputWinnerData += ', '+name[data];    
            } else if(index == 0){
                this.#outputWinnerData += name[data];
            }
        });
        Console.print('최종 우승자 : '+this.#outputWinnerData);
    }

    carNameOutPutUpdate = (carName) => {
        return carName.reduce((arr, cur, idx) => {
            this.#carName.push(cur+' : ');
            return this.#carName;
        }, "");
    }

    racingCarInputValutate = (carName) => {
        return carName.reduce((arr, cur, idx) => {
            if(cur.length > 5){
                throw Error(`${ERROR_MESSAGE.INPUT_LENGTH_ERROR}`);
            }
            return carName;
        }, "");
    }
}
export { Comm }