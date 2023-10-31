import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "./Message"

async function validCarInput(){
    const NAME_INPUT = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME)
    let SPLIT_NAME = NAME_INPUT.split(',')
    Console.print(NAME_INPUT)
    let cars = []
    for(let i=0; i < SPLIT_NAME.length; i++){
        if(SPLIT_NAME[i].length > 5 || SPLIT_NAME[i].length === 0){
            Console.print(ERROR.INPUT_LENGTH)
            throw new Error(ERROR.INPUT_LENGTH)
        }
        else{
            cars.push({name:SPLIT_NAME[i], num:0})
        }
    }
    return cars
}

async function validNumberiNPUT(){
    const NUM_INPUT = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME)
    if(isNaN(NUM_INPUT)|| !Number.isInteger(Number(NUM_INPUT))){
        Console.print(ERROR.NUM_INT)
        throw new Error(ERROR.NUM_INT)
    }
    return NUM_INPUT
}

export {validCarInput, validNumberiNPUT}