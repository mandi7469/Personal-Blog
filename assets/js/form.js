const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitInput = document.querySelector("#submit");

let entries = [];

function init() {
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }
}

//redirects to blog page
function renderBlog() {
  window.location.href = "blog.html";
}

function handleInput(event) {
  event.preventDefault();
  console.log(usernameInput.value, titleInput.value, contentInput.value);

  const blogForm = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
  };

  entries.push(blogForm);

  localStorage.setItem("blogForm", JSON.stringify(entries));

  renderBlog();
}
// Add listener to submit element
submitInput.addEventListener("click", handleInput);

init();
