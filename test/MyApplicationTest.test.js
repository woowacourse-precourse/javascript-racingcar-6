import inputCarName from "../functions/InputCarName.js";
import inputTryRacing from "../functions/InputTryRacing.js";
import printCarAdvanceState from "../functions/PrintCarAdvanceState.js";
import printWinner from "../functions/PrintWinner.js";

describe('전진 횟수 입력 테스트', () => {
    test('전진 횟수 입력확인', async () => {
        const returnData = await inputTryRacing('6');
        expect(returnData).toBe('6');
    });

    test('전진 횟수 예외처리', () => {
        expect(async () => {
            await inputTryRacing('test');
        }).rejects.toThrow('[ERROR] 숫자가 아닙니다.');
    });
});

describe('자동차 이름 부여 테스트', () => {
    test('자동차 이름 저장 확인', async () => {
        const returnData = await inputCarName('car1,car2,car3');
        expect(returnData).toEqual(['car1','car2','car3']);
    });

    test('자동차 이름 저장 예외처리', () => {
        expect(async () => {
            await inputCarName('carOne,carTwo,carThree');
        }).rejects.toThrow('[ERROR] 길이가 5가 넘습니다.');
    });
});

describe('경기 진행상황 출력 테스트', () => {
    test('경기 진행상황 출력 테스트', () => {
        const logSpy = jest.spyOn(global.console, 'log');
        const carAdvanceState = [2, 4, 3];
        const carName = ['car1','car2','car3'];
        printCarAdvanceState(carName, carAdvanceState);

        expect(logSpy).toHaveBeenCalledWith('car1 : --');
        expect(logSpy).toHaveBeenCalledWith('car2 : ----');
        expect(logSpy).toHaveBeenCalledWith('car3 : ---');
    });
});

describe('우승자 출력 테스트', () => {
    test('우승자 출력 테스트', () => {
        const logSpy = jest.spyOn(global.console, 'log');
        const carAdvanceState = [2, 4, 3];
        const carName = ['car1','car2','car3'];
        printWinner(carName, carAdvanceState);

        expect(logSpy).toHaveBeenCalledWith('최종 우승자 : car2');
    });
});