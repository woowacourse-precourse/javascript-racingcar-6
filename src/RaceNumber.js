class RaceNumber {
    constructor(number){
        this.number=parseInt(number);
        this.checkValid(this.number);
    }
    checkValid(number){
        if(!Number.isInteger(number) || number < 1 || number > 100){
            throw new Error("[ERROR] 횟수는 1 이상 100 이하의 자연수여야 합니다.");
        }
    }
}
export default RaceNumber;