import InputView from '../../src/view/InputView';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();
  
	MissionUtils.Console.readLineAsync.mockImplementation(() => {
	  const input = inputs.shift();
	  return Promise.resolve(input);
	});
  };

describe("InputView inputCarName", () => {
	test("함수가 존재하는가? ", () => {
		expect(typeof InputView.inputCarName).toBe("function");
	})
	test("Console.readLineAsync는 호출되었는가? ", () => {
		MissionUtils.Console.readLineAsync = jest.fn();
		InputView.inputCarName();
		expect(MissionUtils.Console.readLineAsync).toHaveBeenCalled();
	})
	const testCases = [
		{ input: "pobi,woni", expected: "pobi,woni" },
		{ input: "alice,bob", expected: "alice,bob" },
	];
	testCases.forEach (({input, expected}) => {
		test(`inputView inputCarName은 어떤 값를 리턴하는가? '${input}'`, async () => {
			const inputs = [input];
			mockQuestions(inputs);
			expect(await InputView.inputCarName()).toStrictEqual(expected);
		});
	});
});

describe("InputView inputRepeatCount" , () => {
	test("함수가 존재하는가? ", () => {
		expect(typeof InputView.inputRepeatCount).toBe("function");
	})
	test("Console.readLineAsync는 호출되었는가? ", () => {
		MissionUtils.Console.readLineAsync = jest.fn();
		InputView.inputRepeatCount();
		expect(MissionUtils.Console.readLineAsync).toHaveBeenCalled();
	})
	const testCases = [
		{ input: "1", expected: "1" },
		{ input: "2", expected: "2" },
	];
	testCases.forEach (({input, expected}) => {
		test(`inputView inputRepeatCount는 어떤 값를 리턴하는가? '${input}'`, async () => {
			const inputs = [input];
			mockQuestions(inputs);
			expect(await InputView.inputRepeatCount()).toStrictEqual(expected);
		});
	});
});