
import { ERRORS, RULES } from "../constants/index.js";
import { throwError } from "../utils/index.js";

class Validate {
    
    validateCarName(input) {
        const names = this.removeBlankSplit(input);
        this.checkIndexBlank(names);
        this.checkLength(names);
        this.checkDuplication(names);
        this.checkNameLength(names);
    }
    
    removeBlankSplit(input){
        const inputs = input.replace(/\s/g, '');
        const names= inputs.split(',');
        return names;
    }
    
    checkLength(arr){
        const condition = (arr.length ===1);
        throwError(condition,ERRORS.ONLYONE);
    }

    checkIndexBlank(arr){
        const condition = arr.indexOf("") !== -1;
        throwError(condition,ERRORS.BLANK);

    }

    checkDuplication(array){
        const set = new Set(array);
        const condition = (set.size != array.length);
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

