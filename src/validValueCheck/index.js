import { MESSAGE } from "../constants/message.js";

export const carNameCheck = async (carsArray) => {
  carsArray.forEach((e, index) => {
    if (e.length > 5 || carsArray.lastIndexOf(e)!==index) {
      throw new Error(MESSAGE.Error)
    }
  })
}