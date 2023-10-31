function isValidName(userInput) {

    const carNameArray = []

    try {
        carNameArray = userInput.toString().split(",").map(checkNameLength);
    } catch (error) {
        console.error(error.message);
    }
    return carNameArray;
}

function checkNameLength(name) {
    if (name.length > 5) {
        throw new Error(`[ERROR] 각 자동차의 이름은 5자를 넘을 수 없습니다.`);
    }
    return name;
}

export default isValidName;