const collapsibleBtns = document.querySelectorAll('.collapsible-icon');
const collapsibleContents = document.querySelectorAll('.author-content');

collapsibleBtns.forEach((btn, btnIdx) => {
  btn.addEventListener('click', () => {
    let icon = btn.firstElementChild;
    if (icon.classList.contains('fa-chevron-down')) {
      icon.className = 'fas fa-chevron-up';
      collapsibleContents.forEach((content, contentIdx) => {
        if (btnIdx === contentIdx) {
          content.classList.add('content-show');
        }
      });
    } else if (icon.classList.contains('fa-chevron-up')) {
      icon.className = 'fas fa-chevron-down';
      collapsibleContents.forEach((content, contentIdx) => {
        if (btnIdx === contentIdx) {
          content.classList.remove('content-show');
        }
      });
    }
  });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#dropDown");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


