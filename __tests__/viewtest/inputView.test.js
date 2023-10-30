import InputView from '../../src/view/InputView';
import Console from '@woowacourse/mission-utils';

Console.readLineAsync = jest.fn();

describe("inputView inputCarName", () => {
	test("함수가 존재하는가? ", () => {
		expect(typeof InputView.inputCarName).toBe("function");
	})
	test("Console.readLineAsync", () => {
		InputView.inputCarName();
		expect(Console.readLineAsync).toBecalled();
	})
})