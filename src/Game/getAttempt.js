import { MESSAGE } from '../Constant/MESSAGE';
import { readLineAsync } from '../Utils/readLineAsync';
import { verifyAttempt } from '../Verify/verifyAttempt';

export const getAttempt = async () => {
  const attempt = await readLineAsync(MESSAGE.ATTEMPT);

  await verifyAttempt(attempt);

  return Number(attempt);
};
