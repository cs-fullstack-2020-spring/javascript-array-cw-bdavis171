//Exercise 1:

//Create the following array ['John','Paul','George','Pete']
let nameArray = ['John','Paul','George','Pete'];

//Console log only Pete's name
console.log(nameArray[nameArray.indexOf('Pete')]);

//Change Pete's name to 'Ringo'
nameArray.splice(nameArray.indexOf('Pete'),1,'Ringo');

//Console log the list
console.log(nameArray);

//Add the name 'Yoko' to the list
nameArray.push('Yoko');

//Console log the list
console.log(nameArray);

// //Exercise 2:

// //Make a program to ask the user for 4 ages
// //let ages = prompt("Enter in 4 ages, seperated by ',':");
// let agesArray = ages.split(',');

// //Console log the list
// console.log(agesArray);

// //Delete the third age
// agesArray.splice(2,1);

// //Change the second element(not index 2) to a different age
// agesArray.splice(1,1,'22');

// //Console log the list
// console.log(agesArray);

//Exercise 3:

//Create a program that asks the user to enter in four names. If they enter the name Kenn, ignore it and don't enter it in the array
userNames = prompt("Enter in four names, seperated by ','");
userArrays = userNames.split(',');

for (let i = 0; i<userArrays.length;i++) {
    if (userArrays[i] == 'Kenn') {
        userArrays.splice(i,1);
    }
}

//Console log the list
console.log(userArrays);
