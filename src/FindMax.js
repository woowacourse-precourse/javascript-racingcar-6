function CheckMax(maxForward, forwardCounts, i) {
  if (maxForward < forwardCounts[i]) {
    maxForward = forwardCounts[i];
  };
  return maxForward
};

export function FindMax(carList, forwardCounts) {
  let maxForward = 0;
  for (let i = 0; i < carList.length; i++) {
    maxForward = CheckMax(maxForward, forwardCounts, i)
  };
  return maxForward
};
