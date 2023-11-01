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
      }).toThrowError('[ERROR] 1-9 사이의 숫자만 입력 가능합니다.');
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

  describe('자동차 움직임', () => {
    test('carMoving', () => {
      // given
      MissionUtils.Random.pickNumberInRange = jest.fn(() => 4);
      // when
      const app = new App();
      app.racingCarList(['james', 'frank']);
      app.carMoving();
      // then
      expect(app.carList.james).toContain('-');
      expect(app.carList.frank).toContain('-');
    });
  });

  describe('레이싱 출력', () => {
    it('printMessage', () => {
      // given
      const consoleLogSpy = jest
        .spyOn(MissionUtils.Console, 'print')
        .mockImplementation();
      const input = {
        pobi: '---',
        jake: '--',
        jacy: '----',
      };
      // when
      const app = new App();
      app.carList = input;
      app.printMessage();
      // then
      for (const car in input) {
        expect(consoleLogSpy).toHaveBeenCalledWith(`${car} : ${input[car]}`);
      }
      expect(consoleLogSpy).toHaveBeenCalledWith('');
  
      // Restore the original Console.print
      consoleLogSpy.mockRestore();
    });
  });

  describe('승자 골라내기', () => {
    test('winner', () => {
      const app = new App();
      app.carList = {
        james: '---',
        pobi: '--',
        jacy: '----',
      };
  
      const result = app.winner();
  
      // Check that the winners are determined correctly
      expect(result).toEqual(['jacy']); // 'car3' has the longest track
    });
  });

  describe('승자 출력', () => {
    test('printWinner', () => {
      // given
      const consoleLogSpy = jest
        .spyOn(MissionUtils.Console, 'print')
        .mockImplementation();
      const input = ['jacy'];
      // when
      const app = new App();
      app.printWinner(input);
      expect(consoleLogSpy).toHaveBeenCalledWith('최종 우승자 : jacy');
    });
  });