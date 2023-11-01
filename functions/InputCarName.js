async function inputCarName(carNameStr) {
    const carNameArr = carNameStr.split(',');

    carNameArr.forEach(element => {
        if(element.length > 5){
            throw new Error('[ERROR] 길이가 5가 넘습니다.');
        }
    });

    return carNameArr;
}

export default inputCarName;