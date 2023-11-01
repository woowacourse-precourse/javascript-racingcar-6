import ConductGame from "../../src/controller/ConductGame.js";
import ValidatingTheValue from '../../src/view/ValidatingTheValue.js';
import InputView from '../../src/view/InputView.js';

describe("ConductGame", () => {
	test("ConductGame Function type이다 ", () => {
		expect(typeof ConductGame).toBe("function");
	})
	test('ConductGame으로 객체를 생성한다 ', () => {
        ValidatingTheValue.checkCarNames = jest.fn();
        ValidatingTheValue.checkRepeatCount = jest.fn();
        InputView.inputCarName = jest.fn();
        InputView.inputRepeatCount = jest.fn();
        ValidatingTheValue.checkCarNames.mockReturnValue(["123", "456"]);
        ValidatingTheValue.checkRepeatCount.mockReturnValue(2);
		const test = ConductGame();
        expect(typeof test).toBe("object");
	});
});