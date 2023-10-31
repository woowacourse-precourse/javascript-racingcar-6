import { Console } from '@woowacourse/mission-utils';

async function getUsername() {
    try {
        const username = await Console.readLineAsync('자동차 이름(플레이어)을 입력해주세요(쉼표로 구분): ');

        const carNames = username.split(',').map((name) => name.trim());

        if (carNames.length === 0) {
            throw new Error('[ERROR] 입력이 비어 있습니다.');
        }

        for (const name of carNames) {
            if (name.length > 5) {
                throw new Error(`[ERROR] "${name}"는 5자 이하이어야 합니다.`);
            }
        }

        return carNames;
    } catch (error) {
        console.error(error.message);
        // 여기에서 reject 되는 경우에 대한 처리를 추가할 수 있습니다.
        throw error;
    }
}

export async function inputCarsNames() {
    try {
        const carNames = await getUsername();
        console.log('입력된 자동차 이름:', carNames);
        // 이곳에서 게임 로직을 계속 구현할 수 있습니다.
    } catch (error) {
        // 예외가 여기서 처리됩니다.
    }
}

inputCarsNames();
