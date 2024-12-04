
const form =document.querySelector("form");
const input =document.querySelector("input");
const ul = document.querySelector("ul");
const container =document.querySelector("#container");
const btn = document.querySelector("#removeall")






const save =  (e)=>{
//  console.log("form submitted!!!");
 e.preventDefault()
//  console.log(input.value);
 
let li =document.createElement("li");
li.innerText = input.value
li.className ="list-group-item rounded-0"
let  dltbtn =document.createElement("button")
dltbtn.innerText="delete";
dltbtn.className = "btn btn-sm btn-danger float-end rounded-0"
li.appendChild(dltbtn);
// console.log(dltbtn);

ul.appendChild(li)
// console.log(li);
form. reset()


 
}



form.addEventListener("submit",save);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are you sure")) {
      ul.removeChild(li);
    }
  }
};
ul.addEventListener("click", removeTodo);


 
const removeTodo1 = () => {
      console.log("work")
    }
  

btn.addEventListener("click", removeTodo1)





