import { GAME_STRING } from '../constants/constants';

const makeDistanceString = (distanceNumber) =>
  GAME_STRING.DISTANCE.repeat(distanceNumber);

export default makeDistanceString;
