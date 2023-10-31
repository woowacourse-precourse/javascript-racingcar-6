import carNameInput from "./car_name_input.js";

async function gameInterface() {
    let carName = await carNameInput();
};

export default gameInterface;