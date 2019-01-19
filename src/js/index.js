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

let contactForm = document.querySelector("#contactForm");
let name = document.querySelector("#txtName");
let email = document.querySelector("#txtEmail");
let subject = document.querySelector("#txtSubject");
let message = document.querySelector("#txtMessage");
let submitBtn = document.querySelector("#submitBtn");
let feedback = document.querySelector("#feedback");
let formData;
let xmlHttp;

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  submitBtn.disabled = true;
  feedback.innerHTML = "Please wait...";
  formData = new FormData();
  formData.append(name, name.value);
  formData.append(email, email.value);
  formData.append(subject, subject.value);
  formData.append(message, message.value);
  console.log(formData.name);
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "handler.php");
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      if (xmlHttp.responseText == "success") {
        contactForm.innerHTML = `<h2>Thanks ${name.value}, your message has been sent.</h2>`;
        console.log("success");
      } else {
        feedback.innerHTML = xmlHttp.responseText;
        submitBtn.disabled = false;
        console.log("fail");
      }
    }
  }
});

