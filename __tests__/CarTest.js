import Car from "../src/utils/Car";
import NumberGenerator from "../src/utils/NumberGenerator";
import { MissionUtils } from "@woowacourse/mission-utils";

const getRandomNumberSpy = () => {
  const logSpy = jest.spyOn(NumberGenerator.prototype,'getRandomNumber');
  logSpy.mockClear();
  return logSpy;
};

const getIsSuccessSpy = () => {
  const isSuccessSpy = jest.spyOn(Car.prototype,'isSuccess');
  isSuccessSpy.mockClear();
  return isSuccessSpy;
};

const getGetResultMessageSpy = () => {
  const getResultMessageSpy = jest.spyOn(Car.prototype,'getResultMessage');
  getResultMessageSpy.mockClear();
  return getResultMessageSpy;
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('Car 객체 검사', () => {  
  test('isSuccess 랜덤 넘버 호출 확인', () => {
    const randomNumberSpy = getRandomNumberSpy();
    
    const car = new Car();
    car.isSuccess();

    expect(randomNumberSpy).toHaveBeenCalled();
  });

  test('getResultMessage() true면 이름 : -, false면 빈 문자열 반환', () => {
    const inputs = [false, true];
    const outputs = ['sohee : ', 'sohee : -'];

    const car = new Car('sohee');

    inputs.forEach(async (input, i) => {
      const result = await car.getResultMessage(input);
      expect(result).toEqual(outputs[i]);
    });
  });

  test('moveForwads()호출시 위 두개의 함수가 호출되는지 확인', async () => {
    const isSuccessSpy = getIsSuccessSpy();
    const getResultMessageSpy = getGetResultMessageSpy();
    const logSpy = getLogSpy();
    const output = 'sohee : ';
    
    const car = new Car('sohee');
    const result = await car.moveForwards();

    expect(isSuccessSpy).toHaveBeenCalled();
    expect(getResultMessageSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });
});
