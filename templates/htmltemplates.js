function generateMain() {

    let test = ` <div class="card">
    <div class="card-header">
        <h2>name</h2>
        <h2>title</h2>
    </div>
    <div class="card-body">
        <ul>
            <li>ID</li>
            <li>EMAIL</li>
            <li>TBD</li>
        </ul>
    </div>
</div>`;

    let mainHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>TPG</title>
    </head>
    
    <body>
        <div class=header>
            <h1>My Team</h1>
        </div>
        <div class="body">
        
        ` + test + `
          
        </div>
    </body>
    
    </html>`
    console.log(mainHTML)
}

generateMain()

function generateEngineer() {
    `<div class="card">
<div class="card-header">
    <h2>${name}</h2>
    <h2>${title}</h2>
</div>
<div class="card-body">
    <ul>
        <li>${id}</li>
        <li>${email}</li>
        <li>${github}</li>
    </ul>
</div>
</div>`
}

function generateIntern() {
    `<div class="card">
    <div class="card-header">
        <h2>${name}</h2>
        <h2>${title}</h2>
    </div>
    <div class="card-body">
        <ul>
            <li>${id}</li>
            <li>${email}</li>
            <li>${github}</li>
        </ul>
    </div>
    </div>`
}

function generateManager() {
    `<div class="card">
    <div class="card-header">
        <h2>${name}</h2>
        <h2>${title}</h2>
    </div>
    <div class="card-body">
        <ul>
            <li>${id}</li>
            <li>${email}</li>
            <li>${github}</li>
        </ul>
    </div>
    </div>`
}