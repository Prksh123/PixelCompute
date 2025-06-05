let content = document.querySelector(".content");
let input = document.getElementById("input");
let inputBox = document.querySelector(".inputBox");
let taskList = document.querySelector(".taskList");
let count = true;

const addNote = () => {
    if(!input.value) return;
    console.log(input.value)

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(input.value);
    localStorage.setItem("notes",JSON.stringify(notes));

    renderTasks();
}

const renderTasks = () => {
     taskList.innerHTML = "";
     taskList.style.display = "flex";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note,index) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let btn = document.createElement("button");

        p.innerText = note;
        btn.innerHTML = `<span>&#10006;</span>`;
        btn.classList.add("cross");
        btn.onclick = () => deleteTask(index);
        div.appendChild(btn);
        div.appendChild(p);
        p.style.cssText = "margin-top : 10px"
        div.classList.add("noteList");
        if(index % 2 == 0){
            div.style.cssText = "background-color :rgb(162, 208, 230)";
        }
        else{
            div.style.cssText = "background-color : white";
        }
        taskList.appendChild(div);
        // input.style.display = "none";
    })
    input.value = "";
}

const deleteTask = (index) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderTasks();
}

renderTasks();