import createExecutionLog from '../src/util/progress/createExecutionLog';

describe('자동차 경주 게임의 전진 결과 값 테스트', () => {
  test('생성된 전진 결과 값에 따른 데이터 최신화 값 반환', async () => {
    // given
    const testCarData = new Map();
    testCarData.set('test1', '');
    testCarData.set('test2', '');
    testCarData.set('test3', '');
    testCarData.set('test4', '');

    const testGoAndStops = [
      ['-', '-', '-', '-'],
      ['', '-', '-', ''],
      ['-', '-', '', '-'],
      ['', '-', '-', '-'],
      ['-', '-', '', '-'],
      ['', '-', '-', '-'],
    ];

    // when
    const result = await createExecutionLog(testGoAndStops, testCarData);
    const resultKeys = [...result.keys()];
    const resultValues = [...result.values()];

    const expectedResult = new Map([
      ['test1', '---'],
      ['test2', '------'],
      ['test3', '----'],
      ['test4', '-----'],
    ]);
    const expectedResultKeys = [...expectedResult.keys()];
    const expectedResultValues = [...expectedResult.values()];

    const expectedKeysHasNoFalse = [];
    const expectedValuesHasNoFalse = [];

    resultKeys.forEach((item, index) =>
      item === expectedResultKeys[index] ? expectedKeysHasNoFalse.push(true) : expectedKeysHasNoFalse.push(false),
    );
    resultValues.forEach((item, index) =>
      item === expectedResultValues[index] ? expectedValuesHasNoFalse.push(true) : expectedValuesHasNoFalse.push(false),
    );

    // then
    await expect(expectedKeysHasNoFalse).not.toContain(false);
    await expect(expectedValuesHasNoFalse).not.toContain(false);
  });
});
