function  validContact( contact ) {
    if(typeof contact!=='string'){
        return "Invalid";
    }

    for(const val of  contact){
        if(val===' '){
            return false;
        }
    }

    if( contact.length===11 && contact[0]==='0' && contact[1]==='1'){
        return true;
       
    }

    
    else{
        return false;
    }
    
}


const result1 = validContact('01712345678');
console.log(result1); // Output: true

// Invalid contact number (contains space)
const result2 = validContact('01712 345678');
console.log(result2); // Output: false

// Invalid contact number (wrong length)
const result3 = validContact('0123456789');
console.log(result3); // Output: false

// Invalid contact number (input not a string)
const result4 = validContact(1712345678);
console.log(result4); // Output: "Invalid"