import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../../src/view/InputView.js";

const inputView = new InputView();
const mockInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return input;
  })
}

describe('inputView test', () => {
  test('func readRacingCarNames', async () => {
    const input = 'kim,park,cho';
    mockInput(input);

    const result = await inputView.readRacingCarNames();
    expect(result).toEqual(['kim', 'park', 'cho']);
  });

  test('func readRetryCount', async () => {
    const input = '3';
    mockInput(input);

    const result = await inputView.readRetryCount();
    expect(result).toMatch(/3/);
  });
});
