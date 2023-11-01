import attemptsNumberInput from "./attempts_number_input.js";
import carNameInput from "./car_name_input.js";
import {carDataInit} from "../data/car_data.js";
import printExecution from "./print_execution.js";

async function gameInterface() {
    let carName = await carNameInput();
    let attempsNumber = await attemptsNumberInput();
    carDataInit(carName);
    printExecution(attempsNumber);
};

export default gameInterface;