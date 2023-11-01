import { mockQuestions } from './MainTest.js';
import validation from '../src/racingGame/validation.js';

describe('자동차명 입력값 예외 처리', () => {
	test('2대 이상이 아닐 시', () => {
		const cars = ['a'];
		mockQuestions(cars);

		expect(() => validation.carsNameValid(cars)).toThrow('[ERROR]');
	});

	test('자동차 이름이 1자 미만, 5자 초과 입력 시', () => {
		const cars = [''];
		mockQuestions(cars);

		expect(() => validation.carsNameValid(cars)).toThrow('[ERROR]');
	});

	test('동일한 자동차 이름 입력 시', () => {
		const cars = ['a'];
		mockQuestions(cars);

		expect(() => validation.carsNameValid(cars)).toThrow('[ERROR]');
	});

	test('자동차 이름이 문자 및 숫자가 아닐 시', () => {
		const cars = ['@'];
		mockQuestions(cars);

		expect(() => validation.carsNameValid(cars)).toThrow('[ERROR]');
	});
});

describe('횟수 입력값 예외 처리', () => {
	test('숫자가 아닐 시', () => {
		const str = 'a';
		mockQuestions(str);

		expect(() => validation.tryNumberValid(str)).toThrow('[ERROR]');
	});

	test('아무것도 입력하지 않았을 시', () => {
		const empty = '';
		mockQuestions(empty);

		expect(() => validation.tryNumberValid(empty)).toThrow('[ERROR]');
	});

	test('0이하를 입력했을 시', () => {
		const negative = -1;
		mockQuestions(negative);

		expect(() => validation.tryNumberValid(negative)).toThrow('[ERROR]');
	});
});
