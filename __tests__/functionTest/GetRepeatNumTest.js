import { Console } from '@woowacourse/mission-utils';
import getRepeatNum from '../../src/functions/startRacing/getRepeatNum';

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn(() => Promise.resolve(input));
};

describe('getRepeatNum 함수 테스트', () => {
  test('문자열 입력을 정수로 반환', async () => {
    // given
    const input = '2';
    const result = 2;
    mockQuestion(input);

    // when
    const repeatNum = await getRepeatNum();

    // then
    expect(repeatNum).toBe(result);
  });

  test('정수가 아닌 문자열을 입력했을 때, 예외처리', async () => {
    // given
    const input = 'a';
    const result = '[ERROR]';
    mockQuestion(input);

    // when, then
    await expect(getRepeatNum()).rejects.toThrow(result);
  });

  test('소수를 입력했을 때, 소수점 이하 버림 처리', async () => {
    // given
    const input = '2.8';
    const result = 2;
    mockQuestion(input);

    // when
    const repeatNum = await getRepeatNum();

    //  then
    await expect(repeatNum).toBe(result);
  });
});
