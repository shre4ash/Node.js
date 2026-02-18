const { isUtf8 } = require("buffer");
const fs = require("fs");

//WRITING FILE

// VERY VERY important 

//sync
//fs.writeFileSync("./test.txt" , "Hi from the file.js");

// Async
// fs.writeFile("./test.txt", "Another hi" ,(err) => {});




// Reading file

//always exxpect callback
// const result = fs.readFileSync("./contacts.txt" , "utf-8"); // utf-8 is a standard encoding
// console.log(result)

// here it does not return anything
fs.readFile("./contacts" , "utf-8", (err , result) => {
    if(err){
        console.log("Error" , err);
    } else {
        console.log(result)
    }
});


//it does not override the files
// You should always give this in string 
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`)


fs.copyFile("./test.txt" , "./copy.text");
