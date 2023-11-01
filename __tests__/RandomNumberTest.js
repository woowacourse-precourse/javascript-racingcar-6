import checkRandomNumber from '../src/Util/randomNumber';

test('무작위 값 체크 함수의 리턴 값 타입은 boolean', () => {
  const result = checkRandomNumber();
  expect(typeof result).toBe('boolean');
});
