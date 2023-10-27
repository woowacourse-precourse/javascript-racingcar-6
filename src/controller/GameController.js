import { MESSAGE } from '../constants/messages.js';
import GameView from '../view/gameView.js';

export default class GameController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
  }

  init() {
    GameView.print(MESSAGE.START);
  }
}
