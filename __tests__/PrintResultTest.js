import PrintGameResult from "../src/mvc/view/print_game_result.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () =>{return jest.spyOn(MissionUtils.Console, 'print');}

test('실행 결과 및 우승자 출력 테스트', () => {
  const RACING_CNT = 3;
  const RESULT = {a: [0,1,2], b: [0,0,1]};
  const WINNER = ['a'];
  const executeOutput = 'a : --';
  const winnerOutput = '최종 우승자 : a';
  const logSpy = getLogSpy();

  const printGameResult = new PrintGameResult(RACING_CNT, RESULT, WINNER);
  printGameResult.printGameResult();
  expect(logSpy).toHaveBeenCalledWith(executeOutput);
  expect(logSpy).toHaveBeenCalledWith(winnerOutput);
});