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
  //*petInfo.append(button);




const onClickOutside = (element, callback) => {
    document.addEventListener('click', e => {
        if (!element.contains(e.target)) callback();
    });
};

function showInfo(src, description) {
   //*Create image and text block
    const img = document.createElement('img')
    img.src = src
    img.classList.add('petPicStyle')
    const text = document.createElement('p')
    text.innerText = description
    text.classList.add('petPicBlurb')

   //*Create div with image and text 
    const modal = document.createElement('div')
    modal.append(img, text)
    modal.classList.add('modal')
    document.body.append(modal)
    setTimeout(() => {
        onClickOutside(modal, () => {
            modal.remove()
        })
    }, 0)
}

