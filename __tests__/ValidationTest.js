import Validator from '../src/validator/Validator.js'

describe('유효성 검사 테스트', () => {
  test('레이싱카 이름은 n자 이하로 지어야한다.', () => {
    const maxLength = 5

    expect(Validator.validNameLength('가나다라', maxLength)).toBe(true)
    expect(Validator.validNameLength('가나다라마', maxLength)).toBe(true)
    expect(Validator.validNameLength('가나다라마바', maxLength)).toBe(false)
    expect(Validator.validNameLength('', maxLength)).toBe(false)

    expect(Validator.validNameLengthByNameList(['가나다라', '가나다'], maxLength)).toBe(true)
    expect(Validator.validNameLengthByNameList(['가나다라', '가나다라마바'], maxLength)).toBe(false)
  })

  test('레이싱카 이름이 중복되면 안된다.', () => {
    expect(Validator.isDuplicateNameByNameList(['가나다라', '가나다'])).toBe(false)
    expect(Validator.isDuplicateNameByNameList(['가나다라', '가나다라'])).toBe(true)
    expect(Validator.isDuplicateNameByNameList(['가나다라', '가나다', '가나다'])).toBe(true)
  })

  test('시도 횟수 입력 값은 0 초과의 정수여야 한다.', () => {
    const minTryCount = 1

    expect(Validator.validTryCount(1, minTryCount)).toBe(true)
    expect(Validator.validTryCount(2, minTryCount)).toBe(true)
    expect(Validator.validTryCount(0, minTryCount)).toBe(false)
    expect(Validator.validTryCount(-1, minTryCount)).toBe(false)
    expect(Validator.validTryCount('a', minTryCount)).toBe(false)
    expect(Validator.validTryCount(1.1, minTryCount)).toBe(false)
    expect(Validator.validTryCount('1', minTryCount)).toBe(false)
    expect(Validator.validTryCount(null, minTryCount)).toBe(false)
    expect(Validator.validTryCount(undefined, minTryCount)).toBe(false)
  })
})
