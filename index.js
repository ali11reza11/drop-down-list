function show(word){
    document.querySelector(".textbox").value = word;
}

let dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", ()=>{
    dropdown.classList.toggle("active")
})