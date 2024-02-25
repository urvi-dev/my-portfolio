/*--nav bar function--*/
function myMenuFunction() {
  var menuBtn = document.getElementById("myNaveMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += "responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*--add shadow on nav bar while scrollbar--*/

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = " 0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = " 70px";
    navHeader.style.lineHeight = " 70px";
  } else {
    navHeader.style.boxShadow = " none";
    navHeader.style.height = " 90px";
    navHeader.style.lineHeight = " 90px";
  }
}
/*--typing effect--*/

/*--## -- scroll reveal animation--##---*/

/*--home--*/

/*--project box--*/

/*--headings--*/

/*--featured box--*/

/*---## -- scroll reveal animation--##--*/
