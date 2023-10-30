import NAME_ERROR from '../constants/ErrorMessage.js';

export const InputValid = (name)=>{
  let nameArray = name.split(",");

  //1.중복된 자동차 이름 기입시
  let nameSet = new Set(nameArray);
  if ( nameArray.length !== nameSet.length ) {
      throw new Error( NAME_ERROR.SAME_CAR_NAME_ERROR );
  }

  //2.자동차 이름 길이가 6자 이상일 시
  for ( let i = 0; i < nameArray.length; i++ ) {
    if ( nameArray[i].length > 5 ) {
        throw new Error( NAME_ERROR.LENGTH_LESS_ERROR );
    }
}

  //3.자동차 이름이 쉼표로 구분되지 않을 경우(== 이름이 1개일 경우)
  if ( !name.includes(',') ) {
    throw new Error( NAME_ERROR.INPUT_ONE_CAR_ERROR );
}
    
};

