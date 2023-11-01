function carNameToArray(input) {

    let carNameArray = []

    carNameArray = input.toString().split(",").map(isNameValid);

    return carNameArray;
}

function isNameValid(name) {
    if (name.length > 5 || name.length === 0) {
        throw new Error(`[ERROR] 각 자동차의 이름은 0 ~ 5자 사이로 입력해야 합니다.`);
    }
    return name;
}

export default carNameToArray;