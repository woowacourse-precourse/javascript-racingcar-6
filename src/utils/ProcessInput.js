import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from '../constants/messages'

const DELIMITER = ',';
const CAR_NAME_MAX_LENGTH = 5;

/**
 * @description 자동차 이름, 시도 횟수 입력 받기 및 에러 처리 함수
 * @returns 자동차 이름 배열, 시도 횟수
 */
export default async function processInput() {
  try {
    Console.print(GAME_MESSAGE.carNameInput);
    const carName = await Console.readLineAsync();
    const carNameArr = carName.split(DELIMITER);

    if (carNameArr.length !== new Set(carNameArr).size) throw new Error(ERROR_MESSAGE.duplicateCarName);
    if (carNameArr.length !== carNameArr.filter((car) => car.length < CAR_NAME_MAX_LENGTH).length) throw new Error(ERROR_MESSAGE.overCarNameMaxLength);
    Console.print(carName);

    Console.print(GAME_MESSAGE.testNumInput);
    const testNum = Number(await Console.readLineAsync());
    if (testNum === NaN || testNum !== parseInt(testNum) || testNum < 0) throw new Error(ERROR_MESSAGE.numFormatError);
    Console.print(testNum);
    Console.print(GAME_MESSAGE.lineBreak);

    return { carNameArr, testNum }
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}
