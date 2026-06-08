const API_URL = "https://script.google.com/macros/s/AKfycbyuo9zLjk_WlEfzThVrixK-a2VogAeGyIEkifHdqtO8qCZWg_hmuQkMcPjDbOGQ1aBE/exec";

window.subjectData = [];

function showSection(sectionId) {
document.getElementById("syllabus").style.display = "none";
document.getElementById("project").style.display = "none";
document.getElementById(sectionId).style.display = "block";
}

async function loadData() {
try {
const response = await fetch(API_URL);
const data = await response.json();

    window.subjectData = data;

    console.log("Loaded:", data);
} catch (error) {
    console.error(error);
}

}

function findSubject(subjectName) {
return window.subjectData.find(item =>
String(item.subject).trim().toUpperCase() ===
String(subjectName).trim().toUpperCase()
);
}

function openSubject(subject) {

const item = findSubject(subject);

if (!item) {
    alert("Subject not found");
    return;
}

localStorage.setItem(
    "selectedSubject",
    JSON.stringify(item)
);

window.location.href = "subject.html";

}

function openProject(subject) {

const item = findSubject(subject);

if (!item) {
    alert("Project not found");
    return;
}

localStorage.setItem(
    "selectedProject",
    JSON.stringify(item)
);

window.location.href = "project.html";

}

loadData();
