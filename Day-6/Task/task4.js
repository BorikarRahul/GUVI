class uber {
    constructor(bfare, pM, costM){
        this.bfare = bfare;
        this.pM = pM;
        this.costM = costM;
    }

    calculatePrice(km, time){
        const fare = this.bfare + (time * this.pM) + (km * this.costM );
        return Math.round(fare * 100) / 100;
    }
}

const sum = new uber(5, 1, 2);
const distance = 10;
const time = 30;
const price = sum.calculatePrice(distance, time);
console.log(price);

