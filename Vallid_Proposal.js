function  validProposal( person1 , person2 ) {
    if(typeof person1!=='object' || typeof person2!=='object'){
        return "Invalid";
    }

    if(!person1.name || !person1.gender || typeof person1.age!=='number' || !person2.name || !person2.gender || typeof person2.age!=='number'){
        return "Invalid";
    }
    if(person1.gender === person2.gender || Math.abs(person1.age - person2.age )>7){
        return false;
    }
    

    return true;
}


console.log(validProposal({ name: "Rahul", gender: "male", age: 28 }, { name: "Joya", gender: "female", age: 21 })); // true
console.log(validProposal({ name: "milon", gender: "male", age: 20 }, { name: "sumi", gender: "female", age: 25 })); // true
console.log(validProposal({ name: "shuvo", gender: "male", age: 20 }, { name: "joy", gender: "male", age: 25 })); // false
console.log(validProposal({ name: "toya", gender: "female", age: 20 }, { name: "kader", gender: "male", age: 25 })); // true
console.log(validProposal({ name: "toya", gender: "female", age: 24 }, { name: "bjoy", gender: "male", age: 32 })); // false
console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 })); // "Invalid"
console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan")); // "Invalid"