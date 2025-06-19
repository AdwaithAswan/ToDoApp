// -- Login Page --
const userName=document.getElementById("userName");
const password=document.getElementById("password");

function info(){
    if(userName === '' || password === ''){
        alert("Enter info to proceed")
    }
    else{
        window.location.href = "homePage.html";
    }
}
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "files/eye-open.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "files/eye-closed.png";
    }
}

// function saveInfo(){
    
// }

// -- Main Page --
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

