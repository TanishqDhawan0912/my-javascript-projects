const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes) {
    notesContainer.innerHTML = notes;
  }
}

getNotes();

function createnote() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "notes-app-img/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  saveNotes();
}

createBtn.addEventListener("click", createnote);

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.addEventListener("input", () => {
        saveNotes();
      });
    });
  }
});

function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

saveNotes();
