import NAME_ERROR from "../constants/ErrorMsg";

//입력받은 자동차의 이름 유효성 검사
export const isValidInput = (name) => {
    //1. NULL값인 경우
    if ( name === null ) {
        throw new Error( NAME_ERROR.NULL_ERROR );
    }

    //2. ','로 구분되있지 않을 경우
    if ( !name.inculdes(',') ) {
        throw new Error( NAME_ERROR.ONE_NAME_ERROR );
    }

    const nameArray = name.split(',');
    
    for ( let i = 0; i < nameArray.length; i++ ) {
        //3. 5글자 이상일 경우
        if ( nameArray[i].length > 5 ) {
            throw new Error( NAME_ERROR.LENGTH_ERROR );
        }

        //4. 잘못된 쉼표의 사용
        if ( nameArray[i] === "" || nameArray[i] === " " ) {
            throw new Error( NAME_ERROR.COMMA_ERROR );
        }
    }
        
    //5. 중복된 이름이 있을 경우
    let nameSet = new Set(nameArray);
    if ( nameArray.length !== nameSet.length ) {
        throw new Error( NAME_ERROR.SAME_NAME_ERROR );
    }

};

//입력받은 시도횟수의 유효성 검사
export const isValidCount = (count) => {
    //정수가 아닐 경우
    if( !Number.isInteger(count) ) {
        throw new Error( NAME_ERROR.COUNT_ERROR );
    }

    //NULL값인 경우
    if ( count === NULL ) {
        throw new Error( NAME_ERROR.NULL_ERROR );
    }
};