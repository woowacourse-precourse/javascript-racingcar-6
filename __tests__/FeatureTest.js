import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

// describe("기능 테스트", () => {
//   test("Lap.printStage 메서드 테스트", () => {
//     const array = "1,2";
//     const result = input.split(",");

//     expect(result).toContain("2", "1");
//     expect(result).toContainEqual("1", "2");
//   });
// });
