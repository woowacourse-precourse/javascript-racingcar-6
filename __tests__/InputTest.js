import RacingCar from '../src/controller/RacingCar';
import View from '../src/view/View';
import { Console } from '@woowacourse/mission-utils';

describe('입력 테스트', () => {
  const racingCar = new RacingCar();
  const view = new View();
  const carName = '우테코';
  
  test('setCarList 호출 시 이름 입력은 한 번만 받습니다.', async () => {
    const carList = '끈기,열정,그리고,합격';
    Console.readLineAsync = jest.fn();  
    Console.readLineAsync.mockResolvedValueOnce(carList);
  
    await racingCar.setCarList();
  
    expect(Console.readLineAsync).toHaveBeenCalledTimes(1);
  });

  test('올바른 자동차 이름 입력시 테스트', async () => {
    const carList = '끈기,열정,그리고,합격';
    Console.readLineAsync = jest.fn().mockResolvedValueOnce(carList);

    expect(await view.inputCarNames()).toEqual([
      '끈기',
      '열정',
      '그리고',
      '합격',
    ]);
  });
  
  test('getRepeatTime 호출 시 이름 입력은 한 번만 받습니다.', async () => {
    const num = '3';
    Console.readLineAsync = jest.fn();  
    Console.readLineAsync.mockResolvedValueOnce(num);
  
    await racingCar.getRepeatTime();
  
    expect(Console.readLineAsync).toHaveBeenCalledTimes(1);
  });

  test('입력 횟수는 입력 받고 Number 형태로 변환한다.', async () => {
    const fakeNum = '3';
    Console.readLineAsync = jest.fn().mockResolvedValueOnce(fakeNum);

    expect(await view.inputRepeatNumber()).toEqual(3);
  });
});
