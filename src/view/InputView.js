import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readRacingVehicleName(vehicles) {
    const racingVehicleName = await Console.readLineAsync(
      `경주할 ${vehicles} 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분`,
    );
    return racingVehicleName;
  },
};

export default InputView;
