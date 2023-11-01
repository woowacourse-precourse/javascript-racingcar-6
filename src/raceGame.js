const { Random, Console } = require('@woowacourse/mission-utils');
const Car = require('./Car');

async function startRace() {

        const carNames = (await Console.readLineAsync('경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분): ')).split(',');
        for (const name of carNames) {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력하세요.");
            }
        }

        const numMoves = parseInt(await Console.readLineAsync('시도할 횟수는 몇 회인가요? '));
        if (numMoves <= 0) {
            throw new Error("[ERROR] 횟수는 1 이상이어야 합니다.");
        }

}

module.exports = startRace;
