import attemptsNumberInput from "./attempts_number_input.js";
import carNameInput from "./car_name_input.js";

async function gameInterface() {
    let carName = await carNameInput();
    let attempsNumber = await attemptsNumberInput();
};

export default gameInterface;