export default function repeatFunctionNTimes(n, func) {
  for (let i = 0; i < n; i++) {
    func();
  }
}
