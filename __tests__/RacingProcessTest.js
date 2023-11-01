import Race from '../src/RacingProcess.js';
import Car from '../src/Car.js';
// 전진-정지는 Application Test.js에서 해 추가로 하지 않음.

describe('자동차 경주 과정', () => {
  let race = new Race();

  test('입력한 횟수만큼 라운드 진행', () => {
    const carArr = [new Car('pobi'), new Car('woni'), new Car('jun')];
    const roundCount = 5;
    const mockOneRound = jest.spyOn(race, 'oneRound');
    race.runRace(carArr, roundCount);
    expect(mockOneRound).toHaveBeenCalledTimes(roundCount);
  });

  test('우승자 출력', () => {
    const carArr = [new Car('pobi'), new Car('woni'), new Car('jun')];
    carArr[0].position = 3;
    carArr[1].position = 2;
    carArr[2].position = 3;
    const winners = race.getWinner(carArr);
    expect(winners).toEqual(['pobi', 'jun']);
  });
});
