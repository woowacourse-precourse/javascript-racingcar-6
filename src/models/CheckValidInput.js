import NAME_ERROR from "../constants/ErrorMsg";

//입력받은 자동차의 이름 유효성 검사
export const checkValidInput = (inputName) => {
    //1. NULL값인 경우
    if ( inputName === null ) {
        throw new Error( NAME_ERROR.NULL_ERROR );
    }

    //2. ','로 구분되있지 않을 경우
    if ( !inputName.includes(',') ) {
        throw new Error( NAME_ERROR.ONE_NAME_ERROR );
    }

    const name = inputName.split(',');

    //3. 한개의 이름만 입력된 경우
    if( name.length === 1 ) {
        throw new Error( NAME_ERROR.ONE_NAME_ERROR );
    }
    
    name.forEach((n) => {
        //4. 5글자를 넘을 경우
        if (n.length > 5) {
          throw new Error(NAME_ERROR.LENGTH_ERROR);
        }

        //5. 잘못된 쉼표 사용을 한 경우
        if (n === '' || n === ' ') {
          throw new Error(NAME_ERROR.COMMA_ERROR);
        }
      });
      
        
    //6. 중복된 이름이 있을 경우
    let nameSet = new Set(name);
    if ( name.length !== nameSet.size ) {
        throw new Error( NAME_ERROR.SAME_NAME_ERROR );
    }
    return name;
};

//입력받은 시도횟수의 유효성 검사
export const checkValidCount = (count) => {
    if (count === null) {
        throw new Error(NAME_ERROR.NULL_ERROR);
    }

    if (Number.isNaN(count)) {
        throw new Error(NAME_ERROR.COUNT_ERROR);
    }

    return count;
};