import { checkNumberValidity } from '../src/feature/GetValidTotalRoundNumber';

describe('GetTotalRoundNumber', () => {
  test('validity test', () => {
    const roundNumberStrList = ['1', '1.2', 'a32', '032'];
    const correctBooleanValueList = [true, false, false, true];

    roundNumberStrList.forEach((roundNumberStr, i) => {
      expect(checkNumberValidity(roundNumberStr)).toBe(
        correctBooleanValueList[i],
      );
    });
  });
});
