// 우승자 선정하기
const selectWinner = (carsPosition) => {
  let maxPosition = Math.max(...Object.values(carsPosition));
  let maxPositionCarName = Object.keys(carsPosition).filter(
    (car) => carsPosition[car] === maxPosition
  );
};

export default selectWinner;
