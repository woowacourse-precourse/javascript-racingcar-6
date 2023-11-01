import InputView from '../../src/view/InputView';
import testConstant from './ViewConstant';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();
  
	MissionUtils.Console.readLineAsync.mockImplementation(() => {
	  const input = inputs.shift();
	  return Promise.resolve(input);
	});
  };

describe("InputView inputCarName", () => {
	test("inputCarName은 Function type이다 ", () => {
		expect(typeof (InputView.inputCarName)).toBe("function");
	})
	test("Console.readLineAsync가 호출된다 ", () => {
		MissionUtils.Console.readLineAsync = jest.fn();
		InputView.inputCarName();
		expect(MissionUtils.Console.readLineAsync).toHaveBeenCalled();
	})
	test(`inputView inputCarName은 값을 정상적으로 리턴한다 `, () => {
		testConstant.InOutputView.forEach (async ({input, expected}) => {
			const inputs = [input];
			mockQuestions(inputs);
			expect(await InputView.inputCarName()).toStrictEqual(expected);
		});
	});
});

describe("InputView inputRepeatCount" , () => {
	test("inputRepeatCount는 Function type이다 ", () => {
		expect(typeof (InputView.inputRepeatCount)).toBe("function");
	})
	test("Console.readLineAsync가 호출된다 ", () => {
		MissionUtils.Console.readLineAsync = jest.fn();
		InputView.inputRepeatCount();
		expect(MissionUtils.Console.readLineAsync).toHaveBeenCalled();
	})
	test(`inputView inputRepeatCount는 값을 정상적으로 리턴한다'`, () => {
		testConstant.InOutputView.forEach (async ({input, expected}) => {
			const inputs = [input];
			mockQuestions(inputs);
			expect(await InputView.inputRepeatCount()).toStrictEqual(expected);
		});
	});
});