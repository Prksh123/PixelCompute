let container = document.getElementsByClassName("container")[0];
let content = document.getElementsByClassName("content")[0];
let inputs = document.querySelectorAll("input");
let desc = document.getElementById("desc");
let form = document.getElementById("form");
let alert = document.getElementById("alertBox");

form.addEventListener("submit",(e) => {
     e.preventDefault();

     console.log(typeof desc.value);
     if(Array.from(inputs).some(val => val.value == "")){
      if(String(desc.value.trim()) == ""){
        alert.style.display = "flex";
        content.style.filter = "blur(8px)";
        console.log("asa");
        return;
      }
     }
     console.log("wow");
     let maindiv = document.createElement("div");
     let div1 = document.createElement("div");
     let div2 = document.createElement("div");
     
     
    let date1 = inputs[1].value;
    let date = new Date(date1);  
    const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",    
    month: "long",     
    day: "numeric", 
    year: "numeric"   
  });
  let time1 = inputs[2].value;  
  let [hours1, minutes1] = time1.split(':'); 
  
  let period1 = "AM";
  hours1 = parseInt(hours1, 10); 

  
  if (hours1 >= 12) {
    period1 = "PM";
    if (hours1 > 12) {
      hours1 -= 12; 
    }
  } else if (hours1 === 0) {
    hours1 = 12; 
  }

  let formattedSTime = `${hours1}:${minutes1} ${period1}`;

  let time2 = inputs[3].value; 
  let [hours2, minutes2] = time2.split(':'); 
  let period2 = "AM";
  hours2 = parseInt(hours2, 10); 

  
  if (hours2 >= 12) {
    period2 = "PM";
    if (hours2 > 12) {
      hours2 -= 12; 
    }
  } else if (hours2 === 0) {
    hours2 = 12; 
  }

  let formattedETime = `${hours2}:${minutes2} ${period2}`;

      
     div1.classList.add("showUp");
     div1.innerHTML = `<h2 style =" color : red ; font-family: Georgia, 'Times New Roman', Times, serif;">YOU ARE INVITED</h2>
                       <h3 style = " font-style: oblique">To join THE</h3>
                       <h2 style = "color : rgb(65, 64, 64);font-family: Georgia, 'Times New Roman', Times, serif;">${inputs[0].value}</h2>`;
    
    div2.classList.add("showDown");
    div2.innerHTML = `<p style = "color:red; font-weight : bolder">${formatted}</p>
                       <p>${formattedSTime} - ${formattedETime}</p>
                       <p style = "padding-top : 4px">${inputs[4].value}</p>
                       <p style = "padding-top : 4px">${desc.value}</p>`;
    maindiv.classList.add("show");
    maindiv.appendChild(div1);
    maindiv.appendChild(div2);
    container.appendChild(maindiv);
    content.style.display = "none";
    container.style.background = "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))";
})

const removeAlert = () => {
    alert.style.display = "none"; 
    content.style.filter = "none";
}
