import { Console } from '@woowacourse/mission-utils';

async function getGameCount() {
    try {
        const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?: ');

        if (!isPositiveInteger(input)) {
            throw new Error('[ERROR] 올바른 양의 정수를 입력하세요.');
        }

        const gameCount = parseInt(input, 10);

        return gameCount;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function isPositiveInteger(input) {
    const value = parseInt(input, 10);
    return !isNaN(value) && value > 0;
}

export { getGameCount };
