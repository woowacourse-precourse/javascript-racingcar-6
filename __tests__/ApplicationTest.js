import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { 
  FORWARD_CONDITIONS,
  INPUT_NUMBER_ERR_MSG,
  PLAYER_NUMBER_ERR_MSG 
} from "../src/constant.js";
import ErrorCheck from "../src/ErrorCheck.js";


const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    //then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  //playerInfoInput()
  test("입력받은 값 분리", async () => {
    //given
    const inputs = ["kim,lee,park"];
    mockQuestions(inputs);
    const app =new App();

    //when
    const result = await app.playerInfoInput();

    //then
    expect(result).toEqual(["kim", "lee", "park"]);
  });

  //playerSetting()
  test("사용자 객체 생성 및 접근 키 생성", () => {
    //given
    const playerList = ["kim", "lee", "park"];
    const app =new App();

    //when
    const { playerObject, objectKeyList } = app.playerSetting(playerList);

  //then
    expect(playerObject).toEqual({ kim: 0, lee: 0, park: 0 });
    expect(objectKeyList).toEqual(["kim", "lee", "park"]);
  });

  //playOneRound()-success
  test("한 라운드 실행-전진", () => {
    // given
    const playerObject = { kim: 0 };
    const player = "kim";
    const forwardNumbers = [FORWARD_CONDITIONS, FORWARD_CONDITIONS + 1];
    const logSpy = getLogSpy();
    mockRandoms(forwardNumbers);
    const app = new App();
  
    // when
    app.playOneRound(player, playerObject);
  
    // then
    expect(playerObject[player]).toBe(1);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("kim : -"));
  });

  //playOneRound()-fail
  test("한 라운드 실행-실패", () => {
    // given
    const notGoForward =2;
    const playerObject = { kim: 2 };
    const player = "kim";
    const randoms = [notGoForward, notGoForward-1];
    const logSpy = getLogSpy();
    mockRandoms(randoms);
    const app = new App();
  
    // when
    app.playOneRound(player, playerObject);
  
    // then
    expect(playerObject[player]).toBe(2);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("kim : --"));
  });

  //findWinner()
  test("우승자 판단 및 출력", () => {
    // given
    const playerObject = { kim: 3, lee: 2, park: 3 };
    const objectKeyList = ["kim", "lee", "park"];
    const logSpy = getLogSpy();
    const app = new App();
  
    // when
    app.findWinner(playerObject, objectKeyList);
  
    // then
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : kim, park");
  });

  //numberCheck()
  test("입력이 number 타입이 아닐 때", () => {
    //when
    expect(() => ErrorCheck.numberCheck(Number("hello")))
      .toThrow(INPUT_NUMBER_ERR_MSG);
    expect(() => ErrorCheck.numberCheck(5))
      .not.toThrow(INPUT_NUMBER_ERR_MSG);  });

  //playerNumberCheck()
  test("플레이어의 수가 2명 이하일 때", () => {
    //given
    const NO_ERROR_ARRAY = ["kim","lee","park"];
    const ERROR_ARRAY = ["kim"];
    
    //when
    expect(() => ErrorCheck.playerNumberCheck(ERROR_ARRAY)).toThrow(PLAYER_NUMBER_ERR_MSG);
    expect(() => ErrorCheck.playerNumberCheck(NO_ERROR_ARRAY)).not.toThrow(PLAYER_NUMBER_ERR_MSG);
  });


  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
