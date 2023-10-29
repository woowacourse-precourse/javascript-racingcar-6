import RacingCar from "../src/domain/RacingCar";
import GameUtils from "../src/utils/GameUtils";

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
})