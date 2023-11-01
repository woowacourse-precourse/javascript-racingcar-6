import generateCarDataListFromStr from '../src/feature/GenerateCarDataListFromStr.js';

describe('GenerateCarDataListFromStr', () => {
  test('Data Check', () => {
    // test given CAR_NAME_SPLIT_MARK : ","
    const carNameStrList = ['a,b,b', 'a,,b', '032,12,---'];
    const correctDataList = [
      [
        {
          name: 'a',
          distance: 0,
        },
        {
          name: 'b',
          distance: 0,
        },
        {
          name: 'b',
          distance: 0,
        },
      ],
      [
        {
          name: 'a',
          distance: 0,
        },
        {
          name: '',
          distance: 0,
        },
        {
          name: 'b',
          distance: 0,
        },
      ],
      [
        {
          name: '032',
          distance: 0,
        },
        {
          name: '12',
          distance: 0,
        },
        {
          name: '---',
          distance: 0,
        },
      ],
    ];

    carNameStrList.forEach((carNameStr, i) => {
      expect(generateCarDataListFromStr(carNameStr)).toEqual(
        correctDataList[i],
      );
    });
  });
});
