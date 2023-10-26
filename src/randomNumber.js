const checkRandomNumber = async () => {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
};

export default checkRandomNumber;
