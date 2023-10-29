/**
 * toContain
 * - 배열 또는 Set 내에서 주어진 값을 엄격하게 찾는 역할
 * - 값을 엄격하게 비교한다 : 값, 속성, 내용 모두 일치
 *
 * toContainEqual
 * - 배열 또는 Set 내에서 주어진 값을 엄격하지 않게 찾는 역할
 * - 주어진 값과 동등한 값을 찾는다 : 동등연산자(==) 기반
 * - ex) 1 == '1' -> 통과
 */

describe('문자열 테스트', () => {
  test('split 메서드로 주어진 값을 구분', () => {
    const input = '1,2';
    const result = input.split(',');

    expect(result).toContain('2', '1');
    expect(result).toContainEqual('1', '2');
  });

  test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
    const input = '1';
    const result = input.split(',');

    expect(result).toContain('1');
  });

  test('substring 메서드로 특정 구간 값을 반환', () => {
    const input = '(1,2)';
    const result = input.substring(1, 4);

    expect(result).toEqual('1,2');
  });

  test('at 메서드로 특정 위치의 문자 찾기', () => {
    const input = 'abc';
    const result = input.at(0);

    expect(result).toEqual('a');
  });
});
