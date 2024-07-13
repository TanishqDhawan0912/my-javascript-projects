let toastbox = document.querySelector(".toast-box");
let sucessmsg = `<i class="fa-solid fa-thumbs-up"></i> Sucessfully Submitted`;
let errormsg = `<i class="fa-solid fa-circle-xmark"></i> Please fill the error!`;
let invalidmsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input , check again`;

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastbox.appendChild(toast);

  if (message.includes(`error`)) {
    toast.classList.add("error");
  }

  if (message.includes(`Invalid`)) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
