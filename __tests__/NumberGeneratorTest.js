import NumberGenerator from '../src/racingcar/lib/classes/NumberGenerator';

// createRandomNumbers 통과
test('createRandomNumbers / 랜덤 숫자 생성 test-1', () => {
  const numbers = NumberGenerator.createRandomNumbers();
  console.log(numbers);
  // 반환된 값이 배열인지 확인
  expect(Array.isArray(numbers)).toBe(true);
  // 배열의 길이가 1인지 확인
  expect(numbers.length).toBe(1);
});

test('createRandomNumbers / 랜덤 숫자 생성 test-2', () => {
  const numbers = NumberGenerator.createRandomNumbers();
  console.log(numbers);
  expect(Array.isArray(numbers)).toBe(true);
  expect(numbers.length).toBe(1);
});

test('createRandomNumbers / 랜덤 숫자 생성 test-3', () => {
  const numbers = NumberGenerator.createRandomNumbers();
  console.log(numbers);
  expect(Array.isArray(numbers)).toBe(true);
  expect(numbers.length).toBe(1);
});
