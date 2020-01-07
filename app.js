const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")

const writeFileAsync = 

//async related to the await key.  You can only use await with async keyword.
async function prompt(){
    try{
         const inquirerRes = await inquirer.prompt([
              {
                   type: "input",
                   name: "managerName",
                   message: "What is your manager's name?: "
              },
              {
                   type: "input",
                   name: "id",
                   message: "Enter your ID: "
              },
              {
                   type: "input",
                   name: "managerEmail",
                   message: "Enter your email address: "
              }
         ]);

         console.log(inquirerRes.email)
    }
    catch(err){
    }
}


//this calls all the functions in one 
async function main(){
    prompt()
};
main();

