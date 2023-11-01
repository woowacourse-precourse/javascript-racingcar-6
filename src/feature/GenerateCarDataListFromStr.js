const generateCarDataListFromStr = (carNameStr) => {
  const carNameList = carNameStr.split(',');
  const carDataList = carNameList.map((carName) => ({
    name: carName,
    distance: 0,
  }));
  return carDataList;
};
export default generateCarDataListFromStr;
