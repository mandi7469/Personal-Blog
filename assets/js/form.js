const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitInput = document.querySelector("#submit");
const errorMessage = document.querySelector("#error-message")
let entries = [];

function init() {
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }
}

//redirects to blog page
function goToBlog() {
  window.location.href = "blog.html";
}

// this function handles the form submission event and added prevent default behavior 
function handleInput(event) {
  event.preventDefault();
  console.log(usernameInput.value, titleInput.value, contentInput.value);
// created a new blog form object and removed whitespace
  const blogForm = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim()
  };
// check if any of the form fields are empty, if so, display error message, if filled, proceed with logic
  if (blogForm.username == "" || blogForm.title == "" || blogForm.content == "") {
      errorMessage.style.display = "block";
  } else {
    entries.push(blogForm);
// store the entire entries array as a JSON string in local storage
    localStorage.setItem("blogForm", JSON.stringify(entries));

    goToBlog();
  }
}
// Add listener to submit element
submitInput.addEventListener("click", handleInput);

init();
