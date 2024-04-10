function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let counter = 0;
    for(let i = 0; i <= candles.length; i++){
        if(max === candles[i]){
            counter++;
        }
    }
    return counter;
}
