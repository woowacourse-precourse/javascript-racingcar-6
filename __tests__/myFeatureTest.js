import { Console, Random } from '@woowacourse/mission-utils';
import { CarNameValidator } from '../src/validator.js';
import App from '../src/App.js';

jest.mock('@woowacourse/mission-utils');
jest.mock('../src/validator.js');

describe('App 클래스 메서드 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
    Console.print.mockClear();
    Console.readLineAsync.mockClear();
    CarNameValidator.validate.mockClear();
  });

  describe('convertCarNamesToObject 메서드', () => {
    test('배열의 데이터를 원하는 객체 형태로 반환하는지 테스트', () => {
      const array = ['name1', 'name2', 'name3'];
      const expectedObject = [
        { name: 'name1', status: '' },
        { name: 'name2', status: '' },
        { name: 'name3', status: '' },
      ];
      const result = app.convertCarNamesToObject(array);

      expect(result).toStrictEqual(expectedObject);
    });
  });

  describe('attemptMove 메서드', () => {
    afterEach(() => {
      Random.pickNumberInRange.mockReset();
    });
    test('랜덤 수가 4이상이면 status에 "-" 를 붙이는지 테스트', () => {
      Random.pickNumberInRange.mockReturnValue(4);
      const status = '';
      const expectedStatus = '-';

      const result = app.attemptMove(status);

      expect(result).toBe(expectedStatus);
    });
    test('랜덤 수가 4미만이면 status를 그대로 반환하는지 테스트', () => {
      Random.pickNumberInRange.mockReturnValue(3);
      const status = '';
      const expectedStatus = '';

      const result = app.attemptMove(status);

      expect(result).toBe(expectedStatus);
    });
  });

  describe('printRaceProgress 매서드', () => {
    test(' "자동차이름 : -(progress bar)" 형태로 출력하는지 테스트', () => {
      const cars = [
        { name: 'name1', status: '---' },
        { name: 'name2', status: '----' },
      ];
      const expectedPrint = [['name1 : ---'], ['name2 : ----'], ['\n']];

      app.printRaceProgress(cars);

      expect(Console.print.mock.calls).toStrictEqual(expectedPrint);
    });
  });

  describe('printFinalWinner 메서드', () => {
    test(' "최종 우승자 : name1, name2" 형태로 출력하는지 테스트', () => {
      const names = ['name1', 'name2'];
      const expectedPrint = ['최종 우승자 : name1, name2'];

      app.printFinalWinner(names);
      expect(Console.print.mock.calls[0]).toStrictEqual(expectedPrint);
    });
  });

  describe('getFinalCarStatus 메서드', () => {
    test('객체의 status키의 문자열값을 문자열의 길이로 바꾸는지 테스트', () => {
      const array = [
        { name: 'name1', status: '---' },
        { name: 'name2', status: '--' },
      ];
      const expectedArray = [
        { name: 'name1', forwardCount: 3 },
        { name: 'name2', forwardCount: 2 },
      ];

      const result = app.getFinalCarStatus(array);

      expect(result).toStrictEqual(expectedArray);
    });
  });
});
