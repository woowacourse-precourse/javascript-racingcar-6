import App from '../src/App';

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
