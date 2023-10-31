import { MissionUtils } from '@woowacourse/mission-utils';
import { selectView } from './ViewModel.js';

const CarNameView = async function InputCarNameView() {
  const textView = selectView();
  try {
    const carName = await MissionUtils.Console.readLineAsync(textView);
  } catch (error) {
    console.log('[Error]');
  }
};

const GameCntView = function InputGameCntView() {

};

const GameView = function GamePlayView() {

};

const ResultView = function GameResultView() {

};

const ViewDefault = async function AllViewControlModule() {
  CarNameView();
  GameCntView();
  GameView();
  ResultView();
};

export default ViewDefault;
