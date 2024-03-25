//object n array ,types and interfaces
type clothtypes={
    name:string,
    made_in:string,
    clothprice:number,
    Offer:boolean,
    offer_list:string[],
    shopadress:adresstype,
};
    interface adresstype{
    area:string,
    city:string,
    shopNo:number,
    market_name:string,    
    };
    let myshope:clothtypes = {
     name:"umaimacloth",
     made_in:"pakistn",
     clothprice:1200,
     Offer:true,
     offer_list:["30% off shopping","discount"],
    
     shopadress:{
     area:"gulshan",  
     city: "karachi",  
     shopNo:765,
     market_name:"tariq road",
     }
    };
    console.log(myshope.shopadress);
    console.log(myshope.offer_list);
    console.log(myshope);

