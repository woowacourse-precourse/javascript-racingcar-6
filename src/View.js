import { MissionUtils } from '@woowacourse/mission-utils';
import { selectView, saveCarName } from './ViewModel.js';

const CarNameView = async function InputCarNameView() {
  const textView = selectView();
    const carName = await MissionUtils.Console.readLineAsync(textView);
    saveCarName(carName);
  
};

const GameCntView = function InputGameCntView() {

};

const GameView = function GamePlayView() {

};

const ResultView = function GameResultView() {

};

const ViewDefault = async function AllViewControlModule() {
  await CarNameView();
  GameCntView();
  GameView();
  ResultView();
};

export default ViewDefault;
