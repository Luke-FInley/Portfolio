
const projects = [
    {name: "SPLAT", body: "Thumbnails/Splat.png", url: "project1.html", ID: "project1ID"},
    {name: "Atom's Beta Test", body: "Thumbnails/Atom.png", url: "project2.html", ID: "project2ID"},
    {name: "Home Invasion", body: "Thumbnails/HomeInvasion.png", url: "project3.html", ID: "project3ID"},
    {name: "Running Late", body: "Thumbnails/RunningLate.png", url: "project4.html", ID: "project4ID"},
    {name: "Steamore", body: "Thumbnails/Steamore.png", url: "project5.html", ID: "project5ID"},
    {name: "Final Showdown 4", body: "Thumbnails/FinalShowdown.png", url: "project6.html", ID: "project6ID"},

];

let i = 0;
let len = projects.length;

const parentDiv = document.getElementById("primaryParent");

for (; i < len; ) {

    let projectContainer = document.createElement("div");
    let projectTitle = document.createElement("div");
    let projectBody = document.createElement("img");

    projectContainer.classList.add('project-container');
    projectTitle.classList.add('project-title');
    projectBody.classList.add('project-body');

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectBody);

    if(parentDiv != null){
        parentDiv.appendChild(projectContainer);
    }

    projectTitle.innerHTML = projects[i].name;
    projectBody.src = projects[i].body;

    projectContainer.id = projects[i].ID;

    if(parentDiv != null){
        document.getElementById(projects[i].ID).addEventListener("click", goToProject);
    }

    i++;
}

function goToProject() {

    let target = document.getElementById(event.target.parentElement.id);

    let targetID = target.id;
    
    let targetString = String(targetID);

    let openWindow = targetString.replace("ID", ".html");

    window.location.href = openWindow;
}

document.getElementById("portfolio").addEventListener("click", goToPortfolio);
function goToPortfolio() {
    window.location.href = "portfolio.html";
}

document.getElementById("resume").addEventListener("click", goToResume);
function goToResume() {
    window.location.href = "resume.html";
}

document.getElementById("name").addEventListener("click", goToName);
function goToName() {
    window.location.href = "index.html";
}

document.getElementById("contactMeNav").addEventListener("click", goToContactMe);
function goToContactMe() {
    window.location.href = "ContactMe.html";
}

function goToLinkedin() {
    window.open("https://www.linkedin.com/in/luke-finley/");
}
function resumeNav() {
    window.open("https://docs.google.com/document/d/1E1ebKMl93lr6hNOr-qxnOSpy_4qvv32xpj9boQy6kiY/edit?usp=sharing");
}

function copyPhoneNumber() {
    navigator.clipboard.writeText("972-832-7822");
    alert("Successfully Copied 972-832-7822");
}
function copyEmail() {
    navigator.clipboard.writeText("luke.finley422@gmail.com");
    alert("Successfully Copied luke.finley422@gmail.com");
}
