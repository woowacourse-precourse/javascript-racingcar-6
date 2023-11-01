import RacingController from "../src/racing/RacingController.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

test('레이싱 게임 컨트롤러 2사이클 테스트', () => {
  const playersArray = ['이찬웅','한병학','박병학'];
  const attemptNumber = 2;

  const outputs = [
    '실행 결과','이찬웅 : ','한병학 : ','박병학 : -'
    ,'이찬웅 : -','한병학 : -','박병학 : -'
    ,'최종 우승자 : 이찬웅, 한병학, 박병학'];
    
  const random = [1,2,4,7,8,0];
  const logSpy = getLogSpy();
  
  mockRandoms([...random]);

  const racingGame = new RacingController(playersArray,attemptNumber);
  racingGame.startRacing();
  
  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
