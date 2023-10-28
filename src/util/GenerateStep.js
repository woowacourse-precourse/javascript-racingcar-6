/**
 *
 * @param {number} totalStepNum
 * @returns string
 * @description 매개변수 숫자만큼의 - 문자열을 생성하는 함수
 */
function GenerateStepStr(totalStepNum) {
  let strStep = "";
  for (let step = 0; step < totalStepNum; step += 1) {
    strStep += "-";
  }
  return strStep;
}

export default GenerateStepStr;
