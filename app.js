const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const html = require("./templates/htmltemp");


const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = "";

//this calls all the functions in one in order
async function main() {
     try {
          await prompt()
          // for i to teamArray.length  => 

          for (let i = 0; i < teamArray.length; i++) {
               //template literal=``
               teamstr = teamstr + generateCard(teamArray[i]);
          }

          // console.log(teamstr)

          //call generate function to generate the html template literal
          generateHTML(teamstr)


     } catch (err) {
          return console.log(err);
     }

};

async function prompt() {
     let responseDone = "";
     // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
     do {
          try {
               response = await inquirer.prompt([

                    {
                         type: "input",
                         name: "name",
                         message: "What is the employee's name?: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Enter the employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Enter the employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "What what is the employee's role:",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);

               let response2 = ""
               // switch statement

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's github username?:",
                    }, ]);
                    //store the object and push
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What school is the employee attending?:",
                    }, ]);
                    //store the object and push
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's office number?:",
                    }, ]);
                    //store the object and push
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    teamArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)
          //need to prompt do you want to continue

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          // console.log(responseDone.choices);
          //the while parameter is saying continue running the code if the user selects "yes"
     } while (responseDone.finish === "Yes");
}


function generateHTML(teamstr) {
     const html = `<!DOCTYPE html>
     <html lang="en">
     
     <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TPG</title>
    <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
    <style>
        body {
            background: url(https://cdn.stocksnap.io/img-thumbs/960w/2QAM3GUJKV.jpg) center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 0%;
            height: 100vh;
        }

        .header {
            background-color: rgb(245, 247, 155);
            border: solid black;
            text-align: center;
            font-size: 30px;
            font-family: 'Bungee Shade', cursive;  
        }

        .container-body {
            display: flex;
            justify-content: space-evenly;
        }

        .card {
            background-color:rgb(255, 255, 255);
            margin-top: 4%;
            border: solid black;
            font-size: x-large;
        }
        .card-header{
            margin: 10%;
        }
        .card-body{
            margin: 5%;
        }
    </style>
    
</head>
     
     <body>
    <div class=header>
        <h1>My Team</h1>
    </div>
    <div class="container-body">

          ${teamstr} 

          </div>
     <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
     </body>
     
     </html>`

     writeFileAsync("./output/index.html", html)
}


function generateCard(arr) {
     return `<div class="card">
 <div class="card-header">
     <h2>${arr.name}</h2>  
     <h2><i class="far fa-user"></i> ${arr.title}</h2>
     <hr>
 </div>
 <div class="card-body">
     <ul>
         <li>ID: ${arr.id}</li>
         <li>Email: ${arr.email}</li>
         <li>Office Number: ${arr.officeNum} </li>
         <li>Github: ${arr.github} </li>
         <li>School: ${arr.school} </li>
     </ul>
 </div>
 </div>`
}

//call function to run application on the server
main();


// module.exports = teamstr
//This is what teamstr = teamstr + generateCard(teamArray[i]) is doing
// `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>
//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`

//  `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>
//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`

//  `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>
//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`