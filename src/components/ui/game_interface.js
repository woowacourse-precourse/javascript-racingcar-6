import attemptsNumberInput from "./attempts_number_input.js";
import carNameInput from "./car_name_input.js";
import {carDataInit} from "../data/car_data.js";

async function gameInterface() {
    let carName = await carNameInput();
    let attempsNumber = await attemptsNumberInput();
    carDataInit(carName);
};

export default gameInterface;