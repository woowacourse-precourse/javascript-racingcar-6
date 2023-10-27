
import { ERRORS, RULES } from "../constants/index.js";
import { throwError } from "../utils/index.js";

class Validate {
    
    validateCarName(input) {
        const names = this.removeBlankSplit(input);
        this.checkDuplication(names);
        this.checkNameLength(names);
    }

    removeBlankSplit(input){
        const inputs = input.replace(/\s/g, '');
        const names= inputs.split(',');
        return names;
    }

    checkDuplication(array){
        const set = new Set(array);
        const condition = set.size != array.length
        throwError(condition,ERRORS.DUPLICATION);
    }

    checkNameLength(array){
        array.forEach(value => {
            throwError(value.length > RULES.MAX_STRING, ERRORS.NAME);
        })
    }
    

    validateTryMoveCount(count) {
        const countTrim = count.trim();
        const condition = !/^[1-9]\d*$/.test(countTrim);
        throwError(condition, ERRORS.TRY);
    }
}

export default Validate;

