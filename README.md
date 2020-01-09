# TPG
Team Profile Generator

## What is it and how does it work?
Built a software engineering team generator command line application. The application will prompt the user for information about the employee and then information about the team members. The user can input any number of team members, and they may be a mix of manager, engineers and interns. This assignment also has unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

For example:
If you select "intern" you will need to fill out
* name
* id
* email
* school

If you select "manager" you will need to fill out
* name
* id
* email
* offce number

If you select "engineer" you will need to fill out
* name
* id
* email
* github

## What is this application using?
NPM module jest
NPM module inquirer
javascript
node.js
google font
font awesome

## Directory set up

```
lib/           // classes and helper code
    Employee.js
    Engineer.js
    Intern.js
    Manager.js
output/        // rendered output
    //html will show up here once the user is done creating team profile
templates/     // HTML template(s) 
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
.gitignore
package-lock.json
package.json
pseudo.txt // written my pseudo code
hw details/           // personal reference to hw requirements
```

# visual example of functionality

TPG Application
![demo](/gif/TPG.gif)

TPG tests
![demo](/gif/TPGtestunit.gif)





