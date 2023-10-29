import { readLineGameCount } from './utils.js';

async function gameCount() {
  const gameCountNum = await readLineGameCount();
  return Number(gameCountNum);
}

export default gameCount;
