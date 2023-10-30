import RACING from "../constants/message"

/**
 * 
 * @param {*} nameArray 5글자 이하인 이름들의 배열을 받아옵니다. 
 */
export const checkName = async (nameArray) => {
    nameArray.forEach(name => {
        if (name.length > 5 || name.trim() === 0) throw new Error(RACING.NAMING_ERROR)
    })
}

/**
 * 
 * @param {*} string 전달받은 값이 숫자인지 확인합니다.
 */
export const checkNumber = async (number) => {
    if (isNaN(number)) throw new Error(RACING.NUMBER_ERROR)
}