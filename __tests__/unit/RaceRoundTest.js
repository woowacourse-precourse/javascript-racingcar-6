import { MissionUtils } from '@woowacourse/mission-utils';

describe('경기가 진행되는 라운드는', () => {
  test('0~9 사이의 랜덤한 숫자를 생성하는가?', () => {
    RaceRound.createRandomNum();
  });

  test('자동차의 이름 수 만큼 라운드가 진행되는가?', () => {
    RaceRound.giveRandomNumToCarName();
  });

  test('모든 자동차에게 랜덤한 숫자를 제공하는가?', () => {
    const inputNamesCount = 3;
    const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');

    expect(randomSpy).toBeCalledTimes(inputNamesCount);
  });
});