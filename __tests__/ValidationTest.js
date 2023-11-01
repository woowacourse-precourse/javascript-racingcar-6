import CarNameValidation from '../src/Validation/CarNameValidation.js';
import TrackCntValidation from '../src/Validation/TrackCntValidation';

describe('Valdation Test', () => {
  test.each([
    // given
    [''],
    ['a,javaji'],
    [',a'],
    ['a,'],
    [','],
    ['aaa,aaa'],
    ['pobi,pobi'],
  ])('이름의 길이, 중복, NULL 입력값 테스트', inputs => {
    expect(() => {
      // when
      new CarNameValidation(inputs);
      // then
    }).toThrow('[ERROR]');
  });

  test.each([
    // given
    [''],
    ['a'],
    ['1.1'],
    ['-1'],
    ['0'],
    [','],
    [' '],
    ['\t'],
  ])('Track 입력 자연수 여부 테스트', inputs => {
    expect(() => {
      // when
      new TrackCntValidation(inputs);
      // then
    }).toThrow('[ERROR]');
  });
});
