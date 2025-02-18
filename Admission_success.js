function  willSuccess( marks ) {
    if(Array.isArray(marks)===false){
        return "Invalid";
    }

    let passCount=0;
    let failCount=0;

    for(const mark of marks){
        if(mark>=50){
            passCount++;
        }
        else{
            failCount++;
        }
    }

    if(passCount>failCount){
        return true;
    }
    else{
        return false;
    }
}

const result1 = willSuccess([55, 75, 41, 33, 0, 87, 91, 30]);
console.log(result1); // Output: false

const result2 = willSuccess([55, 75, 41, 33, 60, 87, 91, 30]);
console.log(result2); // Output: true

const result3 = willSuccess("Not an array");
console.log(result3); // Output: "Invalid"

const result4 = willSuccess("90");
console.log(result4);

const result5 = willSuccess(78);
console.log(result5);