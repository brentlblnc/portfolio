document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("backToTop").addEventListener("click", e => {
  window.scroll({top: 0, behavior: "smooth"});
});

$("li").click(function(e) {
  e.preventDefault();
  $("li").removeClass('active');
  $(this).addClass('active');
});





window.addEventListener("scroll", e => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementsByClassName("nav")[0].style.padding = "0em 4em 0em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "hsl(0, 100%, 60%)";
  } else {
    document.getElementsByClassName("nav")[0].style.padding = "1em 4em 1em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "#2b2b2b";
  }
});

// document.getElementsByClassName("row")[0].addEventListener("mouseenter", e => {
//   console.log(1);
// });

