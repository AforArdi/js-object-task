// Loop through an object and print the key-value pairs with their types
// let myObj = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Khulna',
//     isStudent: true
// }
// const keys = Object.keys(myObj);
// for (const key of keys){
//     console.log(key, "->", myObj[key], "Type: ", typeof myObj[key]);
// }

let myObj = {
    name: 'John Doe',
    age: 25,
    city: 'Khulna',
    isStudent: true
}
for (let key in myObj){
    console.log(key, "->", myObj[key], "Type: ", typeof myObj[key]);
}