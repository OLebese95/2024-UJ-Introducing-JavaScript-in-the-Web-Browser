const myIntro = document.querySelector('.myIntro');
console.log(myIntro);
const myMessage = document.querySelector('.myMessage');
const theNameButton = document.querySelector('.theNameButton');
const clearNameButton = document.querySelector('.clearNameButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const fruitInput = document.querySelector ('.inputFruit');
const addFruitButton = document.querySelector('.addFruitButton');
const myNewMessage = document.querySelector('.myNewMessage');
const theNewMessageButton = document.querySelector('.theNewMessageButton');
const theclearNewMessageButton = document.querySelector('.theclearNewMessageButton');

setTimeout(function(){
    myIntro.innerText = 'This is a message in the DOM!'
}, 3000);

theNewMessageButton.addEventListener('click', function() {
    setTimeout(function(){
    myNewMessage.innerText = 'Welcome!';
    }, 3000);
});

theclearNewMessageButton.addEventListener('click', function() {
    myNewMessage.innerText = '';
});



theNameButton.addEventListener('click', function() {
      myMessage.innerText = inputBox.value;  
});

clearNameButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}


addFruitButton.addEventListener('click', function() {
    // get the input value
    const fruit = fruitInput.value;
    
    // add the fruit to the list
    fruits.push(fruit);
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
});

