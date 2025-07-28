// The Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.innerText = "Back to Top";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "90px";
scrollToTopBtn.style.right = "20px";
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
      window.open("https://boosty.to/braveheart/donate", "_blank", "noopener");
    };
    footer.appendChild(donationButton);
  }
}
footerContainerF(footerContainer);
