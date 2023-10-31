import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('유저 입력', () => {
  test('carInput', async () => {
    // given
    const input = 'july,james,frank';
    mockQuestion(input);
    // when
    const app = new App();
    const result = await app.carInput();
    // then
    expect(input).toEqual(result);
  });

  test('numInput', async () => {
    // given
    const input = 5;
    mockQuestion(input);
    // when
    const app = new App();
    const result = await app.numInput();
    // then
    expect(input).toEqual(result);
  });
});

describe('입력 에러 처리', () => {
    test.each(['pobi,javaji', 'pobi,,eastjun'])('checkCarInput', (inputs) => {
      // given
      const invalidInput = inputs;
      // when
      const app = new App();
      // then
      expect(() => {
        app.checkCarInput(invalidInput);
      }).toThrowError('[ERROR] 입력이 잘못된 형식입니다.');
    });
  
    test.each([
      ['pobi', 'pobi'],
      ['test', 'test'],
    ])('checkDupliCar', (input1, input2) => {
      // given
      const invalidInput = [input1, input2];
      // when
      const app = new App();
      // then
      expect(() => {
        app.checkDupliCar(invalidInput);
      }).toThrowError('[ERROR] 중복된 이름이 있습니다.');
    });
  
    test.each(['a', 'ab', 'abc'])('checkNumInput', (inputs) => {
      // given
      const invalidInput = inputs;
      // when
      const app = new App();
      app.tryNum = invalidInput;
      // then
      expect(() => {
        app.checkNumInput();
      }).toThrowError('[ERROR] 숫자가 잘못된 형식입니다.');
    });
  });

  describe('자동차 목록', () => {
    test('racingCarList', () => {
      // given
      const input = ['july', 'james', 'frank'];
      const answer = {
        july: '',
        james: '',
        frank: '',
      };
      // when
      const app = new App();
      app.racingCarList(input);
      // then
      expect(app.carList).toEqual(answer);
    });
  });