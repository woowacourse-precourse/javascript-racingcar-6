import RacingTrack from '../../src/domains/RacingTrack.js';

describe('class RacingTrack test', () => {
  let racingTrack;
  const MOVE_FOWARD = true;
  const STOP = false;
  const carNames = '준모,기철,서부장';

  describe('메서드 test : moveEachCars', () => {
    test.each([
      [
        [MOVE_FOWARD, MOVE_FOWARD, STOP],
        [1, 1, 0],
      ],
      [
        [STOP, STOP, STOP],
        [0, 0, 0],
      ],
    ])(
      '전진가능한 isMoveFoward 값이 들어있는 배열이 들어왔을때 boolean에 맞게 움직이는지 확인',
      (isMoveFowardList, positionsResult) => {
        racingTrack = new RacingTrack(carNames);

        racingTrack.moveEachCars(isMoveFowardList);
        const carsPositions = racingTrack
          .getRoundResult()
          .map(({ position }) => position);

        expect(carsPositions).toEqual(positionsResult);
      }
    );
  });

  describe('메서드 test : totalCarAmount', () => {
    test.each([carNames, '안,녕,하,세,요', '2주차,고생하셨습'])(
      'user에게 입력받은 자동차 이름의 갯수와 등록된 Car instance 개수 확인',
      (carNamesInput) => {
        racingTrack = new RacingTrack(carNamesInput);
        const userNamesArray = carNamesInput.split(',');
        const result = racingTrack.totalCarAmount();

        expect(result).toBe(userNamesArray.length);
      }
    );
  });

  describe('메서드 test : mostMoveFowardDistance', () => {
    test('서부장이 2번움직이고 아무도 움직이지 않았을때 가장 멀리간 거리가 2회인지 확인', () => {
      const isMoveFowardList = [MOVE_FOWARD, STOP, STOP];
      racingTrack = new RacingTrack(carNames);
      racingTrack.moveEachCars(isMoveFowardList);
      racingTrack.moveEachCars(isMoveFowardList);
      const result = racingTrack.mostMoveFowardDistance();

      expect(result).toBe(2);
    });
    test('서부장만 2번 움직였는데 가장 멀리간 거리가 3일때 fail test', () => {
      const isMoveFowardList = [MOVE_FOWARD, STOP, STOP];
      racingTrack = new RacingTrack(carNames);
      racingTrack.moveEachCars(isMoveFowardList);
      racingTrack.moveEachCars(isMoveFowardList);
      const result = racingTrack.mostMoveFowardDistance();

      expect(result).not.toBe(3);
    });
  });

  describe('메서드 test : getRoundResult', () => {
    test('준모가 2번움직이고 아무도 움직이지 않았을때 각 자동차 info 확인', () => {
      const isMoveFowardList = [MOVE_FOWARD, STOP, STOP];
      racingTrack = new RacingTrack(carNames);
      racingTrack.moveEachCars(isMoveFowardList);
      racingTrack.moveEachCars(isMoveFowardList);
      const result = racingTrack.getRoundResult();

      expect(result).toEqual([
        { name: '준모', position: 2 },
        { name: '기철', position: 0 },
        { name: '서부장', position: 0 },
      ]);
      expect(result).not.toEqual([
        { name: '준모', position: 0 },
        { name: '기철', position: 0 },
        { name: '서부장', position: 2 },
      ]);
    });
  });
});
