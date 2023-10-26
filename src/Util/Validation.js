import { ERROR_MESSAGE } from "./Message.js";

function checkRacingCarName(racingCarName){
  racingCarName.split(",").forEach((carName) => {
    if (carName.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    if (carName === '') throw new Error(ERROR_MESSAGE.NAME_BLANK);
  })
}

export { checkRacingCarName }