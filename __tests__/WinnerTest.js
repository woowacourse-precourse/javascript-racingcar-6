import Winner from '../src/Winner.js';
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Winner 함수 테스트", () => {
  test("Racing 함수의 반환배열에서 가장 긴 문자열과 같은 인덱스의 car배열값 출력", () => {
    const car = ['용안', '이삭', '광호'];
    const racing = ['---', '-', '--'];
    const outputs = ['최종 우승자 : 용안'];
    const logSpy = getLogSpy();

    Winner(car, racing);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("Racing 함수의 반환배열에서 가장 긴 문자열이 두개 이상이라면 해당하는 car배열값 ','로 구분하여 모두 출력", () => {
    const car = ['용안', '이삭', '광호'];
    const racing = ['--', '-', '--'];
    const outputs = ['최종 우승자 : 용안, 광호'];
    const logSpy = getLogSpy();

    Winner(car, racing);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});