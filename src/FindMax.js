export function FindMax(carList, forwardCounts) {
  let maxForward = 0;
  for (let i = 0; i < carList.length; i++) {
    if (maxForward < forwardCounts[i]) {
      maxForward = forwardCounts[i];
    };
  };
  return maxForward
}
