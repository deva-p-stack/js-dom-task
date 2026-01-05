import './style.css'

let btn = document.getElementById('btn');

btn.addEventListener("click",function(){
let name = document.querySelector('.name');
let job = document.querySelector('#job');

let container = document.querySelector('#container');
let fragement = document.createDocumentFragment();



let nameValue = name.value;
let jobValue = job.value;

let validate = false;


// olderrror name every time check it 
document.querySelectorAll(".error").forEach((error)  => error.remove());

if(nameValue === ""){
let errortag = document.createElement("p");
errortag.textContent="please enter your name"
errortag.className=" text-red-600 error"

// name is input tag name 
name.after(errortag);
validate = true;
}

if(jobValue === "")
{
  let errortag = document.createElement("p");
errortag.textContent="please enter your job"
errortag.className=" text-red-600 error"
// job  is input tag name 
job.after(errortag);
validate = true;
}

if(validate) 
  return;

let newdiv = document.createElement("div")
newdiv.className="flex flex-col p-3 bg-[#e5f7f3] rounded-lg gap-5 m-3";

let newh1 =document.createElement("h6")
newh1.textContent="Name: "+nameValue;
newh1.className="text-center"


let newh2 =document.createElement("h6")
newh2.textContent="Job role: "+jobValue;
newh2.className="text-center"

if(jobValue === "developer") {
    newh2.classList.add("bg-green-300");
}

  

let deletebtn = document.createElement("button")
deletebtn.className="px-3 py-2 bg-green-400 rounded-lg hover:cursor-pointer";
deletebtn.innerText="delete user"
deletebtn.addEventListener("click",function(){
deletebtn.parentElement.remove();
})



 newdiv.append(newh1);
  newdiv.append(newh2);
  newdiv.append(deletebtn);
  
fragement.append(newdiv);
container.append(fragement);

  name.value = "";
  job.value = "";
  
})













