import advanceCondition from '../data/advanceCondition.js';

export default function result(carArr, count) {
    let strArr = [...Array(carArr.length).fill('')];
    for(let i = 0; i < count; i++) {
        for(let j = 0; j < carArr.length; j++) {
            if(advanceCondition()) {
                strArr[j] += '-';
            }
            console.log(carArr[j],':', strArr[j]);
        }
    }
}