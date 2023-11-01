import race from '../src/controller/Race';
import { Random } from '@woowacourse/mission-utils';
import Car from '../src/model/Car';
describe('레이스 게임 테스트', () => {
  test('입력값에 따른 car 객체 생성', () => {
    const userInput = 'a,b';
    const equalObject = [
      { name: 'a', textResult: '' },
      { name: 'b', textResult: '' },
    ];
    expect(race.createRaceCars(userInput)).toEqual(equalObject);
  });

  test('무작위 값에 따른 게임 결과 계산', () => {
    Random.pickNumberInRange = jest.fn();

    Random.pickNumberInRange.mockReturnValueOnce(1);
    Random.pickNumberInRange.mockReturnValueOnce(6);
    Random.pickNumberInRange.mockReturnValueOnce(4);
    Random.pickNumberInRange.mockReturnValueOnce(2);
    Random.pickNumberInRange.mockReturnValueOnce(8);
    Random.pickNumberInRange.mockReturnValueOnce(7);

    const a = new Car('a');
    const b = new Car('b');
    const cars = [a, b];
    const inputPlayCount = 3;

    race.playRace(cars, inputPlayCount);

    expect(cars[0].textResult).toBe('--');
    expect(cars[1].textResult).toBe('--');
  });

  test('우승자가 여러명일 경우 출력', () => {
    const cars = [
      { name: 'a', textResult: '---' },
      { name: 'b', textResult: '-' },
      { name: 'c', textResult: '---' },
    ];

    expect(race.winner(cars)).toEqual('a,c');
  });

  test('우승자가 한 명일 경우 출력', () => {
    const cars = [
      { name: 'a', textResult: '---' },
      { name: 'b', textResult: '-' },
      { name: 'c', textResult: '--' },
    ];

    expect(race.winner(cars)).toEqual('a');
  });
});
