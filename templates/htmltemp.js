
const app = require("/Users/sarkw/TPG/app")

console.log(app.teamstr)


function generateHTML(teamstr) {
    return `<!DOCTYPE html>
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
        <div class="body">`

         + teamstr + 

        `</div>
    </body>
    
    </html>`
}


module.exports = generateHTML