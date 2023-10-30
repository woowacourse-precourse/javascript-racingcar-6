export function FindMax(maxForward, forwardCounts, i) {
  if (maxForward < forwardCounts[i]) {
    maxForward = forwardCounts[i];
  };
  return maxForward
}