import App from '../src/App'
import { MissionUtils } from '@woowacourse/mission-utils';


const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('입력받은 자동차 이름들 쉼표로 구분했는지', () => {
    const input = 'abc,abcd,ab'; 
    app.validateCarNames(input);
    expect(app.cars).toEqual(expect.arrayContaining(['abc', 'abcd', 'ab']));
  });

  test('빈 값을 넣을 경우 에러 발생', () => {
    const input = ''; 
    expect(() => app.validateCarNames(input)).toThrowError("[ERROR]");
  });

  test('중복된 값이 있을 경우 에러 발생', () => {
    const input = 'a,abc,ab,abc'; 
    expect(() => app.validateCarNames(input)).toThrowError("[ERROR]");
  });

  test('특수 문자가 있을시 에러 발생', () => {
    const input = 'abc,abcd,abcd@';
    expect(() => app.validateCarNames(input)).toThrowError("[ERROR]");
  });

  test('5글자를 초과한 글자가 있을 경우 에러 발생', () => {
    const input = 'abc,abcd,ab,a,abcedf'; 
    expect(() => app.validateCarNames(input)).toThrowError("[ERROR]");
  });

  test('시도할 횟수를 입력할 때 숫자가 아닐 때 에러 발생', () => {
    const input = "abc"
    expect(() => app.validateCountInput(input)).toThrowError("[ERROR]");
  })

  // 기존의 conut가 2일때 숫자 4이상이 나오면 count가 3이 되어야함
  test("4 이상의 숫자가 나오면 count가 증가", () => {
    const count = 2;
    const expectedCount = 3; 
    mockRandoms([4]);
    const result = app.updateCarPosition(count);
    expect(result).toBe(expectedCount);
  });

  // 기존의 conut가 2일때 숫자 4이하가 나오면 count는 그대로 2이어야함
  test("4 이하의 숫자가 나오면 count 변화X", () => {
    const count = 2;
    const expectedCount = 2; 
    mockRandoms([3]);
    const result = app.updateCarPosition(count);
    expect(result).toBe(expectedCount);
  });

  test('시도할 횟수만큼 레이스를 시작하고 진행 상황을 출력하는지', () => {
    const input = '3';
    app.ATTEMPTS_COUNT = Number(input);
  
    const carsSet = new Set();
    carsSet.add({ name: 'abc', count: 0 });
    carsSet.add({ name: 'abcd', count: 0 });
  
    const moveCarsSpy = jest.spyOn(app, 'moveCars'); 
    const printCarsProgressSpy = jest.spyOn(app, 'printCarsProgress');
    app.startRace();
  
    expect(moveCarsSpy).toHaveBeenCalledTimes(app.ATTEMPTS_COUNT);
    expect(printCarsProgressSpy).toHaveBeenCalledTimes(app.ATTEMPTS_COUNT);
  });

  test('count값이 동일할때 동일한 값의 name들이 배열에 잘 들어가는지 확인', () => {
   const mockRaceWinnerPrint = jest.fn();
   app.raceWinnerPrint = mockRaceWinnerPrint;

   const raceCar = [
     { name: 'a', count: 3 },
     { name: 'ab', count: 4 },
     { name: 'abc', count: 4 },
     { name: 'abcd', count: 2 },
   ];
   const expectedWinners = ['ab', 'abc'];

   app.raceWinner(raceCar);

   expect(mockRaceWinnerPrint).toHaveBeenCalledWith(expectedWinners)
  });

  test('우승자가 여러명일 때 콘솔에 잘 나오는지 테스트', () => {
    const winners = ['abc', 'abcd', 'abcde']; 
    const expectedOutput = '최종 우승자 : abc, abcd, abcde';

    const consoleLogSpy = jest.spyOn(console, 'log');
    app.raceWinnerPrint(winners);

    expect(consoleLogSpy).toHaveBeenCalledWith(expectedOutput);
    consoleLogSpy.mockRestore();
  });
});