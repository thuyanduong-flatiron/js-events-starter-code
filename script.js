console.log("first line")



document.addEventListener("DOMContentLoaded", function(){
	console.log("DOM is loaded")
})






console.log("hello from the bottom of the file")





// function addInstructor(firstName, lastName, email){
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.innerHTML += `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }


// function addInstructor(firstName, lastName, email){
//   var trElement = document.createElement("tr")
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.appendChild(trElement) 
//
//   var firstNameEl = document.createElement("td")//creating the <td>
//   firstNameEl.innerText = firstName
//
//   var lastNameEl = document.createElement("td")//creating the <td>
//   lastNameEl.innerText = lastName
//
//   var emailEl = document.createElement("td")//creating the <td>
//   emailEl.innerText = email
//
//   trElement.append(firstNameEl, lastNameEl, emailEl)
// }