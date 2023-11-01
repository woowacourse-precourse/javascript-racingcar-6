// 숫자만큼 distance string 만드는지 테스트
import makeDistanceString from '../src/utils/makeDistanceString';

describe('기능 테스트', () => {
  test('이동 거리 숫자 문자로 만드는 기능', () => {
    const input = 4;
    const result = makeDistanceString(input);

    expect(result).toEqual('----');
  });
});
