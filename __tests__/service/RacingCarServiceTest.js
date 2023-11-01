import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCarGrid from '../../src/service/RacingCarService.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('레이싱 카 서비스 클래스 테스트', () => {
  test.each([
    { racingCarNameInput: 'alfa,bravo' },
    { racingCarNameInput: 'alfa,bravo,delta' },
    { racingCarNameInput: 'alfa,bravo,delta,echo' },
    { racingCarNameInput: 'golf,hotel,lima,india' },
  ])('레이싱 카 정상 생성 확인 테스트', ({ racingCarNameInput }) => {
    // given
    const expectRacingCarList = racingCarNameInput.split(',');
    const racingCarGrid = new RacingCarGrid(racingCarNameInput);
    const racingCarList = racingCarGrid.getRacingGrid();

    // when & then
    racingCarList.forEach(({ name, status }, idx) => {
      expect(name).toEqual(expectRacingCarList[idx]);
      expect(status).toEqual(0);
    });
  });

  test.each([
    { racingCarNameInput: 'alfa,bravo', randomNumber: [2, 0], expectResult: [0, 0] },
    { racingCarNameInput: 'alfa,bravo,delta', randomNumber: [4, 4, 4], expectResult: [1, 1, 1] },
    {
      racingCarNameInput: 'alfa,bravo,delta,echo',
      randomNumber: [1, 2, 3, 4],
      expectResult: [0, 0, 0, 1],
    },
  ])('레이싱 카 정상 이동 테스트', ({ racingCarNameInput, randomNumber, expectResult }) => {
    // given
    const racingCarGrid = new RacingCarGrid(racingCarNameInput);

    // when
    mockRandoms([...randomNumber]);
    racingCarGrid.setRacingGrid();
    const racingCarList = racingCarGrid.getRacingGrid();

    // then
    racingCarList.forEach((racingCar, idx) => {
      expect(racingCar.status).toBe(expectResult[idx]);
    });
  });
});
