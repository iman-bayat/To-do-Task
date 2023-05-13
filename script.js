var btn = document.getElementById("mybtn"); 
var inputtext = document.getElementById("task");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");

document.addEventListener('contextmenu', event => event.preventDefault());

btn.addEventListener("click"  , afterclick);
inputtext.addEventListener("keypress" , afterenter);


function inputLength(){
    return inputtext.value.length
}


function addinlist(){
    var li = document.createElement("li");
    var del = document.createElement("a");
    var done = document.createElement("a");
    var edit = document.createElement("a");
    var para = document.createElement("p");
    done.classList.add("mybtns");
    edit.classList.add("mybtns");
    del.classList.add("mybtns");
    done.innerHTML = "<i class='fa fa-check'></i>"

    del.innerHTML = "<i class='fa fa-trash'></i>";
    edit.innerHTML = "<i class='fa fa-pencil'></i>" ; 
    para.innerHTML = inputtext.value;

    li.appendChild(para);
    li.appendChild(done);
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);
    inputtext.value="";
    done.style.color ="green";
    del.style.color = "red";
    done.addEventListener("click",dotask)
    function dotask() {
        li.classList.toggle("done");

    }
    
   
    edit.addEventListener("click" , editaitem);
    function editaitem() {
        inputtext.value = para.innerHTML ;
        li.classList.add("delete");


    }  


    del.addEventListener("click" , deleteitem);
    function deleteitem() {
        li.classList.add("delete");

    }   
    


}

function afterclick() {
    if (inputLength() > 0 ) {
        addinlist();
       
    }
    
}
 
function afterenter(event) {
    
    if (inputLength() > 0 && event.which === 13 ) {
        addinlist();
      
    }
    
}

// show label

let time = new Date();
let hour = time.getHours();
var label = document.getElementById("label");


if (hour >= 5 && hour < 12) {
    label.innerHTML ="Good morning";
} else if (hour >= 12 && hour < 18) {
    label.innerHTML ="Good afternoon";

} else {
  label.innerHTML="Good evening";
}

$(function() {
    $("ul").sortable();
  });