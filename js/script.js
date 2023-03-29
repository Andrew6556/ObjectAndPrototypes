"use strict";

// ___________________1Item____________
let user = {
    name:"Andrey",
    am:undefined,
    age:null,
};

// const isPlainObject = value => value.constructor === Object;
// console.log(isPlainObject(user))

// ___________________2Item____________

let check_for_emptiness = (value) =>{
    return ((Object.entries(value).map(item => item[1] !== undefined && item[1] !== null)).includes(false) ?
            "Объект не Пуст":"Объект Пустой!"
    )
}
console.log(check_for_emptiness(user))
