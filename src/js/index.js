import { CookieManager } from './CookieManager';

(function() {
  const contactForm = select("#contactForm");
  const name = select("#txtName");
  const email = select("#txtEmail");
  const subject = select("#txtSubject");
  const message = select("#txtMessage");
  const submitBtn = select("#submitBtn");
  const feedback = select("#feedback");
  const linksContainer = select(".nav-mobile__links");
  const menu = select(".menu");
  const projectsElem = select("#projects");
  EventTarget.prototype.on = EventTarget.prototype.addEventListener;
  let cookieManager = null;
  let formData = null;
  let xmlHttp = null;
  let projectsList = null;

  // ------------------------------------------------ Event listeners

  window.on("load", main);

  window.on("scroll", navAdjust);

  menu.on("click", toggleSideMenu);

  contactForm.on("submit", sendEmail);

  for (let link of linksContainer.childNodes) {
    link.on("click", toggleSideMenu);
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
    select("#aboutHeading").on("click", scrollIntoView("about"));
    select("#skillsHeading").on("click", scrollIntoView("skills"));
    select("#projectsHeading").on("click", scrollIntoView("projects"));
    select("#contactHeading").on("click", scrollIntoView("contact"));

    // Mobile scroll animations
    select("#aboutHeadingMob").on("click", scrollIntoView("about"));
    select("#skillsHeadingMob").on("click", scrollIntoView("skills"));
    select("#projectsHeadingMob").on("click", scrollIntoView("projects"));
    select("#contactHeadingMob").on("click", scrollIntoView("contact"));

    getProjects();
  }

  function getProjects() {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "./../src/json/projects.json");
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        projectsList = JSON.parse(xmlHttp.responseText);
        loadProjects(projectsList);
      } 
    }
    xmlHttp.send();
  }

  function loadProjects(projects) {
    projects.map(project => {

      let tile = projectsElem.appendChild(document.createElement("div"));
      tile.className = "tile";
      let projectDiv = tile.appendChild(document.createElement("div"));
      projectDiv.className = "project";
      let h5 = projectDiv.appendChild(document.createElement("h5"));
      h5.textContent = project.name;
      let img = projectDiv.appendChild(document.createElement("img"));
      img.id = `img${project.id}`;
      img.src = project.img;
      
      select(`#${img.id}`).on("click", projectView(project, img));
      
    });

    
  }

  function projectView(project, img) {
    return function(e) {
      cookieManager = new CookieManager();
      cookieManager.setCookie("SCROLLTOP", document.documentElement.scrollTop || document.body.scrollTop, 365);
      $(window).scrollTop($("#projects").offset().top - 200);
      while (projectsElem.firstChild) {
        projectsElem.removeChild(projectsElem.firstChild);
      }
      projectsElem.classList.remove("main__projects");
      projectsElem.classList.add("main__projectView");
      
      projectsElem.innerHTML += `
        <h3>${project.name}</h3>
        <div class="project">
          <img src=${img.src}>
          <div class="column">
            <p>${project.description}</p>
            <div class="buttons">
              <a href=${project.link} target="_blank">View Live</a>
              <i class="fas fa-backspace fa-3x" id="close"></i>
            </div>
          </div>
        </div>
      `;
      
      select("#close").on("click", e => {
        while (projectsElem.firstChild) {
          projectsElem.removeChild(projectsElem.firstChild);
        }
        projectsElem.classList.remove("main__projectView");
        projectsElem.classList.add("main__projects");
          
        loadProjects(projectsList);
        document.documentElement.scrollTop = document.body.scrollTop = cookieManager.getCookie("SCROLLTOP");
      });
    }
    
  }

  function navAdjust(e) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      select(".nav").style.padding = "0em 4em 0em 4em";
      //select(".nav").style.backgroundColor = "hsl(0, 100%, 60%)";
    } else {
      select(".nav").style.padding = "1em 4em 1em 4em";
      //select(".nav").style.backgroundColor = "#2b2b2b";
    }
  }

  function toggleSideMenu(e) {
    if (select(".nav-mobile__links").style.left == "0px") {
      select(".nav-mobile__links").style.left = "-200px";
      select(".menu").style.color = "#fff";
    } else {
      select(".nav-mobile__links").style.left = "0px";
      select(".nav-mobile__links").style.position = "absolute";
      select(".menu").style.color = "#000";
    }
  }

  function sendEmail(e) {
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

})();




























