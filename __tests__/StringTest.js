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
