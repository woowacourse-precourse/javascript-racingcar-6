import { CarNamesError, TryRoundError } from '../errors/UserInputErrors.js';
import { paramType } from './paramType.js';

export const validate = {
  carNames(userInput, _ = paramType(userInput, 'string')) {
    const COMMA = ',';
    const carNamesArray = userInput.split(',');
    const spaceRegExp = /\s/g;
    const invalidCarNameRegExp = /[^a-zA-Z가-힣0-9,]/g;
    const upperCaseFlattenArray = [...carNamesArray].map((carName) =>
      carName.toUpperCase()
    );

    if (!userInput.includes(`${COMMA}`)) {
      throw new CarNamesError('자동차 이름은 (,)로 구분해 입력해 주세요 !');
    }
    if (spaceRegExp.test(userInput)) {
      throw new CarNamesError('자동차 이름에 공백을 넣지 말아주세요 !');
    }
    if (carNamesArray.length === 2 && userInput[userInput.length - 1] === ',') {
      throw new CarNamesError('게임에 필요한 인원은 최소 2명 이상입니다 !');
    }
    if (!carNamesArray.every((carName) => carName.length > 0)) {
      throw new CarNamesError(
        '각 유저의 이름은 최소한 1글자 이상으로 입력해 주세요 !'
      );
    }
    if (!carNamesArray.every((carName) => carName.length < 6)) {
      throw new CarNamesError(
        '각 이름의 길이가 5 이상인 이름이 있어요 ! 각각의 자동차 이름의 길이는 5이하로 입력해 주세요 !'
      );
    }
    if (invalidCarNameRegExp.test(userInput)) {
      throw new CarNamesError(
        '자동차이름은 숫자, 영문, 한글만으로 만들어 주세요 !'
      );
    }
    if (carNamesArray.length > 10) {
      throw new CarNamesError('한 게임에 입장 가능 인원은 10명입니다 !');
    }
    if (new Set(carNamesArray).size !== carNamesArray.length) {
      throw new CarNamesError('중복된 자동차 이름은 허용하지 않습니다 !');
    }
    if (new Set(upperCaseFlattenArray).size !== carNamesArray.length) {
      throw new CarNamesError(
        '대소문자를 입력할 수는 있지만 같은 문자일 경우 동일한 이름으로 간주합니다 ! 중복을 피해주세요'
      );
    }
  },
};
