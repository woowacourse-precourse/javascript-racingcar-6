import validator from '../src/validator/Validator.js'

describe('유효성 검사 테스트', () => {
  test('레이싱카 이름은 n자 이하로 지어야한다.', () => {
    const maxLength = 5

    expect(validator.validNameLength('가나다라', maxLength)).toBe(true)
    expect(validator.validNameLength('가나다라마', maxLength)).toBe(true)
    expect(validator.validNameLength('가나다라마바', maxLength)).toBe(false)
  })

  test('레이싱카 이름이 중복되면 안된다.', () => {
    expect(validator.isDuplicateName(['가나다라', '가나다'])).toBe(false)
    expect(validator.isDuplicateName(['가나다라', '가나다라'])).toBe(true)
    expect(validator.isDuplicateName(['가나다라', '가나다', '가나다'])).toBe(true)
  })

  test('시도 횟수 입력 값은 0 초과의 정수여야 한다.', () => {
    const minTryCount = 1

    expect(validator.validTryCount(1, minTryCount)).toBe(true)
    expect(validator.validTryCount(2, minTryCount)).toBe(true)
    expect(validator.validTryCount(0, minTryCount)).toBe(false)
    expect(validator.validTryCount(-1, minTryCount)).toBe(false)
    expect(validator.validTryCount('a', minTryCount)).toBe(false)
    expect(validator.validTryCount('1.1', minTryCount)).toBe(false)
  })
})
