// Lesson 08 Challenge 01 - Assembles a Potluck Guest List
const addGuestButton = document.querySelector(".invite"); //invite button
const guestInputLabel = document.querySelector(".add-guest label"); //label for the invite button
const guestInput = document.querySelector(".add-guest input"); //text input box
const guestList = document.querySelector(".guest-list"); //unordered list (not yet visible)
const guestCount = document.querySelector(".attendance"); //span class for number of guests attending
const guestFull = document.querySelector(".alert"); //alert when guest list is full (not yet visable)

//Lesson 08 Challenge 02 - Randomly Assign a Potluck Dish to Invitees
const assignButton = document.querySelector(".assign"); //only appears when guest list is full (not yet visable)
const assignedItems = document.querySelector(".assigned-items"); //targets list populated with guest's name & their assigned dish

//adds Event Listener button when clicked to capture/add the value of user's input from HTML <input> element
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value; //captures the value of user's input
  //console.log(guest);

  //"if" statement using an empty string as a condition to test "guest" variable
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
  }
  clearInput(); //uses clearInput Function to clear Input Box after pushing the "addGuestButton" invite button
});

//Clears the Input Box
const clearInput = function () {
  guestInput.value = ""; //sets the "guestInput" text input field's value Property to an empty string
};

//Refactor Code to add a guest to list
const addToList = function (guest) {
  const listItem = document.createElement("li"); //changed to "const" to declare variable of a Function Scope & creates HTML <li> element
  listItem.innerText = guest; //changes "listItem" to "guest" variable to populate
  guestList.append(listItem); //adds new list elements to END of unordered list; guest names will now appear on webpage below invite button
};

//Limiting the number of Guests on List
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li"); //targets & updates number attending potluck from <ul class="guest-list"> HTML element
  guestCount.innerText = guests.length; //selects all list elements from the <span class="attendance"> HTML element

  //To prevent more than 8 guests to be added to guests list
  if (guests.length === 8) {
    addGuestButton.classList.add("hide"); //hides the invite button
    guestInput.classList.add("hide"); //hides the input text box
    guestInputLabel.classList.add("hide"); //hides the "ADD GUEST" label text
    guestFull.classList.remove("hide"); //unhides the "Guest list is full!" <h3> element
  }
};

//Lesson 08 Challenge 02 - Potluck Dishes Array
const assignItems = function () {
  const potluckItems = [
    "Apple & Brie Crostini with Hot Honey",
    "Fresh Pineapple Salsa with flatbread",
    "7-layer Guacamole Dip with Garlic Bread",
    "Pizza Stuffed Mushrooms",
    "Ham, Cheese, & Spinach Puffs",
    "Buffalo Chicken Sliders",
    "Veggie String Rolls",
    "Tortellini Pasta Salad with Prosciutto",
    "Quinoa & Cucumber Noodles Salad with Avocado Dressing",
    "Mint Melon Salad",
    "Lemon Cream Icebox Cake",
    "No-Bake Peach Tarts with Ginger & Coconut"
  ];

  const allGuests = guestList.querySelectorAll(".guest-list li"); //selects all list elements inside <ul class="guest-list">

  //loops through allGuests Array using "guest" variable
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length); //selects a random element from the potluckItems Array
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li"); //creates new HTML <li> element
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`; //grabs guest's name and dish item they will bring
    assignedItems.append(listItem); //adds listItem to the END of unordered list
    potluckItems.splice(randomPotluckIndex, 1); //prevents duplicate item assignment by removing it from Array after assigned to invitee
  }
};

//adds Event Listener on click to assignButton
assignButton.addEventListener("click", function () {
  assignItems(); //calls assignItems function
  assignButton.disable = true; //disables assignButton once loop completes
});
