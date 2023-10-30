import RACING from "../constants/message"

/**
 * 
 * @param {*} nameArray 5글자 이하인 이름들의 배열을 받아옵니다. 
 */
const checkName = (nameArray) => {
    nameArray.forEach(name => {
        if (name.length > 5 || name.trim() === 0) throw new Error(RACING.NAMING_ERROR)
    })
}

export default checkName