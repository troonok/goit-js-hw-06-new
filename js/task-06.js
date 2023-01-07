const trueInputEl = document.querySelector("#validation-input");
const lengthValue = document.querySelector('input[data-length="6"]');

trueInputEl.addEventListener('blur', (event)=>{
   
const value = event.target.value;
if(value.length === Number(lengthValue.dataset.length)){
    verificationClass('invalid','valid')
}
 else{
    verificationClass('valid', 'invalid')
}
function verificationClass(from,to) {
    trueInputEl.classList.remove(from)
    trueInputEl.classList.add(to)
}   
})
