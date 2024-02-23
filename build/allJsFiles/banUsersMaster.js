"use strict";

const closeSedeBar = document.querySelector(".closebarButton");
const menuButton = document.querySelector(".menuButton");
const sidebar = document.querySelector(".sidebar");
const reportBtn = document.querySelectorAll(".reportsButton");
const changePassBtn = document.querySelector(".changePassBtn");

//open and close the sidebar im mobile
menuButton.addEventListener("click", () => {
  sidebar.classList.remove("hiddenSidebar");
  sidebar.classList.remove("hidden");
});
closeSedeBar.addEventListener("click", () => {
  sidebar.classList.add("hiddenSidebar");
  sidebar.classList.add("hidden");
});