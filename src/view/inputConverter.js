import { Cars } from "../domian/cars";

export class InputConverter {
  convertToCars(input) {
    // 'asd,qwe,zxc' -> ['asd','qwe','zxc']
    const carNames = input.split(","); //['asd','qwe','zxc']
    // 이름 리스트로 Cars를 만든다
    return new Cars(carNames);
  }

  convertToAttemptCount(input) {
    const attemptCount = Number(input);
    return attemptCount;
  }
}
