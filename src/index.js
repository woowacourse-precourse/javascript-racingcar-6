import { Console } from '@woowacourse/mission-utils';
import App from './App.js';

const app = new App();
try {
  await app.play();
} catch (error) {
  Console.print(`${error}`);
}
