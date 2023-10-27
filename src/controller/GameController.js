import { MESSAGE } from '../constants/messages.js';

export default class GameController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.print(MESSAGE.START);
  }
}
