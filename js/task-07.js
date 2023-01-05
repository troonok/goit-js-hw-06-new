const rangeMachine = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

rangeMachine.addEventListener('input', (event)=>{
changeText.style.fontSize = event.currentTarget.value +"px";
})


