import { Console } from '@woowacourse/mission-utils';
// 사용자로부터 게임에 필요한 값을 입력받는 역할

async function enterCarNames() {
    const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    if (carNames.split(',').length < 2) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
    if (carNames.split(',').some((name) => name.length > 5)) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');

    return carNames.split(',');
}

async function enterAttempts() {
    const attempt = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (attempt < 1) throw new Error('[ERROR] 시도할 횟수가 잘못된 형식입니다.');
    if (isNaN(attempt)) throw new Error('[ERROR] 시도할 횟수가 잘못된 형식입니다.');

    return Number(attempt);
}


export { enterCarNames, enterAttempts };