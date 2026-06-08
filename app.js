const API_URL =
"https://script.google.com/macros/s/AKfycbyuo9zLjk_WlEfzThVrixK-a2VogAeGyIEkifHdqtO8qCZWg_hmuQkMcPjDbOGQ1aBE/exec";

window.subjectData = [];

function showSection(sectionId){

```
document.getElementById("syllabus").style.display = "none";
document.getElementById("project").style.display = "none";

document.getElementById(sectionId).style.display = "block";
```

}

async function loadData(){

```
try{

    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error(
            "HTTP Error: " + response.status
        );
    }

    const data = await response.json();

    window.subjectData = data;

    console.log("Data Loaded:", data);

}catch(error){

    console.error("Load Error:", error);

    window.subjectData = [];

}
```

}

function openSubject(subject){

```
if(!window.subjectData.length){
    alert("Data is still loading.");
    return;
}

const item = window.subjectData.find(
    x =>
    String(x.subject).toUpperCase() ===
    String(subject).toUpperCase()
);

if(!item){
    alert("No data found.");
    return;
}

localStorage.setItem(
    "selectedSubject",
    JSON.stringify(item)
);

window.location.href = "subject.html";
```

}

function openProject(subject){

```
if(!window.subjectData.length){
    alert("Data is still loading.");
    return;
}

const item = window.subjectData.find(
    x =>
    String(x.subject).toUpperCase() ===
    String(subject).toUpperCase()
);

if(!item){
    alert("No data found.");
    return;
}

localStorage.setItem(
    "selectedProject",
    JSON.stringify(item)
);

window.location.href = "project.html";
```

}

loadData();
