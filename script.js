/* const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
*/

/*const ponyo = document.querySelector('.ponyo');

ponyo.addEventListener('click', function() {
     alert('Get away!');
  });
*/





const h2 = document.createElement('h2');

const item2 = document.querySelector('.item2');

const petInfo = document.querySelector('.pet-bio');

const button = document.createElement('button')


  h2.textContent = "TESTING";
   //*item2.append(h2);

  button.textContent= 'Click to read  more about me '
  button.classList.add('btn') //*add a btn class 
  petInfo.append(button);
