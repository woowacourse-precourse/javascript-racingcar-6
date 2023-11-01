import DataProcess from '../../src/view/DataProcess.js'
import OutputView from '../../src/view/OutputView.js';
import testConstant from '../../t_constant/ViewConstant.js';

describe("DataProcess divideCarName", () => {
	test("divideCarName은 Function type이다 ", () => {
		expect(typeof DataProcess.divideCarName).toBe("function");
	})
	test('DataProcess.divideCarName은 값을 정상적으로 리턴한다 ', () => {
		testConstant.DivideCarName.forEach (({input, expected}) => {
			expect(DataProcess.divideCarName(input)).toStrictEqual(expected);
		});
	});
	test('DataProcess.divideCarName은 에러를 throw한다 ', () => {
		expect(() => DataProcess.divideCarName(undefined)).toThrow();
	});
});

describe("DataProcess transDistanceToHyphen", () => {
	test("transDistanceToHyphen은 Function type이다 ", () => {
		expect(typeof DataProcess.transDistanceToHyphen).toBe("function");
	})
	test('transDistanceToHyphen은 값을 정상적으로 리턴한다 ', () => {
		testConstant.TransDistanceToHyphen.forEach (({input, expected}) => {
			expect(DataProcess.transDistanceToHyphen(input)).toStrictEqual(expected);
		});
	});
	test('transDistanceToHyphen은 에러를 throw한다 ', () => {
		expect(() => DataProcess.transDistanceToHyphen(-1)).toThrow();
	});
});

describe("DataProcess transOutputFormDistance", () => {
	
	test("transOutputFormDistance은 Function type이다 ", () => {
		expect(typeof DataProcess.transOutputFormDistance).toBe("function");
	})
	test('transOutputFormDistance은 정상적으로 OutputView.outputDistanceCar에 값을 전달한다 ', () => {
		DataProcess.transDistanceToHyphen = jest.fn();
		OutputView.outputDistanceCar = jest.fn();
		testConstant.TransOutputFormDistance.forEach (({carName, distance}) => {
			DataProcess.transDistanceToHyphen.mockReturnValue(distance);
			DataProcess.transOutputFormDistance(carName, 0);
			expect(OutputView.outputDistanceCar).toHaveBeenCalledWith(`${carName} : ${distance}`);
		});
	});
});

describe("DataProcess transOutputFormWinner", () => {
	
	test("transOutputFormWinner은 Function type이다 ", () => {
		expect(typeof DataProcess.transOutputFormWinner).toBe("function");
	})
	test('transOutputFormWinner은 정상적으로 OutputView.outputWinnerName 값을 전달한다 ', () => {
		OutputView.outputWinnerName = jest.fn();
		testConstant.TransOutputFormWinner.forEach (({input, expected}) => {
			DataProcess.transOutputFormWinner(input);
			expect(OutputView.outputWinnerName).toHaveBeenCalledWith(expected);
		});
	})
}) 