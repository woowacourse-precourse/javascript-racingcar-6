import result from "../game/result.js";
import inputNames from "../data/inputName.js";
import inputNumber from "../data/inputNumber.js";
import createComputerNumber from "../data/createComputerNumber.js";

export default async function playGame() {
  const userName = await inputNames();
  const userNumber = await inputNumber();
  const computerNumber = await createComputerNumber();
  return await result(userName, userNumber, computerNumber);
}
