const { Console } = require('@woowacourse/mission-utils');

async function getCarNames() {
    try {
        const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분): ');

        const carNames = input.split(',').map((name) => name.trim());

        if (carNames.some((name) => name.length > 5)) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
        }

        return carNames;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function main() {
    const carNames = await getCarNames();

    if (carNames === null) {
        return;
    }

    console.log(`입력한 자동차 이름: ${carNames.join(', ')}`);
}

module.exports = { main };
