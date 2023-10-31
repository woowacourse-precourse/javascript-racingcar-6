import { MissionUtils } from "@woowacourse/mission-utils";
import RacingCar from "../src/domain/RacingCar";
import GameUtils from "../src/utils/GameUtils";
import MESSAGE from "../src/constants/Message";
import RacingGameOutput from "../src/view/RacingGameOutput";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('게임 결과에 대한 테스트입니다.', () => {
  test('포비가 2칸, 크롱이 3칸 움직이면 우승자는 크롱으로 선정됩니다.', () => {
    // given
    const pobiCar = new RacingCar('pobi');
    const crongCar = new RacingCar('crong');

    const answers = ['crong'];
    
    pobiCar.moveForward();
    pobiCar.moveForward();

    crongCar.moveForward();
    crongCar.moveForward();
    crongCar.moveForward();


    // when
    const winner = GameUtils.selectWinners([pobiCar, crongCar]);

    // then
    expect(winner).toEqual(answers);
  });

  test('포비가 3칸, 크롱이 3칸 움직이면 우승자는 포비와 크롱으로 선정됩니다.', () => {
    // given
    const pobiCar = new RacingCar('pobi');
    const crongCar = new RacingCar('crong');

    const answers = ['crong', 'pobi'];
    
    pobiCar.moveForward();
    pobiCar.moveForward();
    pobiCar.moveForward();

    crongCar.moveForward();
    crongCar.moveForward();
    crongCar.moveForward();


    // when
    const winner = GameUtils.selectWinners([pobiCar, crongCar]);

    // then
    expect(winner).toEqual(expect.arrayContaining(answers));
  });

  test('포비가 3칸 크롱이 2칸 움직였을 때 우승자로 포비가 출력됩니다.', () => {
    // given

    const pobiCar = new RacingCar('pobi');
    const crongCar = new RacingCar('crong');

    const answer = `${MESSAGE.FINAL_WINNERS} : pobi`;
    const logSpy = getLogSpy();
    
    pobiCar.moveForward();
    pobiCar.moveForward();
    pobiCar.moveForward();

    crongCar.moveForward();
    crongCar.moveForward();

    // when
    const winner = GameUtils.selectWinners([pobiCar, crongCar]);
    RacingGameOutput.printFinalWinner(winner);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(answer));
  });

  test('포비가 3칸 크롱이 3칸 움직였을 때 우승자로 포비와 크롱이 출력됩니다.', () => {
    // given

    const pobiCar = new RacingCar('pobi');
    const crongCar = new RacingCar('crong');

    const answer = `${MESSAGE.FINAL_WINNERS} : pobi, crong`;
    const logSpy = getLogSpy();
    
    pobiCar.moveForward();
    pobiCar.moveForward();
    pobiCar.moveForward();

    crongCar.moveForward();
    crongCar.moveForward();
    crongCar.moveForward();

    // when
    const winner = GameUtils.selectWinners([pobiCar, crongCar]);
    RacingGameOutput.printFinalWinners(winner);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(answer));
  });
});
