import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../../src/view/OutputView.js";
import { CONSOLE_MESSAGE } from "../../src/constants/consoleMessages.js";
import RacingCar from "../../src/model/RacingCa.jsr";

const outputView = new OutputView();
const spy = jest.spyOn(MissionUtils.Console, 'print');

describe('outputView test', () => {
  test('func printQuery', () => {
    outputView.printQuery('test');

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('test'));
  });

  test('func printRacingCarState', () => {
    const mockCar = new RacingCar('test');
    outputView.printRacingCarState(mockCar);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('test : '));
  });

  test('func outputFinalResult', () => {
    const input = 'kim, park';
    outputView.outputFinalResult(input);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`${CONSOLE_MESSAGE.outputFinalResult} : ${input}`));
  });
});
