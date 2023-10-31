import validation from '../src/validation/validationCarName';

describe('checkValidation', () => {
  test('배열이 아닌 경우', () => {
    //given
    const carNames = 'notAnArray';

    //when & then
    expect(() => validation(carNames)).toThrowError('[ERROR]');
  });

  test('빈 배열인 경우', () => {
    //given
    const carNames = [];

    //when & then
    expect(() => validation(carNames)).toThrowError('[ERROR]');
  });

  test('자동차 이름이 5자 이상인 경우', () => {
    //given
    const carNames = ['hamster'];

    //when & then
    expect(() => validation(carNames)).toThrowError('[ERROR]');
  });

  test('중복된 자동차 이름이 있는 경우', () => {
    //given
    const carNames = ['cat', 'dog', 'cat'];

    //when & then
    expect(() => validation(carNames)).toThrowError('[ERROR]');
  });
});
