// 기능5. 전진 조건
export function forward(output, move, v) {
  if (output[v] >= 4) {
    move[v] += 1;
  }
  return;
}
