import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
	constructor(name)
	{
		this.name = name;
		this.pos = 0;
	}
	race()
	{
		if (MissionUtils.Random.pickNumberInRange(0, 9) > 3)
            this.pos++;
		MissionUtils.Console.print(this.name + ' : ' + '-'.repeat(this.pos));
	}
}

