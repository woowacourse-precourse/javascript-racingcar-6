import selectWinner from '../selectWinner.js';

describe('우승자 선발 테스트', () => {
    const testCar = ['hyuk', 'pobi', 'jun'];

    test('단독 우승자 선발 테스트', () => {
        const testSingleScore = ['-', '-----', '-'];
        expect(selectWinner(testCar, testSingleScore)).toBe('pobi');
    });

    test('공동 우승자 선발 테스트', () => {
        const testDoubleScore = ['----', '-', '----'];
        expect(selectWinner(testCar, testDoubleScore)).toBe('hyuk, jun');
    });
})

