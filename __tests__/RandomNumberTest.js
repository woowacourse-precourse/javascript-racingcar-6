import checkRandomNumber from '../src/Util/randomNumber';

test('무작위 값 체크', () => {
  expect(typeof checkRandomNumber()).toBe('boolean');
});
