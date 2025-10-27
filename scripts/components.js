/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

// The Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.innerText = "Back to Top";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "90px";
scrollToTopBtn.style.right = "25px";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.padding = "10px";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.backgroundColor = "#444444";
scrollToTopBtn.style.color = "#ffffff";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.opacity = "0";
scrollToTopBtn.style.visibility = "hidden";
scrollToTopBtn.style.transition = "opacity 0.27s, visibility 0.27s";
document.body.appendChild(scrollToTopBtn);

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
};

scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// The Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();
function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define the footer content:
    footerContainer.innerHTML += `<footer>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footer>`;
    footer = document.querySelector("footer");
    const donationButton = document.createElement("button");
    donationButton.innerText = "SUPPORT ME";
    donationButton.style.display = "block";
    donationButton.style.margin = "1vh auto 0";
    donationButton.style.padding = "10px 20px";
    donationButton.style.fontWeight = "bold";
    donationButton.style.backgroundColor = "#28a745";
    donationButton.style.color = "#ffffff";
    donationButton.style.border = "none";
    donationButton.style.borderRadius = "5px";
    donationButton.style.cursor = "pointer";
    donationButton.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    donationButton.onclick = function () {
      window.open("https://coff.ee/cocacola", "_blank", "noopener noreferrer");
    };
    footer.appendChild(donationButton);
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");
