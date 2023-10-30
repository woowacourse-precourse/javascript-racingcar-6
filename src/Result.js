import { Console } from "@woowacourse/mission-utils";

function result(SET_BASE){
    SET_BASE.forEach((car) => {
        let log = car.name + ' : '
        for(let i= 0; i < car.num; i++){
            log += '- '
            Console.print(log)
        }
    });
}

export default result