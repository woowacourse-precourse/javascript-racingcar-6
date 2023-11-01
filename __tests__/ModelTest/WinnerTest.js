import Winner from '../../src/Model/Winners.js';

describe('Winner Model Test', () => {
  // given
  test.each([
    [
      [
        { name: 'a', position: '' },
        { name: 'b', position: '-' },
      ],
      ['b'],
    ],
    [
      [
        { name: 'a', position: '-' },
        { name: 'b', position: '-' },
      ],
      ['a', 'b'],
    ],
  ])('Winner 정상 확인 테스트', async (cars, result) => {
    // when
    const win = new Winner();
    win.setWinners(cars);
    // then
    await expect(win.getWinner()).toEqual(result);
  });
});
