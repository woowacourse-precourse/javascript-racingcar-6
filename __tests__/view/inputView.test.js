import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../../src/view/inputView.js";

const inputView = new InputView();
const mockInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    console.log(`${input} input`);
    return input;
  })
}
const mockInputs = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  })
}

describe('inputView test', () => {
  test.each('func readRacingCarNames', async () => {
  const input = 'kim,park,cho';

  mockInput(input);

  const result = await inputView.readRacingCarNames();

  expect(result).toEqual(['kim', 'park', 'cho']);
  });

  test('func readRetryCount', async () => {
    const input = '3';
  
    mockInput(input);
  
    const result = await inputView.readRetryCount();
  
    expect(result).toEqual('3');
    });
})