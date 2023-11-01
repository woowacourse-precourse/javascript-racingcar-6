import { parseCarResult } from '../src/utils/HandleOutput';

describe('자동차 이름 입력', () => {
  test('split 메서드로 이름 구분', () => {
    const input = 'apple,ban,cake';
    const result = input.split(',');

    expect(result).toContainEqual('apple', 'ban', 'cake');
    expect(result).toHaveLength(3);
  });

  test('자동차 이름을 받았을 때 저장', () => {
    const input = ['apple', 'ban', 'cake'];
    const object = new Map();
    input.forEach((name) => object.set(name, 0));

    input.forEach((name) => {
      expect(object.has(name)).toBeTruthy();
      expect(object.get(name)).toBe(0);
    });
  });
});

describe('자동차 결과 값 변환 테스트', () => {
  test('하이픈 길이는 파라미터로 주어진 숫자이다', () => {
    const input = ['hey', 5];
    const output = 'hey : -----';
    expect(parseCarResult(input[0], input[1])).toEqual(output);
  });

  test('주어진 길이가 0일 경우 하이픈은 없어야 한다.', () => {
    const input = ['hey', 0];
    const output = 'hey : ';
    expect(parseCarResult(input[0], input[1])).toEqual(output);
  });
});
