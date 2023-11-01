import { checkCarNameStrValidity } from '../src/feature/GetValidCarNameStr';

describe('GetValidCarNameStr', () => {
  test('validity test', () => {
    const carNameStrList = ['a,b,c', 'a,,b', 'abccde,ab', '032,12,---,'];
    const correctBooleanList = [true, true, false, true];

    carNameStrList.forEach((carNameStr, i) => {
      expect(checkCarNameStrValidity(carNameStr.split(','))).toBe(
        correctBooleanList[i]
      );
    });
  });
});
