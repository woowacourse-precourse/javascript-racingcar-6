import { MissionUtils } from '@woowacourse/mission-utils';
import { selectView, saveCarName, saveGameCnt } from './ViewModel.js';

const CarNameView = async function InputCarNameView() {
  const textView = selectView();
  const carName = await MissionUtils.Console.readLineAsync(textView);
  await saveCarName(carName);
};

const GameCntView = async function InputGameCntView() {
  const textView = selectView();
  const gameCnt = await MissionUtils.Console.readLineAsync(textView);
  saveGameCnt(gameCnt);
};

const GameView = async function GamePlayView() {
  const textView = await selectView();
  MissionUtils.Console.print(textView);
};

const ResultView = function GameResultView() {

};

const ViewDefault = async function AllViewControlModule() {
  await CarNameView();
  await GameCntView();
  await GameView();
  await ResultView();
};

export default ViewDefault;
