const trueInputEl = document.querySelector("#validation-input");
const lengthValue = document.querySelector('input[data-length="6"]');

trueInputEl.addEventListener('blur', (event)=>{
const value = event.target.value;
if(value.length === Number(lengthValue.dataset.length)){
    trueInputEl.classList.remove("invalid");
    trueInputEl.classList.add("valid");
}
 else{
    trueInputEl.classList.remove("valid");
    trueInputEl.classList.add("invalid");
}
})

