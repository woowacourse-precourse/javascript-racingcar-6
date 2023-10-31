import { CarNamesError } from '../../src/errors/UserInputErrors.js';
import { validate } from '../../src/utils/validate.js';

describe('validate 객체의 methods Test', () => {
  describe('메서드 test : carNames()', () => {
    test('입력값에 콤마(,)가 없을 경우 CarNamesError를 던짐', () => {
      const userInput = 'noCom';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '자동차 이름은 (,)로 구분해 입력해 주세요 !'
      );
    });

    test('입력값에 공백이 있을 경우 CarNamesError를 던짐', () => {
      const userInput = '점심, 먹고,와요';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '자동차 이름에 공백을 넣지 말아주세요 !'
      );
    });

    test('입력값의 마지막에 콤마(,)가 있고 자동차가 두 대인 경우 CarNamesError를 던짐', () => {
      const userInput = '차한대,';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '게임에 필요한 인원은 최소 2명 이상입니다 !'
      );
    });

    test('입렵값에 이름중 하나라도 빈값이면 CarNamesError를 던짐', () => {
      const userInput = ',마테차';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '각 유저의 이름은 최소한 1글자 이상으로 입력해 주세요 !'
      );
    });

    test('입렵값에 이름중 하나라도 length가 5가 넘는다면 CarNamesError를 던짐', () => {
      const userInput = '전기차,점심먹고보리차';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '각 이름의 길이가 5 이상인 이름이 있어요 ! 각각의 자동차 이름의 길이는 5이하로 입력해 주세요 !'
      );
    });

    test('입렵값에 숫자,한글,영문 이외의 값이 있으면 CarNamesError를 던짐', () => {
      const userInput = '!@com,woote';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '자동차이름은 숫자, 영문, 한글만으로 만들어 주세요 !'
      );
    });

    test('입렵값에 숫자,한글,영문 이외의 값이 있으면 CarNamesError를 던짐', () => {
      const userInput = '1,2,3,4,5,6,7,8,9,10,11번호끝';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '한 게임에 입장 가능 인원은 10명입니다 !'
      );
    });

    test('입렵값에 중복된 이름이 있으면 CarNamesError를 던짐', () => {
      const userInput = 'same,same';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '중복된 자동차 이름은 허용하지 않습니다 !'
      );
    });

    test('입렵값에 대소문자만 다르고 중복된 이름이 있으면 CarNamesError를 던짐', () => {
      const userInput = 'same,SAME';

      expect(() => validate.carNames(userInput)).toThrow(CarNamesError);
      expect(() => validate.carNames(userInput)).toThrow(
        '대소문자를 입력할 수는 있지만 같은 문자일 경우 동일한 이름으로 간주합니다 ! 중복을 피해주세요'
      );
    });
  });
});
