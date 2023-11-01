import { Console } from '@woowacourse/mission-utils';
import { print, readLineAsync } from '../../src/utility/console';

jest.mock('@woowacourse/mission-utils');

describe('print 함수 테스트', () => {
  test('주어진 메세지를 제대로 출력하는지 테스트', () => {
    const message = 'Decaf coffee at night';
    print(message);

    expect(Console.print).toHaveBeenCalledWith(message);
  });
});

describe('readLineAsync 함수 테스트', () => {
  test('제공된 메세지를 출력하고 입력을 받는지 테스트', async () => {
    const message = '안녕하세요';
    await readLineAsync(message);

    expect(Console.readLineAsync).toHaveBeenCalledWith(message);
  });

  test('입력받은 문자열을 제대로 리턴하는지 테스트', async () => {
    const message = '입력: ';
    const expectedResult = '맛있는 저녁';

    Console.readLineAsync.mockResolvedValue(expectedResult);

    const result = await readLineAsync(message);
    expect(result).toBe(expectedResult);
  });
});