import { MissionUtils } from '@woowacourse/mission-utils';
import { selectView, saveCarName, saveGameCnt } from './ViewModel.js';

const CarNameView = async function InputCarNameView() {
  const textView = selectView();
  const carName = await MissionUtils.Console.readLineAsync(textView);
  saveCarName(carName);
};

const GameCntView = async function InputGameCntView() {
  const textView = selectView();
  const gameCnt = await MissionUtils.Console.readLineAsync(textView);
  saveGameCnt(gameCnt);
};

const GameView = function GamePlayView() {

};

const ResultView = function GameResultView() {

};

const ViewDefault = async function AllViewControlModule() {
  await CarNameView();
  await GameCntView();
  GameView();
  ResultView();
};

export default ViewDefault;
