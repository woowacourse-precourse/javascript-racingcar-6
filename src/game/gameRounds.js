import roundPrint from './roundPrint.js';

export default function gameRounds(carArr, scoreArr) {
    for(let car = 0; car < carArr.length; car++) {
        roundPrint(carArr, scoreArr, car);
    }
}