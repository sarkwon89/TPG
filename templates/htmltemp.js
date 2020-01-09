    const generateHTML = function (teamstr) {

        console.log("Inside gen html");
        return `<!DOCTYPE html>
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

    }


    const generateCard = function (arr) {
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


    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;