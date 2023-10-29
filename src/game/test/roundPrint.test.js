import { advanceCondition } from '../roundPrint.js';

test('전진 조건 테스트', async () => {
    expect(await advanceCondition(3)).toBe(false);
    expect(await advanceCondition(4)).toBe(true);
    expect(await advanceCondition(9)).toBe(true);
})