"use strict";


let user = {
    name:"Andrey",
    age:19,
}
const isPlainObject = value => value.constructor === Object;
console.log(isPlainObject(user))