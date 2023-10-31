import { getLogSpy } from './ApplicationTest';
import { Car } from '../src/Class/Car';
import { HandleOutput } from '../src/utils/HandleOutput';

describe('출력 기능 테스트', () => {
    test('중간 결과는 각 차량에 대해 한 줄씩 출력되어야 한다.', async () => {
        const names = ['foo', 'bar', 'baz', 'qux', 'fred', 'thud', 'corge'];
        const progressArray = [4, 1, 3, 6, 9, 3, 7];
        const output = `foo : ----\nbar : -\nbaz : ---\nqux : ------\nfred : ---------\nthud : ---\ncorge : -------`;
        const logSpy = getLogSpy();
        const cars = names.map((name) => new Car(name));
        progressArray.forEach((p, i) => (cars[i].progress = p));

        HandleOutput.roundResult(cars);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    test('최종 결과는 주어진 형식에 따라 출력되어야 한다.', async () => {
        const names = ['foo', 'bar'];
        const output = `최종 우승자 : foo, bar`;
        const logSpy = getLogSpy();

        HandleOutput.finalResult(names);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
});
