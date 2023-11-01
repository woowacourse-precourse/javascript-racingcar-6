import CarNameValidation from '../src/Validation/CarNameValidation.js';
import TrackCntValidation from '../src/Validation/TrackCntValidation';

describe('Valdation Test', () => {
    // given
  test.each([
    [''],
    ['a,javaji'],
    [',a'],
    ['a,'],
    [','],
    ['aaa,aaa'],
    ['pobi,pobi'],
  ])('이름의 길이, 중복, NULL 입력값 테스트', (inputs) => {

    // when & then
    expect(() => {new CarNameValidation(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([
    [''],
    ['a'],
    ['1.1'],
    ['-1'],
    ['0'],
    [','],
    [' '],
    ['\t'],
  ])('Track 입력 자연수 여부 테스트', (inputs) => {

    // when & then
    expect(() => {new TrackCntValidation(inputs);
    }).toThrow('[ERROR]');
  });
});
