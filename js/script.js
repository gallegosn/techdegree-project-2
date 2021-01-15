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
//The code below adds the search bar as well as the search and reset buttons to the page
const header = document.querySelector('header');
   header.insertAdjacentHTML('beforeend', `
      <label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         <button type="button" id="button2">Reset</button>
      </label>
   `);
/* Variables to reference the `input` search, and reset and submit `button` elements */
const search = document.getElementById('search');
const submit = document.querySelector('button');
const reset = document.getElementById('button2');
//Search Function that looks for matches by first name only, not a filter search
function searchFunc(searchInput, elements){
   searchInput = searchInput.value.toLowerCase(); 
   let foundStudent = [];
   

   for (let i = 0; i < elements.length; i++){
      let firstName = elements[i].name.first.toLowerCase();
      let lastName = elements[i].name.last.toLowerCase();
      //elements[i].name.first.toLowerCase() == searchInput.toLowerCase()
      if (searchInput.length != 0 && firstName.includes(searchInput) || lastName.includes(searchInput)){
       foundStudent.push(elements[i]);
      }
      
    
   }

   console.log(foundStudent);
   if (foundStudent.length != 0) { 
      showPage(foundStudent, 1);
      //let linkList = document.querySelector('.link-list');
      //linkList.innerHTML = ''; 
      addPagination(foundStudent);
      /*linkList.insertAdjacentHTML('beforeend',`
               <li>
                  <button type="button">1</button>
               </li>
            `);  
      const firstButton = linkList.querySelector('button');
      firstButton.className = 'active';*/
   } else {
      const newLabel = document.querySelector('.student-list');
      newLabel.innerHTML = '';
      newLabel.insertAdjacentHTML('beforeend', `
         <label>No Results....</label>
      `);
      const linkList = document.querySelector('.link-list');
      linkList.innerHTML = '';
   }
   const newSearch = document.getElementById('search');
   newSearch.value = '';
}
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
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(elements){
   //console.log("addPagination function called");
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
      // Initialize the first button to being active
      const firstButton = linkList.querySelector('button');
      firstButton.className = 'active';
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName == 'BUTTON'){
            const previousButton = linkList.querySelector('.active');
            previousButton.className = '';
            e.target.className = 'active';
            showPage(elements, e.target.textContent);
         }
      });
}

/* submit listener - code adapted from Project Warm Up Workspace */ 
submit.addEventListener('click', (event) => {
   event.preventDefault();
   console.log(search.value);
   searchFunc(search, data);
   // Helpful log statement to test function
   console.log('Submit button is functional!'); 
 });
 //reset the search field and reset the page to original state
 reset.addEventListener('click', (event) => {
   event.preventDefault();
   showPage(data, 1);
   addPagination(data);
   const newSearch = document.getElementById('search');
   newSearch.value = '';
   // Helpful log statement to test function
   console.log(' button is functional!');
 });

// Call functions;
showPage(data, 1);
addPagination(data);