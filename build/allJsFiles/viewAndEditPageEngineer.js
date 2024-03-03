"use strict";

const editBtn = document.querySelector(".EditBtn");
const submitTheEditedreport = document.querySelector(".submitTheEditedreport");
const txt = document.getElementById("txt");

editBtn.addEventListener("click", () => {
  txt.removeAttribute("readonly");
  if (submitTheEditedreport.disabled) {
    submitTheEditedreport.classList.remove("cursor-not-allowed");
    submitTheEditedreport.classList.add("cursor-pointer");
    submitTheEditedreport.disabled = false;
  } else {
    submitTheEditedreport.classList.add("cursor-not-allowed");
    txt.setAttribute("readonly", true);
    submitTheEditedreport.disabled = true;
  }
});
