'use strict';
const tableElement = document.getElementById('table');
let arr = [];
function Garden(name, image, season) {
  this.name = name;
  this.image =name ;
  this.season = season;
}



const formElement = document.getElementById('form');
save();
remove();
formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const image = event.target.image.value;
  const season = event.target.season.value;

  const flower = new Garden(name, image, season);
  arr.push(flower);






  save();
  remove();
  render();
  formElement.reset();
});




function render() {


  const tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);
  const th1Element = document.createElement('th');
  tr1Element.appendChild(th1Element);
  th1Element.textContent = ' Name';

  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent = 'Image';

  const th3Element = document.createElement('th');
  tr1Element.appendChild(th3Element);
  th3Element.textContent = 'season';

  for (let i = 0; i < arr.length; i++) {
    const tr = document.createElement('tr');
    tableElement.appendChild(tr);
    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = arr[i].name;

    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = arr[i].image;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = arr[i].season;

  }
}

render();





function getData() {
  let data = localStorage.getItem('Form');
  if (data) {
    data = JSON.parse(data);
    console.log(data);
    return data;

  }
  else {
    return [];
  }

}



function save() {
  let savedForm = getData();
  if (arr.length === 0 || arr.length === 1) {
    for (let i = 0; i < savedForm.length; i++) {
      arr.push(savedForm[i]);
    }
  }
  localStorage.setItem('Form', JSON.stringify(arr));
}


function remove(){
  const remov =document.getElementById('table');
  while(tableElement.firstChild){
    tableElement.removeChild(tableElement.firstChild);
  }
}
