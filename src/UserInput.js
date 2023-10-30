import { Console } from '@woowacourse/mission-utils';
// 사용자로부터 게임에 필요한 값을 입력받는 역할

const UserInput = {
    //자동차 이름을 입력 받는다.
    enterCarNames(callback) {
        Console.readLine("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n", callback);
    },
    //시도 횟수를 입력 받는다.
    enterAttempts(callback) {
        Console.readLine("시도할 횟수는 몇 회인가요?\n", callback);
    }
}

export default UserInput;