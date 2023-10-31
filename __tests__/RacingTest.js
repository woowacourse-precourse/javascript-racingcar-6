import Car from '../src/Car';
import { Console } from '@woowacourse/mission-utils';
import {
    CREATE_CARS,
    VALIDATE_CAR_NAME,
    VALIDATE_RACE_TIME,
    RACE_RUN,
    FIND_WINNERS,
    PRINT_WINNERS,
} from '../src/Race';
import {
    CAR_NAME_NULL_ERROR_MESSAGE,
    CAR_NAME_INVALID_ERROR_MESSAGE,
    RACE_TIME_ERROR_MESSAGE,
    CREATE_CAR_ERROR_MESSAGE,
    NOT_MOVE_WIN_ERROR_MESSAGE,
    NOT_FOUND_WINNER_ERROR_MESSAGE,
    DUPLICATE_CAR_NAME_ERROR_MESSAGE,
} from '../src/Define';

jest.mock('@woowacourse/mission-utils');
describe('Race 테스트', () => {
    describe('CREATE_CARS 함수 테스트', () => {
        test('주어진 자동차 이름 배열로 Car 인스턴스 배열 생성', () => {
            const CAR_NAMES = ['car1', 'car2'];
            const CARS = CREATE_CARS(CAR_NAMES);

            expect(CARS.length).toBe(2);
            expect(CARS[0]).toBeInstanceOf(Car);
            expect(CARS[1]).toBeInstanceOf(Car);
            expect(CARS[0].name).toBe('car1');
            expect(CARS[1].name).toBe('car2');
        });

        test('자동차 0개 입력 시 오류 발생', () => {
            const CAR_NAMES = [];

            expect(() => CREATE_CARS(CAR_NAMES)).toThrowError(CREATE_CAR_ERROR_MESSAGE);
        });
    });

    describe('VALIDATE_CAR_NAME 함수 테스트', () => {
        test('빈 문자열이 입력되면 오류 발생', () => {
            const INPUT = '';

            expect(() => VALIDATE_CAR_NAME(INPUT)).toThrowError(CAR_NAME_NULL_ERROR_MESSAGE);
        });

        test('자동차 이름이 5자를 초과하면 오류 발생', () => {
            const INPUT = 'car123,car2';

            expect(() => VALIDATE_CAR_NAME(INPUT)).toThrowError(CAR_NAME_INVALID_ERROR_MESSAGE);
        });

        test('중복된 자동차 이름이 입력되면 오류 발생', () => {
            const INPUT = 'car1,car1';

            expect(() => VALIDATE_CAR_NAME(INPUT)).toThrowError(DUPLICATE_CAR_NAME_ERROR_MESSAGE);
        });

        test('올바른 자동차 이름이 입력되면 오류가 발생하지 않음', () => {
            const INPUT = 'car1,car2';

            expect(() => VALIDATE_CAR_NAME(INPUT)).not.toThrowError();
        });
    });

    describe('VALIDATE_RACE_TIME 함수 테스트', () => {
        test('입력된 시도 횟수가 숫자가 아니면 오류 발생', () => {
            const INPUT = 'abc';

            expect(() => VALIDATE_RACE_TIME(INPUT)).toThrowError(RACE_TIME_ERROR_MESSAGE);
        });

        test('입력된 시도 횟수가 1 미만이면 오류 발생', () => {
            const INPUT = '0';

            expect(() => VALIDATE_RACE_TIME(INPUT)).toThrowError(RACE_TIME_ERROR_MESSAGE);
        });

        test('올바른 시도 횟수가 입력되면 숫자로 변환되어 반환', () => {
            const INPUT = '5';
            const RESULT = VALIDATE_RACE_TIME(INPUT);

            expect(RESULT).toBe(5);
        });
    });

    describe('RACE_RUN 함수 테스트', () => {
        beforeEach(() => {
            Console.print.mockClear();
        });
  
        test('RACE_RUN 실행 시 Console.print 호출 확인', () => {
            const CARS = [new Car('car1'), new Car('car2')];
            const RACE_TIMES = 3;

            RACE_RUN(CARS, RACE_TIMES);
            expect(Console.print).toHaveBeenCalledTimes(10);
        });
    });

    describe('FIND_WINNERS 함수 테스트', () => {
        test('우승자 찾기', () => {
            const TEST_CAR_A = new Car('car1');
            const TEST_CAR_B = new Car('car2');
            TEST_CAR_A.position = 2;
            TEST_CAR_B.position = 1;
            const CARS = [TEST_CAR_A, TEST_CAR_B];
            const WINNERS = FIND_WINNERS(CARS);

            expect(WINNERS.length).toBe(1);
            expect(WINNERS[0]).toBe('car1');
        });

        test('공동 우승자 찾기', () => {
            const TEST_CAR_A = new Car('car1');
            const TEST_CAR_B = new Car('car2');
            TEST_CAR_A.position = 2;
            TEST_CAR_B.position = 2;
            const CARS = [TEST_CAR_A, TEST_CAR_B];
            const WINNERS = FIND_WINNERS(CARS);

            expect(WINNERS.length).toBe(2);
            expect(WINNERS).toContain('car1');
            expect(WINNERS).toContain('car2');
        });

        test('경주 후 시작점이 우승일 시 오류 반환', () => {
            const TEST_CAR_A = new Car('car1');
            const TEST_CAR_B = new Car('car2');
            const CARS = [TEST_CAR_A, TEST_CAR_B];

            expect(() => FIND_WINNERS(CARS)).toThrowError(NOT_MOVE_WIN_ERROR_MESSAGE);
        });
    });

    describe('PRINT_WINNERS 함수 테스트', () => {
        test('우승자 출력', () => {
            const CARS = ['car1', 'car2'];
            const SPY = jest.spyOn(Console, 'print');
    
            PRINT_WINNERS(CARS);
            expect(SPY).toHaveBeenCalledWith("최종 우승자 : car1, car2");
            SPY.mockRestore();
        });

        test('우승자가 빈 배열일 경우 오류 반환', () => {
            const CARS = [];
            
            expect(() => PRINT_WINNERS(CARS).toThrowError(NOT_FOUND_WINNER_ERROR_MESSAGE));
        });
    });
});