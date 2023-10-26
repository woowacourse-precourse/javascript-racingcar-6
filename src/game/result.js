import gameRounds from './gameRounds.js';

export default function result(carArr, count) {
    let strArr = [...Array(carArr.length).fill('')];
    for(let round = 0; round < count; round++) {
        gameRounds(carArr, strArr);
    }
}