function calculateVAT( price ) {
    if(typeof price!== 'number' || price<0)
    {
        return "Invalid";
    }

    const Total_vat= price*0.075;

    return Total_vat;
}





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