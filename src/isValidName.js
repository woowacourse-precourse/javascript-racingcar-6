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
        throw new Error(`[ERROR] "${name}"은 5글자를 초과합니다.`);
    }
    return name;
}

export default isValidName;