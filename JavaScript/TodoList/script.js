let main = document.querySelector(".container");
let task = document.getElementById("task");
let date = document.getElementById("date");
let time = document.getElementById("time");
let dueList = document.getElementById("dueList");
let upList = document.getElementById("upList");
let srchBox = document.getElementById("search");

const addTask = () => {
 
   let taskText = task.value.trim();
   let dateText = date.value;
   let timeText = time.value;

   if (!taskText || !dateText || !timeText) {
    showAlert("Please fill in all fields");
    return;
  }

  let taskobj = {
    task : taskText,
    date : dateText,
    time : timeText
  }

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(taskobj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
   renderTask();
}

const renderTask = () => {
    dueList.innerHTML = "";
    upList.innerHTML = "";
    let srch = srchBox.value.toLowerCase();
   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
   tasks.forEach((t,index)=>{
    if (!t.task.toLowerCase().includes(srch)) return;
   
   let textGrp = document.createElement("div");
   let btnGrp = document.createElement("div");
   let today = new Date().toISOString().split("T")[0];
   let div = document.createElement("div");
   let li = document.createElement("li");
   let h = document.createElement("h3");
   
   if(t.date === today){
    h.innerText = "Today";
   }
   else{
    h.innerText = t.date;
   }
   
   let para1 = document.createElement("p");
   para1.innerHTML = `${t.task} : <strong>${t.time}</strong>`;

   let edt = document.createElement("button");
   edt.innerText = "Edit";
   edt.classList.add("edit");
   edt.onclick = () => editTask(index); 

   let Dlt = document.createElement("button");
   Dlt.innerText = "Delete";
   Dlt.classList.add("delete");

   Dlt.onclick = () => deleteTask(index);
   btnGrp.classList.add("libtns");
   textGrp.appendChild(h);
   textGrp.appendChild(para1);
   btnGrp.appendChild(edt);
   btnGrp.appendChild(Dlt);
   
   div.appendChild(textGrp);
   div.appendChild(btnGrp);
   li.appendChild(div);
   if(t.date <= today){
    dueList.appendChild(li);
   }
   else{
    upList.appendChild(li);
   }
   
})
}

const deleteTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"))||[];
    console.log("asigali");
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTask();
}

const editTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let t = tasks[index];

    // Fill the form fields with the current task data
    task.value = t.task;
    date.value = t.date;
    time.value = t.time;

    // Set the index for later use when updating the task
    editIndex = index;

    // Hide Add Task button and show Update Task button
    document.querySelector(".btn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline-block";
};

// Update the task after editing
const updateTask = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Update the task at the editIndex with the new values
    tasks[editIndex] = {
        task: task.value.trim(),
        date: date.value,
        time: time.value
    };

    // Save the updated tasks list to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Reset form and buttons
    task.value = "";
    date.value = "";
    time.value = "";
    editIndex = -1;
    document.querySelector(".btn").style.display = "inline-block";
    document.getElementById("updateBtn").style.display = "none";

    // Re-render the tasks
    renderTask();
};


const showAlert = (message) => {
    const alertBox = document.getElementById("alert");
    const alertMsg = document.getElementById("alert-message");
  
    alertMsg.innerText = message;
    alertBox.style.display = "flex";
    main.classList.add("blur");
  };

  const closeAlert = () => {
    const alertBox = document.getElementById("alert");
    alertBox.style.display = "none";
    main.classList.remove("blur");
  };

srchBox.addEventListener("input", renderTask);

renderTask();