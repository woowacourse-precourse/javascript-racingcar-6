import { ERROR_CAR_NAME, ERROR_ROUND_COUNT } from './Constant.js';

const validation = {
    checkCarName(input) {
        input.forEach((carName) => {
            if (carName.length > 5 || carName.length === 0)
              throw new Error(ERROR_CAR_NAME);
        });
        if (new Set(inputArr).size !== inputArr.length)
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