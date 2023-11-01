async function inputTryRacing(tryRacing) {
    if(isNaN(tryRacing)) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    
    return tryRacing;
}

export default inputTryRacing;