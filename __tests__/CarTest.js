import { MissionUtils } from '@woowacourse/mission-utils';
import App, { Car, goStop, carPrint, winner, winnerValue } from '../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    console.log(Promise.resolve(input));
    // input에 전달받은 배열의 첫번째 값들이 들어가는구조
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
  // MissionUtils.Random.pickNumberInRange의 값이 number로 순환되는 형식임
};

describe('기능별 테스트', () => {
  const car = [new Car('mock', 1), new Car('jest', 3), new Car('test', 3)];

  test('car 값생성 테스트', () => {
    const carTest = new Car('test');
    expect(carTest.name).toBe('test');
    expect(carTest.value).toBe(0);
  });

  test('값이 4이상일 경우 전진하는지 테스트 ', () => {
    const carGo = [new Car('jest', 0), new Car('jest', 0)];
    const random = [5, 3];
    mockRandoms(random);
    goStop(carGo);
    expect(carGo[0].value).toBe(1);
    expect(carGo[1].value).toBe(0);
  });

  test('진행상황이 잘 출력 되는지 테스트', () => {
    const carFn = jest.spyOn(MissionUtils.Console, 'print');
    carPrint(car);
    expect(carFn).toBeCalledTimes(4);
    expect(carFn).toHaveBeenCalledWith('mock : -');
    expect(carFn).toHaveBeenCalledWith('test : ---');
    expect(carFn).toHaveBeenCalledWith('jest : ---');
    expect(carFn).toHaveBeenCalledWith('');
  });

  test('우승자가 잘 출력 되는지 테스트', () => {
    const winnerFn = jest.spyOn(MissionUtils.Console, 'print');
    winner(car);
    expect(winnerFn).toHaveBeenCalledWith('최종 우승자: jest,test');
  });

  test('우승자 최대값 테스트', () => {
    const result = winnerValue(car);
    expect(result).toBe(3);
  });

  test('예외처리', async () => {
    const carInput = ['javascript,string', '5'];
    mockQuestions(carInput);

    const app = new App();
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
