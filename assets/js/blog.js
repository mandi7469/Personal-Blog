const mainSection = document.querySelector("#main-section");
const backButton = document.querySelector("#back-button");
let entries = [];

// function to retreive and render blog posts from local storage
function renderBlog() {
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }
  // if there are any blog posts in the entries array, loop through each blog post object
  if (entries.length > 0) {
    for (let index = 0; index < entries.length; index++) {
      const post = entries[index];
      console.log(post);
      // created html elements for each blog post
      const section = document.createElement("section");
      const blogTitle = document.createElement("h4");
      const blogContent = document.createElement("p");
      const postedBy = document.createElement("p");
      // Sets the content of the elements using data from the blog post object
      blogTitle.textContent = post.title;
      blogContent.textContent = post.content;
      postedBy.textContent = "Posted by: " + post.username;
      // appended the created elements
      mainSection.appendChild(section);
      section.appendChild(blogTitle);
      section.appendChild(blogContent);
      section.appendChild(postedBy);
      // added css classes to the element for styling
      section.className = "posts";
      blogTitle.className = "blog-title";
      blogContent.className = "blog-content";
      postedBy.className = "posted-by";
    }
  }
}
// function to handle the back button click event
function handleBack(event) {
  event.preventDefault();
  window.history.back();
}
// added event listener
backButton.addEventListener("click", handleBack);

renderBlog();
