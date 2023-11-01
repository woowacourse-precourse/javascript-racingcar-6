import Race from "../src/utils/Race";
import Car from "../src/utils/Car";
import { MissionUtils } from "@woowacourse/mission-utils";

const getMoveForwardsSpy = () => {
  const moveForwardsSpy = jest.spyOn(Car.prototype,'moveForwards');
  moveForwardsSpy.mockClear();
  return moveForwardsSpy;
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getPrintResultSpy = () => {
  const printResultSpy = jest.spyOn(Race.prototype, 'printResult');
  printResultSpy.mockClear();
  return printResultSpy;
}

describe('Race 객체 검사', () => {
  let race;

  beforeEach(() => {
    race = new Race(['sohee, jeeho']);
  });

  test('printResult() moveForwards가 호출되는지 확인', () => {
    const moveForwardsSpy = getMoveForwardsSpy();
    
    race.printResult();

    expect(moveForwardsSpy).toHaveBeenCalled();
  });

  test('compete(moveNumber) Result를 출력했는지 확인', async () => {
    const moveNumber = 3;
    const logSpy = getLogSpy();
    const printResultSpy = getPrintResultSpy();

    await race.compete(moveNumber);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('실행결과'));
    expect(printResultSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('\n'));
  });

  test("getWinner(), 가장 큰 Car객체를 반환하는지 확인", async () => {
    const cars = [
      { name: "Car1", distance: 10 },
      { name: "Car2", distance: 20 },
      { name: "Car3", distance: 30 },
    ];

    race.cars = cars;
    const winner = await race.getWinner();

    expect(winner).toEqual('Car3')
  });

  test("getWinner(), 동점자가 있을 시 ,로 연결해서 반환하는지 확인", async () => {
    const cars = [
      { name: "Car1", distance: 30 },
      { name: "Car2", distance: 30 },
      { name: "Car3", distance: 10 },
    ];

    race.cars = cars;
    const winner = await race.getWinner();

    expect(winner).toEqual('Car1, Car2')
  });
})