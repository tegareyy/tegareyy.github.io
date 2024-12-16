const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  interval: 3000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBox);

const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy, {
  scrollOffset: 50,
});

const dropDown = document.querySelectorAll(".dropdown-trigger");
M.Dropdown.init(dropDown,);
