import { Console } from "@woowacourse/mission-utils";

const MESSAGE = {
    RACING_CHAMPION: '최종 우승자 : ',
    RACING_CAR_INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    RACING_COUNT: '시도할 횟수는 몇 회인가요?',
    RACING_PLAY: '실행 결과'
};

const ERROR_MESSAGE = {
    INPUT_ERROR: '[ERROR] 숫자가 잘못된 형식입니다.',
}

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
                throw Error(`${ERROR_MESSAGE.INPUT_ERROR}`);
            }
            return carName;
        }, "");
    }    
}
export { MESSAGE, ERROR_MESSAGE, Comm }