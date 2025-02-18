function  calculateSleepTime( times ) {
    if(Array.isArray===false){
        return "Invalid";
    }

    for(const time of times){
        if(typeof time!=='number'){
            return "Invalid";
        }
    }
    let total_second=0;
    for(const time of times){
        total_second=total_second+time;
    }

    let hours= parseInt(total_second / 3600);
    let mint=parseInt((total_second % 3600) / 60);
    let sec=parseInt(total_second % 60);

    return { hour: hours, minute: mint, second: sec };
}



console.log(calculateSleepTime([1000, 499, 519, 300])); // Output: { hour: 0, minute: 37, second: 58 }
console.log(calculateSleepTime([3600, 3600, 3600]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime([1000, 2000, 725]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime([100, 3800]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime([]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime([100, 3800, "90" ]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime([5600]));    // Output: { hour: 3, minute: 0, second: 0 }
console.log(calculateSleepTime("not an array"));        // Output: "Invalid"
console.log(calculateSleepTime([1000, "invalid", 519]));// Output: "Invalid"
