document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("backToTop").addEventListener("click", () => {
  window.scroll({top: 0, behavior: "smooth"});
});

$("li").click(function(e) {
  e.preventDefault();
  $("li").removeClass('active');
  $(this).addClass('active');
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".nav__logo").style.fontSize = "0.7em";
    document.getElementsByClassName("nav")[0].style.padding = "0em 4em 0em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "hsl(0, 100%, 60%)";
  } else {
    document.getElementsByClassName("nav__logo")[0].style.fontSize = "1em";
    document.getElementsByClassName("nav")[0].style.padding = "1em 4em 1em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "#2b2b2b";
  }
});