/*** GETTING ELEMENTS AND ASIGN THEM TO VARIABLES  ***/
const openBtn = document.querySelector('.open-window');
const closeBtn = document.querySelector('.fa-window-close');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');
const questionInput = document.querySelector('.question');
const answerInput = document.querySelector('.answer');
const content = document.querySelector('.content');
const listItems = document.querySelector('.list-items');
const showHideBtn = document.querySelector('.show-hide-btn');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const feedback = document.querySelector('.feedback');



/********** EVENT LISTENERS ************/
// Open Modal
openBtn.addEventListener('click', ()=>{
   modal.style.display = 'flex';
})

// Close Modal
closeBtn.addEventListener('click', ()=>{
   modal.style.display = 'none';
})

// Save Q&A
form.addEventListener('submit', e=>{
   e.preventDefault();
   const question = questionInput.value;
   const answer = answerInput.value;

   if(question === '' || answer === ''){
      showFeedback(feedback, 'Please fill in the infos!');
   } else {
      // Add Values
      addValues(question, answer);
   }
})

// Content Events
listItems.addEventListener('click', e=>{

   // Show/Hide Button
   if(e.target.classList.contains('show-hide-btn')){
      e.target.parentElement.childNodes[5].classList.toggle('display');
   }

   // Edit button
   if(e.target.classList.contains('edit')){
      modal.style.display = 'flex';

      questionInput.value = e.target.parentElement.parentElement.childNodes[1].innerHTML;

      answerInput.value = e.target.parentElement.parentElement.childNodes[5].innerHTML;

      e.target.parentElement.parentElement.remove();
   }

   // Delete Button
   if(e.target.classList.contains('delete')){
      e.target.parentElement.parentElement.remove();

      let ques = e.target.parentElement.parentElement.childNodes[1].innerHTML;

      let ans = e.target.parentElement.parentElement.childNodes[5].innerHTML;
   }

})


/*********** FUNCTIONS ***********/
// Add Values
function addValues(valOne, valTwo){
   const li = document.createElement('li');
   li.classList = 'item';

   li.innerHTML = `
      <p class="item-question">${valOne}</p>
      <button class="show-hide-btn">Show/Hide Answer</button>
      <p class="item-answer">${valTwo}</p>
      <div class="btns">
         <button class="edit">Edit</button>
         <button class="delete">Delete</button>
      </div>
   `;

   listItems.appendChild(li);
   content.appendChild(listItems);

   questionInput.value = '';
   answerInput.value = '';
}

// Show Feedback
function showFeedback(feedback, message){
   feedback.style.display = 'block';
   feedback.innerHTML = message;

   setTimeout( ()=>{
      feedback.style.display = 'none';
   }, 2000)
}

