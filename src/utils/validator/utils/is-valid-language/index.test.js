import isValidLanguage from './index.js';

describe('isValidLanguage', () => {
  test.each([
    ['korea,love,france', true],
    ['사랑해요,한국,러뷰스', true],
    ['하입boy,new진스,coco샤넬', true],
  ])('%s 값을 입력시 return %s', (input, expected) => {
    expect(isValidLanguage(input)).toBe(expected);
  });

  test.each([
    ['kor@a,toto6', false],
    ['_#_$,~!@$', false],
    ['오호_, ,도#', false],
  ])('%s 값을 입력시 return %s', (input, expected) => {
    expect(isValidLanguage(input)).toBe(expected);
  });
});
