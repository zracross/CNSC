const API_URL =
"https://script.google.com/macros/s/AKfycbyuo9zLjk_WlEfzThVrixK-a2VogAeGyIEkifHdqtO8qCZWg_hmuQkMcPjDbOGQ1aBE/exec";

function showSection(sectionId){

    document.getElementById("syllabus").style.display = "none";
    document.getElementById("project").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

async function loadData(){

    try{

        const response = await fetch(API_URL);
        const data = await response.json();

        window.subjectData = data;

        console.log("Data Loaded:", data);

    }catch(error){

        console.error(error);
        alert("Failed to load data.");

    }

}

function openSubject(subject){

    const item = window.subjectData.find(
        x => x.subject === subject
    );

    if(!item){
        alert("No data found.");
        return;
    }

    localStorage.setItem(
        "selectedSubject",
        JSON.stringify(item)
    );

    location.href = "subject.html";
}

function openProject(subject){

    const item = window.subjectData.find(
        x => x.subject === subject
    );

    if(!item){
        alert("No data found.");
        return;
    }

    localStorage.setItem(
        "selectedProject",
        JSON.stringify(item)
    );

    location.href = "project.html";
}

loadData();
