import Car from './Car';
import { Console } from "@woowacourse/mission-utils";
import { 
    CAR_NAME_NULL_ERROR_MESSAGE,
    CAR_NAME_INVALID_ERROR_MESSAGE,
    RACE_RESULT_MESSAGE,
    RACE_TIME_ERROR_MESSAGE,
    CREATE_CAR_ERROR_MESSAGE,
    NOT_MOVE_WIN_ERROR_MESSAGE,
    RACE_WINNER_PRINT_MESSAGE,
    NOT_FOUND_WINNER_ERROR_MESSAGE,
    DUPLICATE_CAR_NAME_ERROR_MESSAGE,
    CAR_NAME_LIMIT_LENGTH,
} from "./Define";

export const VALIDATE_CAR_NAME = (CAR_NAME_INPUT) => {
    if (!CAR_NAME_INPUT) {
        throw new Error(CAR_NAME_NULL_ERROR_MESSAGE);
    }
    const CAR_NAMES = CAR_NAME_INPUT.split(',').map(NAME => NAME.trim());
    if (CAR_NAMES.some(CAR_NAME => CAR_NAME.length > CAR_NAME_LIMIT_LENGTH)) {
        throw new Error(CAR_NAME_INVALID_ERROR_MESSAGE);
    }
    const DUPLICATE_CHECK_NAME = new Set(CAR_NAMES);
    if (DUPLICATE_CHECK_NAME.size !== CAR_NAMES.length) {
        throw new Error(DUPLICATE_CAR_NAME_ERROR_MESSAGE);
    }
}

export const CREATE_CARS = (CAR_NAMES) => {
    if (CAR_NAMES.length < 1) {
        throw new Error(CREATE_CAR_ERROR_MESSAGE);
    }
    return CAR_NAMES.map(CAR_NAME => new Car(CAR_NAME));
}

export const VALIDATE_RACE_TIME = (RACE_TIME_INPUT) =>  {
    const RACE_TIME = parseInt(RACE_TIME_INPUT, 10);
    if (isNaN(RACE_TIME) || RACE_TIME <= 0) {
      throw new Error(RACE_TIME_ERROR_MESSAGE);
    }
    return RACE_TIME;
}

export const RACE_RUN = (CARS, RACE_TIMES) => {
    Console.print(RACE_RESULT_MESSAGE);
    for (let i = 0; i < RACE_TIMES; i++) {
        CARS.forEach(CAR => CAR.move());
        CARS.forEach(CAR => Console.print(CAR.toString()));
        Console.print('');
    }
}

export const FIND_WINNERS = (CARS) => {
    const WIN_POSITION = Math.max(...CARS.map(CAR => CAR.getPosition()));
    if (WIN_POSITION === 0) {
        throw new Error(NOT_MOVE_WIN_ERROR_MESSAGE);
    }
    return CARS.filter(CAR => CAR.getPosition() === WIN_POSITION).map(CAR => CAR.name);
}

export const PRINT_WINNERS = (WINNERS) => {
    if (WINNERS.length < 1) {
        throw new Error(NOT_FOUND_WINNER_ERROR_MESSAGE);
    }
    Console.print(`${RACE_WINNER_PRINT_MESSAGE}${WINNERS.join(', ')}`);
}