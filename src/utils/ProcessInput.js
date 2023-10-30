import { Console } from '@woowacourse/mission-utils';

/**
 * @description 자동차 이름, 시도 횟수 입력 받기 및 에러 처리 함수
 * @returns 자동차 이름 배열, 시도 횟수
 */
export default async function ProcessInput() {
    try {
        Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
        const carName = await Console.readLineAsync();
        const delimiter = ',';
        const carNameArr = carName.split(delimiter);
        if (carNameArr.length !== new Set(carNameArr).size) throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
        if (carNameArr.length !== carNameArr.filter((car) => car.length < 5).length) throw new Error('[ERROR] 자동차 이름이 5글자 초과입니다.');
        Console.print(carName);

        Console.print('시도할 횟수는 몇 회인가요?');
        const testNum = Number(await Console.readLineAsync());
        if (testNum === NaN || testNum !== parseInt(testNum) || testNum < 0) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        Console.print(testNum);
        Console.print('\n');

        return { carNameArr, testNum }
    } catch (error) {
        Console.print(error.message);
        throw error;
    }
}
