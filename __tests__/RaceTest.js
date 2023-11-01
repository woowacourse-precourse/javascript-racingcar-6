import Race from '../src/Race.js';
import { Console, Random } from '@woowacourse/mission-utils';

describe('Race 클래스 테스트', () => {
  let race;

  beforeEach(() => {
    race = new Race();
  });

  test('pickNumberInRange 함수는 0부터 9 사이의 숫자를 반환', () => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });

  test('generateRandomNumber 메서드는 4 이상의 랜덤 숫자가 생성되면 true를 반환', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(4);
    const result = race.generateRandomNumber();
    expect(result).toBeTruthy();
  });

  test('generateRandomNumber 메서드는 4 미만의 랜덤 숫자가 생성되면 false를 반환', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);
    const result = race.generateRandomNumber();
    expect(result).toBeFalsy()
  });

  test('runRace 메서드는 carArr과 carDictionary를 받아서 랜덤으로 점수를 부여', () => {
    const carArr = ['car1', 'car2', 'car3'];
    const carDictionary = { car1: 0, car2: 0, car3: 0 };

    jest.spyOn(race, 'generateRandomNumber').mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true);
    race.runRace(carArr, carDictionary);

    expect(carDictionary).toEqual({ car1: 1, car2: 0, car3: 1 });
  });

  test('printRace 메서드는 carDictionary를 받아서 결과를 출력', () => {
    const carDictionary = { car1: 3, car2: 5, car3: 2 };

    jest.spyOn(Console, 'print').mockImplementation(() => {});
    race.printRace(carDictionary);

    expect(Console.print).toHaveBeenCalledWith('car1 : ---');
    expect(Console.print).toHaveBeenCalledWith('car2 : -----');
    expect(Console.print).toHaveBeenCalledWith('car3 : --');
  });
});
