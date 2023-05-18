"use strict"
// Object.assign(target,source);
// This method copies all properties of source object and paste them on target 
let a={a:"23",b:"56",c:"89"}
let b={x:"45",y:"99",c:"45"}

Object.assign(a,b);

console.log(a);


// Object.keys(object);
// Returns an array of keys 
let C={
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    e:"5"
}

let keysOfC=Object.keys(C);
console.log(keysOfC);

// keysOfC.forEach((key)=>{
//     console.log(key);
// })


// Object.values(object)
// Returns array of values
let D={
    a:"adc",
    b:"geh",
    c:"jhi"
}

const valuesOfD=Object.values(D);
console.log(valuesOfD);

valuesOfD.forEach((value)=>{
    console.log(value);
})


// Object.entries(Object)
// Return an array of propeties in the [key,value] form i.e,[[key,value],[key,value],[key,value]]
let E={
    a:"hhh",
    b:"hig",
    c:"hdg"
}

const entiesOfE=Object.entries(E);
console.log(entiesOfE);

entiesOfE.forEach(array=>{
    const key=array[0];
    const value=array[1];
    console.log(key,value)
})


// Object.defineProperty(object,property,{value,configurable,enumerable,writable})
// Define property to given object 
let F={
    a:"Hhi",
    b:"Hjh"
}

Object.defineProperty(F,"c",{
    value:"ffdg" /* value you want to give to property */,
    configurable:true,/* if true,this property can not be deleted (default value is false) */
    enumerable:true,/*if true, the property can not be looped(default value is false)*/
    writable:false,/*if true, the property value  can be changed(default value is false)*/
})

// console.log(F);
// delete F.c;
// console.log(F)

// Object.keys(F).forEach((e)=>console.log(e))

// F.c="dgdg";
// console.log(F.c)