const contactForm = select("#contactForm");
const name = select("#txtName");
const email = select("#txtEmail");
const subject = select("#txtSubject");
const message = select("#txtMessage");
const submitBtn = select("#submitBtn");
const feedback = select("#feedback");
const linksContainer = select(".nav-mobile__links");
const menu = select(".menu");
let formData = null;
let xmlHttp = null;

// ------------------------------------------------ Event listeners
window.addEventListener("load", fadeInImg);

window.addEventListener("DOMContentLoaded", main);

window.addEventListener("scroll", navAdjust);

menu.addEventListener("click", toggleSideMenu);

contactForm.addEventListener("submit", sendAJAX);

for (let link of linksContainer.childNodes) {
  link.addEventListener("click", toggleSideMenu);
}

//  ------------------------------------------------ Helper functions
function select(selector) {
  return document.querySelector(selector);
}

function scrollIntoView(id) {
  return function(e) {
    $('html,body').animate({scrollTop: $(`#${id}`).offset().top - 200}, 'slow');
  }
}

// ------------------------------------------------- Event handlers
function main(e) {
  // Populate footer with current year
  select("#year").innerHTML = new Date().getFullYear();

  // Desktop scroll animations
  select("#aboutHeading").addEventListener("click", scrollIntoView("about"));
  select("#skillsHeading").addEventListener("click", scrollIntoView("skills"));
  select("#projectsHeading").addEventListener("click", scrollIntoView("projects"));
  select("#contactHeading").addEventListener("click", scrollIntoView("contact"));

  // Mobile scroll animations
  select("#aboutHeadingMob").addEventListener("click", scrollIntoView("about"));
  select("#skillsHeadingMob").addEventListener("click", scrollIntoView("skills"));
  select("#projectsHeadingMob").addEventListener("click", scrollIntoView("projects"));
  select("#contactHeadingMob").addEventListener("click", scrollIntoView("contact"));

}

function navAdjust(e) {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementsByClassName("nav")[0].style.padding = "0em 4em 0em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "hsl(0, 100%, 60%)";
  } else {
    document.getElementsByClassName("nav")[0].style.padding = "1em 4em 1em 4em";
    document.getElementsByClassName("nav")[0].style.backgroundColor = "#2b2b2b";
  }
}

function fadeInImg(e) {
  setTimeout(() => {
    document.querySelector(".main__intro").style.opacity = 1;
  }, 300);
}

function toggleSideMenu(e) {
  if (document.querySelector(".nav-mobile__links").style.left == "0px") {
    document.querySelector(".nav-mobile__links").style.left = "-200px";
    document.querySelector(".menu").style.color = "#fff";
  } else {
    document.querySelector(".nav-mobile__links").style.left = "0px";
    document.querySelector(".nav-mobile__links").style.position = "absolute";
    document.querySelector(".menu").style.color = "#000";
  }
}

function sendAJAX(e) {
  e.preventDefault();
  
  submitBtn.disabled = true;
  feedback.innerHTML = "Please wait...";
  formData = new FormData();
  formData.append(name, name.value);
  formData.append(email, email.value);
  formData.append(subject, subject.value);
  formData.append(message, message.value);
  
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "./../src/php/handler.php");
  xmlHttp.send(formData);
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      if (xmlHttp.responseText == "success") {
        contactForm.innerHTML = `<h2>Thanks ${name.value}, your message has been sent.</h2>`;
        console.log("success");
      } else {
        submitBtn.disabled = false;
        console.log("fail");
      }
    } 
  }
}




























