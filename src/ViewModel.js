import {
  getGameStage, setGameStage, askForCarNamesView, askForGameCntView,
} from './Model.js';

const selectView = function selectTextForView() {
  setGameStage();
  const gameStage = getGameStage();
  switch (gameStage) {
    case 1:
      return askForCarNamesView;
    case 2:
      return askForGameCntView;
    default:
      return 'tmp';
  }
};

const saveCarName = function splitAndSaveCarNames() {
  'tmp';
};

export { selectView, saveCarName };
