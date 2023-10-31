import race from '../src/controller/Race';
import { Random } from '@woowacourse/mission-utils';
describe('레이스 게임 테스트', () => {
  test('입력값에 따른 car 객체 생성', () => {
    const userInput = 'a,b';
    const equalObject = [
      { name: 'a', result: [], textResult: '' },
      { name: 'b', result: [], textResult: '' },
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

    const cars = [
      { name: 'a', result: [], textResult: '' },
      { name: 'b', result: [], textResult: '' },
    ];
    const inputPlayCount = 3;

    race.playRace(cars, inputPlayCount);

    expect(cars[0].result).toEqual([1, 4, 8]);
    expect(cars[1].result).toEqual([6, 2, 7]);

    expect(cars[0].textResult).toBe('--');
    expect(cars[1].textResult).toBe('--');
  });

  test('우승자가 여러명일 경우 출력', () => {
    const cars = [
      { name: 'a', result: [4, 5, 8], textResult: '---' },
      { name: 'b', result: [3, 0, 4], textResult: '-' },
      { name: 'c', result: [4, 9, 5], textResult: '---' },
    ];

    expect(race.winner(cars)).toEqual('a,c');
  });

  test('우승자가 한 명일 경우 출력', () => {
    const cars = [
      { name: 'a', result: [4, 5, 8], textResult: '---' },
      { name: 'b', result: [3, 0, 4], textResult: '-' },
      { name: 'c', result: [4, 9, 3], textResult: '--' },
    ];

    expect(race.winner(cars)).toEqual('a');
  });
});
