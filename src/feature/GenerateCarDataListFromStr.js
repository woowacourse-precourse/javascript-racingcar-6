import { CAR_NAME_SPLIT_MARK } from '../Constants.js';

const generateCarDataListFromStr = (carNameStr) => {
  const carNameList = carNameStr.split(CAR_NAME_SPLIT_MARK);
  const carDataList = carNameList.map((carName) => ({
    name: carName,
    distance: 0,
  }));
  return carDataList;
};
export default generateCarDataListFromStr;
