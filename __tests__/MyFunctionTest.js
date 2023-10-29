import Input from '../src/racingcar/domain/Input.js';

// test('테스트 설명', () => {
//   expect('검증대상').toBe('기대 결과');
// });

test('유저가 입력한 차 이름들 콤마 기준으로 나누기', () => {
  const input = 'pobi,woni,jun';
  const result = input.split(',');
  expect(result).toContain('woni');
});

test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
  const input = 'pobiwonijun';
  const result = input.split(',');

  expect(result).toContain('pobiwonijun');
});
