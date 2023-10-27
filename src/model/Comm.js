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
    constructor(){

        racingCarInputValutate = (carName) => {
            return carName.reduce((arr, cur, idx) => {
                if(cur.length > 5){
                    throw Error(`${ERROR_MESSAGE.INPUT_ERROR}`);
                }
                return carName;
            }, "");
        }
    }
}
export { MESSAGE, ERROR_MESSAGE, Comm }