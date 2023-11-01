import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../../src/view/OutputView.js";
import { CONSOLE_MESSAGE } from "../../src/constants/ConsoleMessages.js";
import RacingCar from "../../src/model/RacingCar.js";

const outputView = new OutputView();
const getSpy = () => {
  const spy = jest.spyOn(MissionUtils.Console, 'print');
  spy.mockClear();

  return spy;
}

describe('outputView test', () => {
  test('func printQuery', () => {
    const spy = getSpy();

    outputView.printQuery('test');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('test'));
  });

  test('func printRacingCarState', () => {
    const mockCar = new RacingCar('test');
    const spy = getSpy();
    
    outputView.printRacingCarState(mockCar);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('test : '));
  });

  test('func outputFinalResult', () => {
    const input = 'kim, park';
    const spy = getSpy();
    
    outputView.outputFinalResult(input);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`${CONSOLE_MESSAGE.outputFinalResult} : ${input}`));
  });
});
