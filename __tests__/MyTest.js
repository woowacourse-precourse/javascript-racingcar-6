describe('입력 값 테스트', () => {
 test('split 메소드로 값 구분', () => {
  const input = 'a,b';
  const result = input.split(',');

  expect(result).toContain('a', 'b');
  expect(result).toContainEqual('a', 'b');
 });
});
