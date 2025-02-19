// Select the list element
let list = document.getElementById("infi-list");
let counter = 1;

// Function to add items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Item ${counter++}`;
    list.appendChild(listItem);
  }
}

// Initially add 10 items
addItems(10);

// Event listener for infinite scrolling
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let documentHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled close to the bottom
  if (scrollTop + windowHeight >= documentHeight - 5) {
    addItems(2); // Add 2 more items
  }
});
