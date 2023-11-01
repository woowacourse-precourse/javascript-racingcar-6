import { SPLIT_STANDARD } from '../constants/constants';

export const strToStrArr = (str) => str.split(SPLIT_STANDARD);

export const strToNum = (str) => +str;

export const strArrTostr = (strArr) => strArr.join(', ')