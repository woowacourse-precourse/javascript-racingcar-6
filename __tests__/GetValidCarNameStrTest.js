import { checkCarNameStrValidity } from '../src/feature/GetValidCarNameStr';

describe('GetValidCarNameStr', () => {
  test('validity test', () => {
    // test given CAR_NAME_SPLIT_MARK : ","
    // test given MAX_CAR_NAME_LENGTH : 5
    const carNameStrList = ['a,b,c', 'a,,b', 'abccde,ab', '032,12,---,'];
    const correctBooleanList = [true, true, false, true];

    carNameStrList.forEach((carNameStr, i) => {
      expect(checkCarNameStrValidity(carNameStr.split(','))).toBe(
        correctBooleanList[i],
      );
    });
  });
});
