import "./styles.css";
if (document.readyState !== "loading") {
  console.log(document.readyState);
  initializePage();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializePage();
  });
}
function initializePage() {
  const addCommentButton = document.getElementById("add-comment");
  addCommentButton.addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const rating = document.getElementById("rating");
    /*const list = document.getElementById("list");*/
    let newItem = document.createElement("div");
    let commentText = document.createTextNode(textArea.value);
    let commentRating = document.createTextNode(
      rating.options[rating.selectedIndex].text
    );
    let removeButton = document.createElement("button");
    newItem.classList.add("comment");
    commentRating.className = "comment-rating";
    commentText.className = "comment-text";
    removeButton.className = "remove-comment";
    removeButton.style = "display:none";
    newItem.appendChild(commentRating);
    newItem.appendChild(commentText);
    newItem.appendChild(removeButton);
    document.body.appendChild(newItem);
    /*list.appendChild(newItem);*/
  });
  const removeCommentButton = document.getElementById("remove-comments");
  removeCommentButton.addEventListener("click", function () {
    console.log("moi");
    let listItems = document.getElementsByClassName("comment");
    let i = 0;
    while (i < listItems.length) {
      let j = 0;
      while (j < listItems[i].childNodes.length) {
        if (listItems[i].childNodes[j].className === "remove-comment") {
          listItems[i].childNodes[j].style = "display:inline";
        }
        j++;
      }
      i++;
      console.log(i);
      console.log(listItems.length);
    }

    const removeButtons = document.querySelectorAll(".remove-comment");

    removeButtons.forEach((element) => {
      element.addEventListener("click", function () {
        element.parentNode.remove();
      });
    });

    /*let confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      while (listItems.length !== 0) {
        listItems[0].parentNode.removeChild(listItems[0]);
      }
    }*/
  });
}
