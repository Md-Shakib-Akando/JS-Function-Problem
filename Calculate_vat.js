function calculateVAT( price ) {
    if(typeof price!== 'number' || price<0)
    {
        return "Invalid";
    }

    const Total_vat= price*0.075;

    return Total_vat;
}

let numbr="fool";
const rst= calculateVAT(numbr);
console.log(rst);
