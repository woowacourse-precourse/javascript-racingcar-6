import { MAX_CAR_NAME, ERROR_CAR_NAME, ERROR_ROUND_COUNT } from './Constant.js';

const validation = {
    checkCarName(input) {
        input.forEach((carName) => {
            if (carName.length > MAX_CAR_NAME || carName.length === 0)
              throw new Error(ERROR_CAR_NAME);
        });
        if (new Set(input).size !== input.length)
            throw new Error(ERROR_CAR_NAME);
        return 0;
      },
    
    checkRound(input) {
        if (isNaN(input))
            throw new Error(ERROR_ROUND_COUNT);
        return 0;
    },
  };
  
  export default validation;