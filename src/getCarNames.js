import { Console } from '@woowacourse/mission-utils';

async function getUsername() {
    const username = await Console.readLineAsync('자동차 이름(플레이어)을 입력해주세요(쉼표로 구분): ');

    const carNames = username.split(',').map((name) => name.trim());

    if (carNames.some((name) => name.length === 0)) {
        throw new Error('[ERROR] 입력이 비어 있습니다.');
    }

    for (const name of carNames) {
        if (name.length > 5) {
            throw new Error(`[ERROR] "${name}"는 5자 이하이어야 합니다.`);
        }
    }

    return carNames;
}

export async function inputCarsNames() {
    try {
        const carNames = await getUsername();
        console.log('입력된 자동차 이름:', carNames);
        return carNames;
    } catch (error) {
        throw error;
    }
}
