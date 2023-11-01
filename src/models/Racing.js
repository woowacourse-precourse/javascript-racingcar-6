import { Random } from '@woowacourse/mission-utils';

const Racing = {
  movement(carDistanceMap) {
    carDistanceMap.forEach((value, key) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        carDistanceMap.set(key, `${carDistanceMap.get(key)}-`);
      }
    });
  },

};

export default Racing;
