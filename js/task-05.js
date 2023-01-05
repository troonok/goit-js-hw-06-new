const activeInput = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

activeInput.addEventListener('input', (event)=>{
  const value = event.target.value.trim();
  spanName.textContent = value ? value : "Anonymous"
});


// function onInputChange (event){
//     if(event.currentTarget.value == " " || event.currentTarget.value=="" ){
//         spanName.textContent = "Anonymous" 
//     }
//     else{
//       spanName.textContent = event.currentTarget.value;  
//     }
// };
