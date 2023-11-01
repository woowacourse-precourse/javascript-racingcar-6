import RacingCar from '../../src/model/RacingCar';

describe('레이싱 카 모델 테스트', () => {
  test.each([
    { name: 'alfa', randomNumber: 4, expectStatus: 1 },
    { name: 'bravo', randomNumber: 3, expectStatus: 0 },
    { name: 'delta', randomNumber: 5, expectStatus: 1 },
    { name: 'echo', randomNumber: 6, expectStatus: 1 },
  ])('레이싱 카 정상 이동 테스트', ({ name, randomNumber, expectStatus }) => {
    // given
    const racingCar = new RacingCar(name);

    // when & then
    racingCar.move(randomNumber);
    const result = racingCar.getRacingCarInfo();
    expect(result.status).toEqual(expectStatus);
  });
});
