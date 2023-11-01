import ERROR from '../Constant/ERROR.js';

export default class TrackCntValidation {
  constructor(input) {
    this.checkCntNegative(input);
    this.checkCntIsInteger(input);
  }

  checkCntNegative(input) {
    if (Number(input) <= 0) {
      throw new Error(ERROR.cntPositiveInteger);
    }
  }

  checkCntIsInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR.cntPositiveInteger);
    }
  }
}