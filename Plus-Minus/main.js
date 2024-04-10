function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    for(let n = 0; n < arr.length; n++){
        if(arr[n] > 0){
            pos++;
        }
        else if(arr[n] < 0){
            neg++;
        }
        else{
            zer++;
        }
    }
    
    pos = pos / arr.length;
    neg = neg / arr.length;
    zer = zer / arr.length;
    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zer.toFixed(6))
}
