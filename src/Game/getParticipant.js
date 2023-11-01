import { MESSAGE } from '../Constant/MESSAGE';
import { readLineAsync } from '../Utils/readLineAsync';
import { verifyParticipants } from '../Verify/verifyParticipants';

export const getParticipant = async () => {
  const participants = await readLineAsync(MESSAGE.START);
  const participantsList = participants.split(',');

  await verifyParticipants(participantsList);

  return participantsList;
};
