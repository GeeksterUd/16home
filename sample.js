const textarea=document.getElementById("textarea");
const h1= document.getElementById("he")
function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value=localStorage.getItem("savedText");
}
textarea.addEventListener("input", saveToLocalStorage);

const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor ="black"
    h1.style.color="white"
    textarea.style.backgroundColor="lightgrey"
})

const btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    document.body.style.backgroundColor ="white"
    h1.style.color="black"
    textarea.style.backgroundColor="white"
})