const ValidatingTheValueUtils = {
  checkStrSizeOverFive: (strSize) => (strSize > 5),
  checkStrSizeIsZero: (strSize) => (strSize === 0),
  checkIsCanNotPrint: (str) => (!/^[a-zA-Z0-9가-힣]*$/.test(str)),
  checkIsNotNumber: (num) => (Number.isNaN(Number(num)) || (num.indexOf('.') !== -1)),
  checkNegativeOrZeroNum: (num) => (Number(num) <= 0),
  checkTooLargeNum: (num) => (Number(num) > 1000),
  checkSameNameInCarList: (carNameList) => (new Set(carNameList).size !== carNameList.length),
};

export default ValidatingTheValueUtils;
