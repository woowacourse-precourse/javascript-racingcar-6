import RACING from "../constants/message.js"

/**
 * 
 * @param {*} nameArray 
 * 1. 5글자 이하인 이름들의 배열을 받아옵니다.
 * 2. 중복된 이름이 없는지 검사합니다.
 */
export const checkName = async (nameArray) => {
    nameArray.forEach(name => {
        if (name.length > 5 || name.trim() === 0) throw new Error(RACING.NAMING_ERROR)
        if (nameArray.filter(value => name === value).length >= 2) throw new Error(RACING.NAMING_ERROR)
    })
}

/**
 * 
 * @param {*} string 
 * 1. 전달 받은 값이 숫자인지 확인합니다.
 * 2. 전달 받은 값이 0 또는 음수인지 확인합니다.
 */
export const checkNumber = async (number) => {
    if (isNaN(number)) throw new Error(RACING.NUMBER_ERROR)
    if (number <= 0) throw new Error(RACING.NUMBER_ERROR)
}