const mainSection = document.querySelector("#main-section");
const backButton = document.querySelector("#back-button");
let entries = [];

function renderBlog() {
  const storedEntries = JSON.parse(localStorage.getItem("blogForm"));

  if (storedEntries !== null) {
    entries = entries.concat(storedEntries);
  }

  if (entries.length > 0) {
    for (let index = 0; index < entries.length; index++) {
      const post = entries[index];
      console.log(post);
      const section = document.createElement("section");
      const blogTitle = document.createElement("h4");
      const blogContent = document.createElement("p");
      const postedBy = document.createElement("p");

      blogTitle.textContent = post.title;
      blogContent.textContent = post.content;
      postedBy.textContent = "Posted by: " + post.username;

      mainSection.appendChild(section);
      section.appendChild(blogTitle);
      section.appendChild(blogContent);
      section.appendChild(postedBy);

      section.className = "posts"
      blogTitle.className = "blog-title"
      blogContent.className = "blog-content"
      postedBy.className = "posted-by"

    }
  }
}

function handleBack(event) {
  event.preventDefault();
  window.history.back();
}

backButton.addEventListener("click", handleBack);

renderBlog();

