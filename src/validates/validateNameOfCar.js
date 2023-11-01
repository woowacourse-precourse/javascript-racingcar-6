import { Messages } from "../Constants/Messages.js";

const isOverFive = (namesOfcars) => namesOfcars.some((name) => name.length > 5);

const setCollection = (namesOfcars) => Set(namesOfcars);
const isDuplicateName = (namesOfcars) => setCollection < namesOfcars.length;


const vaildateNameOfCar = (namesOfcars) => {
    if (isOverFive(namesOfcars)) {
        throw new Error(Messages.ERROR_CARNAME_INPUT_WRONG);
    } 

    if (isDuplicateName(namesOfcars)) {
        throw new Error(Messages.ERROR_CARNAME_INPUT_DUPLICATE_NAME);
    }
}

export default vaildateNameOfCar;