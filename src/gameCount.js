import { readLineCar, readLineGameCount } from './utils.js';
import inputCarName from './inputCarName.js';

async function gameCount() {
  const gameCountNum = await readLineGameCount();
  return Number(gameCountNum);
}
