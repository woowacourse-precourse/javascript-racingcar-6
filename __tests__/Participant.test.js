import Participant from '../src/Participant';
import Util from '../src/Util';
import { MESSAGE } from '../src/constant';

describe('Participant 클래스 테스트', () => {
  test('Participant 클래스 생성 테스트', () => {
    const NAME = 'taeyoon';
    const participant = new Participant(NAME);

    expect(participant.name).toEqual(NAME);
    expect(participant.progress).toEqual('');
  });

  test('Participant.moveOrNot매서드 getRandomBoolean true일 경우 테스트', () => {
    jest.spyOn(Util, 'getRandomBoolean').mockReturnValue(true);

    const participant = new Participant('taeyoon');
    const init = participant.progress;
    participant.moveOrNot();

    expect(participant.progress).toEqual(init + MESSAGE.progressIcon);
  });

  test('Participant.moveOrNot매서드 getRandomBoolean false일 경우 테스트', () => {
    jest.spyOn(Util, 'getRandomBoolean').mockReturnValue(false);

    const participant = new Participant('taeyoon');
    const init = participant.progress;
    participant.moveOrNot();

    expect(participant.progress).toEqual(init);
  });
});
