/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
"use-strict";
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*let header = document.querySelector('header');
   header.insertAdjacentHTML('beforeend', `
      <label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         <button type="button" id="button2">Reset</button>
      </label>
   `);*/
/* Variables to reference the `input` and search `button` elements */
//const search = document.getElementById('search');
//const submit = document.querySelector('button');
//const reset = document.getElementById('button2');
//Search Function
/*function searchFunc(searchInput, elements){
   searchInput = searchInput.value; 
   let foundStudent = [];
   for (let i = 0; i < elements.length; i++){
      elements[i].className = '';
      if (searchInput.length != 0 && elements[i].name.first.toLowerCase() == searchInput.toLowerCase()){
         foundStudent.push(elements[i]);
      }
   } 
   showPage(foundStudent, 1);    
}*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(elements, page){
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let ul = document.querySelector('.student-list');
   ul.innerHTML = ''; 
   for (let i = 0; i < elements.length; i++){
      if (i >= startIndex && i < endIndex){      
         ul.insertAdjacentHTML('beforeend',`
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${elements[i].picture.medium}" alt="Profile Picture">
                  <h3>${elements[i].name.first} ${elements[i].name.last}</h3>
                  <span class="email">${elements[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${elements[i].registered.date}</span>
               </div>
            </li>
         `);
      }
    } 
    addPagination(elements);   
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(elements){
   let pagesNeeded = Math.ceil(elements.length / 9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for(let i = 1; i <= pagesNeeded; i++){
         linkList.insertAdjacentHTML('beforeend',`
            <li>
               <button type="button">${i}</button>
            </li>
         `);
      }
      const firstButton = linkList.querySelector('button');
      firstButton.className = 'active';
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName == 'BUTTON'){
            const previousButton = linkList.querySelector('.active');
            previousButton.className = '';
            e.target.className = 'active';
            showPage(data, e.target.textContent);
         }
      });
}

/* submit listener - code adapted from Project Warm Up Workspace */ 
/*submit.addEventListener('click', (event) => {
   event.preventDefault();
   console.log(search.value);
   // Invoke your search function here - Arguments: search, tableCells
   searchFunc(search, data);
 
   // Helpful log statement to test function
   console.log('Submit button is functional!'); 
 });
 reset.addEventListener('click', (event) => {
   event.preventDefault();
   //console.log(search.value);
   // Invoke your search function here - Arguments: search, tableCells
   showPage(data, 1);
   // Helpful log statement to test function
   console.log(' button is functional!');
 });*/
/* submit listener - code adapted from Project Warm Up Workspace */ 
/*search.addEventListener('keyup', (event) => {
   event.preventDefault();
   // Invoke your search function here - Arguments: search, data
   searchFunc(search, data);
 
   // Helpful log statement to test function
   console.log('Keyup event on the Search input is functional!');
 });*/
// Call functions;
showPage(data, 1);
addPagination(data);