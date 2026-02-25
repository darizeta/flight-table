const dataNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const datehour = document.getElementById('datehour')

const setDate = () => {
  //con Date() podremos obtener la fecha actual. palabra reservada.
  const date = new Date();

  dataNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
  dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
  dateMonth.textContent = date.toLocaleString('es', { month: 'short'});
  dateYear.textContent = date.toLocaleString('es', {year:'numeric'});
  datehour.textContent = date.toLocaleString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  /* toLocalString() es un metodo que devuelve una cadena con la representación
  al idioma de la fecha especificada */
}
setDate();

let counter =0;
const input = document.querySelector('input[type="text"]');
const numeric = document.querySelector('input[type="number"]');
const time = document.querySelector('input[type="time"]');

userInput.addEventListener('submit',(e)=>{
  e.preventDefault();
  addTask();

});


let addTask = () =>{
  counter++

  let newValue = input.value;
  let newNumber = numeric.value;
  let newTime = time.value;
  

  if (!newValue || !newNumber || !newTime ) {
    alert("Por favor completa todos los campos");
    return;
  }
  
  let isAvianca = newValue.toLowerCase() === "avianca";
  let isLatam = newValue.toLowerCase() === "latam";
  
  let valueClass = isAvianca ? 'avianca' : isLatam ? 'latam' : '';
  
  

  list.innerHTML += ` 
          <div class="taskItem" id="id${counter}">
            <div class="flights"><label class="${valueClass}">${newValue}</label></div>
            <div class="flights"><label class="${valueClass}">${newNumber}</label></div>
            <div class="flights"><label>${newTime}</label></div>
            <button type="button" class="delete" onclick="removeTask('id${counter}')">-</button>
          </div>`;
          input.value = '';
          numeric.value = '';
          time.value = '';
          
        
};
function removeTask(id) {
  const item = document.getElementById(id);
  if (item) item.remove();
}



