import { Car } from "../domian/car";

export class InputConverter {
  convertFromInputToList(input) {
    // 'asd,qwe,zxc' -> ['asd','qwe','zxc']
    const carsList = input.split(","); //['asd','qwe','zxc']
    return new Car(carsList);
  }

  convertFromInputToNumber(input) {
    const attempt = Number(input);
    return new MovingGenerator(attempt);
  }
}
