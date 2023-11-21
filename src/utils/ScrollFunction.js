// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  const menuItems = document.querySelectorAll(".menu__item");
  // const burgerBars = document.querySelectorAll("span.bm-burger-bars");
  // console.log(burgerBars);
  const navBar = document.getElementById("navbar");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navBar.style.backgroundColor = "white";
    navBar.style.boxShadow = "0px 6px 9px 0px rgba(0,0,0,0.06)";
    navBar.style.paddingTop = "0px";
    navBar.style.height = "80px";
    document.getElementById("logo").style.color = "#2d2d2d";
    menuItems.forEach((menuItem) => {
      menuItem.style.color = "#2d2d2d";
    });
    // burgerBars.forEach((burgerBar) => {
    //   burgerBar.style.background = "#2d2d2d";
    // });
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "0px 6px 9px 0px rgba(0,0,0,0.0)";
    navBar.style.paddingTop = "5px";
    navBar.style.height = "90px";
    document.getElementById("logo").style.color = "white";
    menuItems.forEach((menuItem) => {
      menuItem.style.color = "white";
    });
    // burgerBars.forEach((burgerBar) => {
    //   burgerBar.style.background = "#white";
    // });
  }
}
