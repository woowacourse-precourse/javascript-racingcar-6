import getGoAndStop from '../src/util/progress/getGoAndStop';

describe('자동차 경주 게임의 전진 여부 테스트', () => {
  test('입력된 숫자의 길이와 자동차 갯수 만큼의 배열 생성 성공', async () => {
    // given
    const racers = 3;
    const raceCount = 10;
    const defaultArray = [];
    const expectedLength = 10;

    // when
    const result = await getGoAndStop(racers, raceCount, defaultArray);
    const resultLength = result.length;

    // then
    await expect(resultLength).toBe(expectedLength);
  });
});
