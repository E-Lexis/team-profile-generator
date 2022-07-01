const addManager = function(manager) {
    return `
    <div class="col">
        <div class="card border border-primary">
            <div class="card-header bg-primary">
                <h3>${manager.name}</h3>
                <i class="fa-solid fa-clipboard-list"></i><h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>    
    </div>`
}

const addEngineer = function(engineer) {
    return `
    <div class="col">
        <div class="card border border-primary">
            <div class="card-header bg-primary">
                <h3>${engineer.name}</h3>
                <i class="fa-solid fa-microchip"></i><h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>    
    </div>`
}

const addIntern = function(intern) {
    return `
    <div class="col">
        <div class="card border border-primary">
            <div class="card-header bg-primary">
                <h3>${intern.name}</h3>
                <i class="fa-solid fa-graduation-cap"></i><h4>Intern</h4>
            </div>

            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Office Number: ${intern.school}</p>
            </div>
        </div>    
    </div>`
}

function pageTemplate(teamData) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/357fb4e1b4.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div class="justify-content-center>
            ${teamData}
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  `;
}

createCards = (teamArray) => {

    employeeCards = []; 

    for (let i = 0; i < teamArray.length; i++) {

        const role = teamArray[i].getRole(); 

        if (role === 'Manager') {
            const managerCard = addManager(teamArray[i]);

            employeeCards.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = addEngineer(teamArray[i]);

            employeeCards.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = addIntern(teamArray[i]);

            employeeCards.push(internCard);
        }
        
    }

    const teamProfile = employeeCards.join('')

    return pageTemplate(teamProfile);
}

module.exports = createCards;
