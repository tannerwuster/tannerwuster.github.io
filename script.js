const app = {};

// Hamburger Menu
app.menuSlide = () => {
  const menuLinks = $(".ham-link");
  const checkbox = $("#ham-check");

  menuLinks.on("click", function () {
    checkbox.prop("checked", false);
  });
};

// Arrow to Display About Me
app.arrowSlide = () => {
  const arrow = $(".arrow");
  const scrollToAbout = () => {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      1500
    );
  };
  arrow.on("click", function (e) {
    e.preventDefault();
    scrollToAbout();
  });
  arrow.on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToAbout();
    }
  });
};

// Scroll back to top
app.backToTop = () => {
  const upTop = $("#top");
  const scrollHome = () => {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1500
    );
  };
  upTop.on("click", function (e) {
    e.preventDefault();
    scrollHome();
  });
  upTop.on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollHome();
    }
  });
};

// Switch to Light Mode
app.switchLight = () => {
  const toggleLight = $("#light-dark");

  toggleLight.on("click", function () {
    $("body").toggleClass("light");
  });
};

// Doc Init
app.init = () => {
  app.menuSlide();

  app.arrowSlide();
  app.backToTop();

  app.switchLight();
};

$(function () {
  app.init();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  AOS.init(prefersReducedMotion ? { disable: true } : {});
});
