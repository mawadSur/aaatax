function getCurrentPath() {
  return window.location.hash || window.location.pathname;
}

function setActiveNav() {
  const currentPath = getCurrentPath();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setActiveNav);
window.addEventListener("hashchange", setActiveNav);
