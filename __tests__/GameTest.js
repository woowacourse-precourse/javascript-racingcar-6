import { findWinner } from '../src/utils/CalLogic';
import { handleOutputGame } from '../src/utils/HandleOutput';
import { getLogSpy } from './ApplicationTest';

describe('승자 계산 테스트', () => {
  test('승자가 여러명 일때 중복승자로 결과가 반영되어야 한다.', () => {
    const input = new Map();
    input.set('a', 1);
    input.set('b', 2);
    input.set('c', 0);
    input.set('d', 2);
    const output = ['b', 'd'];
    expect(findWinner(input)).toEqual(output);
  });
});

describe('승자 출력 기능 테스트', () => {
  test('여러명의 승자는 쉼표로 구분하여 출력하여야 한다.', () => {
    const input = ['a', 'b', 'd'];
    const output = 'a, b, d';
    const logSpy = getLogSpy();
    handleOutputGame(input);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('한명의 승자만 있을 때도 정상적으로 출력되어야 한다.', () => {
    const input = ['a'];
    const output = 'a';
    const logSpy = getLogSpy();
    handleOutputGame(input);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
