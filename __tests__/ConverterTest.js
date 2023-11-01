import Converter from "../src/util/Converter.js";

describe('점수변환, 트레이스변환기 테스트', () => {
  test('랜덤배열을 점수배열로 변환 테스트', () => {
    const input = [0,1,2,3,4,5,6,7,8,9];
    const result = [0,0,0,0,1,1,1,1,1,1];

    expect(Converter.scoreFilter(input)).toEqual(result); 
  });

  test('랜덤배열을 트레이스배열로 변환 테스트', () => {
    const input = [0,1,2,3,4,5,6,7,8,9];
    const result = ['','','','','-','-','-','-','-','-',];

    expect(Converter.traceFilter(input)).toEqual(result);
  });
});
