import NAME_ERROR from "../constants/ErrorMsg";

//입력받은 자동차의 이름 유효성 검사
export const isValidInput = (name) => {
    let nameArray = name.split(',');

    //1. ','로 구분되있지 않을 경우
    if ( !name.inculdes(',') ) {
        throw new Error( NAME_ERROR.ONE_NAME_ERROR );
    }
    
    //2. 5글자 이상일 경우
    for ( let i = 0; i < nameArray.length; i++ ) {
        if ( nameArray[i].length > 5 ) {
            throw new Error( NAME_ERROR.LENGTH_ERROR );
        }
    }
        
    //3. 중복된 이름이 있을 경우
    let nameSet = new Set(nameArray);
    if ( nameArray.length !== nameSet.length ) {
        throw new Error( NAME_ERROR.SAME_NAME_ERROR );
    }

    //4. NULL값인 경우
    if ( name === null ) {
        throw new Error( NAME_ERROR.NULL_ERROR );
    }
};

