let remove = document.getElementById("remove"); //button remove
let run = document.getElementById("run");  //button output
let code = document.getElementById("code"); //button retune to html
let text = document.getElementById("text"); //textarea
let output = document.getElementById("output"); //result
let btn = document.getElementById("button");
let output_title = document.getElementById("output_title");// output title

run.onclick = ()=>{
    output.innerHTML = text.value;
    output.style.display="block";
    output_title.style.display="block";
    code.style.display="block";
    text.style.display="none";
    btn.style.display="none";
}
remove.onclick =()=>{
    text.value = " ";
}
code.onclick = ()=>{
    text.style.display="block";
    output.style.display="none";
    output_title.style.display="none";
    code.style.display="none";
    btn.style.display="block";
    
}

    
