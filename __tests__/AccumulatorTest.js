import { scoreAccumulator, traceAccumulator } from "../src/util/Accumulator.js";

describe('점수 누적기,이동거리 누적기 테스트',() => {
  test('점수 누적기 테스트', () => {
    const scoreArray = [1,0,1];
    const randomArray = [3,4,0];
    const result = [1,1,1];

    expect(scoreAccumulator(scoreArray, randomArray)).toEqual(result);
  });

  test('이동거리 누적기 테스트', () => {
    const traceArray = ['--', '-',''];
    const randomArray = [0,6,9];
    const result = ['--','--','-'];
    
    expect(traceAccumulator(traceArray, randomArray)).toEqual(result);
  });
});
