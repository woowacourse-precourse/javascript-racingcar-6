const makeDistanceString = (distanceNumber) => {
  let distanceString = '';
  for (let index = 0; index < distanceNumber; index++) {
    distanceString += '-';
  }
  return distanceString;
};

export default makeDistanceString;
