import { Console } from '@woowacourse/mission-utils';
import { initializeCarNameObj } from '../src/utils/initializeObj';
import { getCarNamesList, getPlayCount } from '../src/utils/Input';
import { createRandomNum } from '../src/utils/Number';
import { printCarPosition } from '../src/utils/Output';
import { carMove } from '../src/utils/Race.js';
import {
	validateCarNameLength,
	validatePlayCount,
	validateRandomNum,
	validateForMove,
} from '../src/utils/Validation';
import {
	getWinner,
	findMaxValue,
	findMaxKeys,
	printWinner,
} from '../src/utils/Winner';
import { startRacing } from '../src/utils/Main';

describe('함수 테스트', () => {
	// initiallizeObj.js
	test('initializeCarNameObj 함수로 객체가 리턴이 되는지 확인', () => {
		const input = ['Pobi', 'Jin', 'Snow'];
		expect(initializeCarNameObj(input)).toStrictEqual({
			Jin: 0,
			Pobi: 0,
			Snow: 0,
		});
	});

	// Input.js
	test('getCarNamesList가 ,을 기준으로 string을 list를 반환해주는지 확인', async () => {
		const input = 'Pobi,Jose,Jason';
		expect(await getCarNamesList(input)).toStrictEqual([
			'Pobi',
			'Jose',
			'Jason',
		]);
	});

	test('getPlayCount가 입력받은 문자열이 숫자인지 확인하고 Int형으로 변환시켜주는지 테스트', async () => {
		const input = '4';
		expect(await getPlayCount(input)).toBe(4);
	});

	// Number.js
	test('createRandomNum이 0~9사이의 랜덤값을 반환해주는지 테스트', () => {
		for (let i = 0; i <= 5; i++) {
			expect(createRandomNum()).toBeGreaterThanOrEqual(0);
			expect(createRandomNum()).toBeLessThanOrEqual(10);
		}
	});

	// Output.js
	test('printCarPosition이 position 값에 따라 "-"를 추가로 붙혀주는지 테스트', () => {
		const input = { name: 'Pobi', position: 5 };

		const spy = jest.spyOn(global.console, 'log');
		printCarPosition(input.name, input.position);

		expect(spy).toHaveBeenCalledWith('Pobi : -----');
	});

	// Race.js
	test('carMove 함수가 정상적으로 호출되는지 확인', () => {
		const carNames = ['car1', 'car2', 'car3'];
		const carNameObj = { car1: 0, car2: 0, car3: 0 };

		const spy = jest.spyOn(global.console, 'log');
		carMove(carNames, carNameObj, 5);

		expect(spy).toHaveBeenCalledWith('car1 : -');
		expect(spy).toHaveBeenCalledWith('car2 : -');
		expect(spy).toHaveBeenCalledWith('car3 : -');
	});

	// Validation.js
	test('validateCarNameLength 함수가 5글자가 넘는 자동차 이름을 잘 걸러내고 있는지 테스트', () => {
		const failInput = 'abcdef';
		const successInput = 'pobi';

		expect(() => {
			validateCarNameLength(failInput);
		}).toThrow('[ERROR] 특정 자동차의 이름이 5자를 초과하였습니다.');

		expect(() => {
			validateCarNameLength(successInput);
		}).not.toThrow();
	});

	test('validatePlayCount 함수가 문자열 중 숫자가 아닌 문자열을 잘 걸러내고 있는지 테스트', () => {
		const failInput = 'no';
		const successInput = '4';

		expect(() => {
			validatePlayCount(failInput);
		}).toThrow('[ERROR] 입력해주신 시도할 횟수가 숫자가 아닙니다.');

		expect(() => {
			validatePlayCount(successInput);
		}).not.toThrow();
	});

	test('validateRandomNum 함수가 숫자 타입을 검사 하는지, 0~9 사이의 값을 검사 하고 있는지 테스트', () => {
		const failInput = { type: 'one', number: 10 };
		const successInput = { type: 1, number: 5 };

		expect(() => {
			validateRandomNum(failInput.type);
		}).toThrow(
			'[ERROR] 차의 전진 유무를 판단하는 무작위 값이 숫자가 아닙니다.'
		);

		expect(() => {
			validateRandomNum(failInput.number);
		}).toThrow(
			'[ERROR] 차의 전진 유무를 판단하는 무작위 값이 0보다 작거나 9보다 큽니다.'
		);

		expect(() => {
			validateRandomNum(successInput.type);
		}).not.toThrow();

		expect(() => {
			validateRandomNum(successInput.number);
		}).not.toThrow();
	});

	test('validateForMove 함수가 4이상의 값들은 True를 낮은 값들은 False를 나타내는지 테스트', () => {
		const failInput = 2;
		const successInput = 5;

		expect(validateForMove(failInput)).toBeFalsy();

		expect(validateForMove(successInput)).toBeTruthy();
	});

	// Winner.js
	test('findMaxValue 함수가 가장 큰 벨류 값을 찾는데 동작하는지 확인', () => {
		const carNameObj = { car1: 1, car2: 3, car3: 2 };
		expect(findMaxValue(carNameObj)).toBe(3);
	});

	test('findMaxKeys 함수가 가장 큰 키값을 찾는데 동작하는지 확인', () => {
		const carNameObj = { car1: 1, car2: 3, car3: 2 };
		const max = 3;
		expect(findMaxKeys(carNameObj, max)).toStrictEqual(['car2']);
	});

	test('printWinner 함수가 여러 우승자가 나올 시 이를 처리하는지 확인', () => {
		const maxKeys = ['car1', 'car2', 'car3'];
		const spy = jest.spyOn(global.console, 'log');
		printWinner(maxKeys);
		expect(spy).toHaveBeenCalledWith('최종 우승자 : car1, car2, car3');
	});

	test('printWinner 함수가 단일 우승자가 나올 시 이를 처리하는지 확인', () => {
		const maxKeys = ['car1'];
		const spy = jest.spyOn(global.console, 'log');
		printWinner(maxKeys);
		expect(spy).toHaveBeenCalledWith('최종 우승자 : car1');
	});

	test('getWinner 함수가 올바르게 동작하는지 확인', () => {
		const carNameObj = { car1: 1, car2: 3, car3: 3 };
		const spy = jest.spyOn(global.console, 'log');
		getWinner(carNameObj);
		expect(spy).toHaveBeenCalledWith('최종 우승자 : car2, car3');
	});
});
