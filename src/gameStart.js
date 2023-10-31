import { isRandomNumberGreaterThanOrEqualFour } from './randomNumber.js';
import { getGameCount } from './getGameCount.js';
import { inputCarsNames } from './getCarNames.js';
import { Console } from '@woowacourse/mission-utils';

async function playGame() {
    const carNames = await inputCarsNames();
    const gameCount = await getGameCount();

    // 라운드 결과를 저장할 객체 초기화
    const roundResults = {};

    for (const car of carNames) {
        roundResults[car] = '';
    }

    for (let i = 0; i < gameCount; i++) {
        // 현재 라운드 결과 초기화
        const roundResult = {};

        for (const car of carNames) {
            // 현재 라운드 결과에 누적
            roundResult[car] = roundResults[car] + (isRandomNumberGreaterThanOrEqualFour() ? '-' : '');
        }

        // 현재 라운드 결과를 라운드 결과 객체에 저장
        for (const car of carNames) {
            roundResults[car] = roundResult[car];
        }

        // 결과 출력
        Console.print('라운드 ' + (i + 1));
        for (const car of carNames) {
            Console.print(car + ' : ' + roundResult[car]);
        }
    }

    // 게임 종료 후 게임 횟수 출력
    Console.print(`총 ${gameCount}회의 게임을 종료했습니다.`);
}

playGame();
