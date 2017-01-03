( function() {

var nameContainer = document.querySelector('#fullName');
var hairColorContainer = document.querySelector('#hairColor');
var eyeColorContainer = document.querySelector('#eyeColor');
  
var fillData = function(data) {
  nameContainer.innerHTML = data.name;
  hairColorContainer.innerHTML = data.hair_color;
  eyeColorContainer.innerHTML = data.eye_color;
}

var btnRandomReload = document.querySelector('#idCard .btn');

var btnRandomReloadHandler = function(e) {

  var peopleId = Math.ceil(Math.random()*10);

  var self = this;
  self.disabled = true;
  
  // https://github.com/github/fetch
  // https://cdnjs.com/libraries/fetch
  // 2 features non-supportés par tous les navigateurs : fetch, promise
  // du coup, il faut utiliser un polyfill
  fetch('http://swapi.co/api/people/' + peopleId)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    self.disabled = false;
    fillData(data);
  });
}

btnRandomReload.addEventListener('click', btnRandomReloadHandler);
//btnRandomReload.onclick = btnRandomReloadHandler;

})();