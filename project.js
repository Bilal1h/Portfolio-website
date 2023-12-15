Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 10, 0.320, 10)",
  duration: 1,
});

var check = document.querySelector("#check");
var nav = document.querySelector("#nav");
var hamburgermenu = document.querySelector("#menu-icon");
var navright = document.querySelector("#topright h1");
var navelem1 = document.querySelector("#navelem1");
var navelem2 = document.querySelector("#navelem2");
var navelem3 = document.querySelector("#navelem3");
var navelem4 = document.querySelector("#navelem4");
Shery.textAnimate("#topright h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 10,
});
navelem1.addEventListener("mouseover",()=>{
  navright.innerHTML = "HOME";
  
})
navelem1.addEventListener("mouseout",()=>{
  navright.innerHTML = "PROJECTS";
})
navelem2.addEventListener("mouseover",()=>{
  navright.innerHTML = "ABOUT";
   Shery.textAnimate("#topright h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 10,
  });
})
navelem2.addEventListener("mouseout",()=>{
  navright.innerHTML = "PROJECTS";
})
navelem3.addEventListener("mouseover",()=>{
  navright.innerHTML = "PROJECTS";
   Shery.textAnimate("#topright h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 10,
  });
})
navelem3.addEventListener("mouseout",()=>{
  navright.innerHTML = "PROJECTS";
})
navelem4.addEventListener("mouseover",()=>{
  navright.innerHTML = "CONTACT";
   Shery.textAnimate("#topright h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 10,
  });
})
navelem4.addEventListener("mouseout",()=>{
  navright.innerHTML = "PROJECTS";
})
check.addEventListener("change", function (e) {
  if (e.target.checked) {
    if (screen.width < 420) {
      nav.style.opacity = "1";
      nav.style.width = "350px";
      document.querySelector("#nav h1").style.opacity = "1";
      hamburgermenu.classList.remove("ri-menu-line");
      hamburgermenu.classList.add("ri-close-line");

      Shery.textAnimate("#top h1" /* Element to target.*/, {
        //Parameters are optional.
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 1,
      });
      Shery.makeMagnet("#top h2" /* Element to target.*/, {
        duration: 10.3,
      });
    } else {
      nav.style.opacity = "1";
      nav.style.width = "100vw";
      document.querySelector("#nav h1").style.opacity = "1";
      hamburgermenu.classList.remove("ri-menu-line");
      hamburgermenu.classList.add("ri-close-line");

      Shery.textAnimate("#top h1" /* Element to target.*/, {
        //Parameters are optional.
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 1,
      });
      Shery.makeMagnet("#top h2" /* Element to target.*/, {
        duration: 10.3,
      });
    }
    
  }
  
  
  
  else {
    nav.style.opacity = "0";
    nav.style.width = "0px";

    document.querySelector("#nav h1").style.opacity = "0";
    hamburgermenu.classList.remove("ri-close-line");
    hamburgermenu.classList.add("ri-menu-line");

  }
});

// toggle button code
let no = 0;
let root = document.documentElement;
let button = document.getElementById("button");
let buttonicon = document.querySelector("#button i");
let body = document.querySelector("body");
let darkmode = false;
button.addEventListener("click", () => {
  no++;
  if (no == 1) {
    gsap.to("#button", {
      opacity: 0,
    });
    setTimeout(() => {
      gsap.to("#button", {
        opacity: 1,
      });
      root.style.setProperty("--primaryforeground", "#efefef");
      root.style.setProperty("--primarybackground", "#000");
      buttonicon.classList.remove("ri-sun-fill");
      buttonicon.classList.add("ri-moon-clear-fill");
      button.style.backgroundColor = "dodgerblue";

      body.style.cursor = "url(./Images/whitecursor.png),default";
      darkmode = true;
    }, 200);
  } else if (no == 2) {
    gsap.to("#button", {
      opacity: 0,
    });
    setTimeout(() => {
      gsap.to("#button", {
        opacity: 1,
      });
      root.style.setProperty("--primaryforeground", "#000");
      root.style.setProperty("--primarybackground", "#efefef");
      buttonicon.classList.remove("ri-moon-clear-fill");
      buttonicon.classList.add("ri-sun-fill");
      button.style.backgroundColor = "orange";

      body.style.cursor = "url(./Images/blackcursor.png),default";
      darkmode = false;

      no = 0;
      console.log(no);
    }, 200);
  }
});

// project.js
let searchbut = document.querySelector("#searchbut");
let searchinput = document.querySelector("#searchinput");

let innerh1values = [];
let outerHTMLValues = [];
let commonParentDivValues = [];

let allprojecth1 = document.querySelectorAll(".right11 h1");

allprojecth1.forEach(function (h1) {
  innerh1values.push(h1.innerHTML.split(" "));
  outerHTMLValues.push(h1.outerHTML);
  let commonParentDiv = h1.closest(".allprojects-inner");
  if (commonParentDiv) {
    commonParentDivValues.push(commonParentDiv.outerHTML);
  }
});

localStorage.setItem("innerh1", JSON.stringify(innerh1values));
localStorage.setItem("outerHTMLValues", JSON.stringify(outerHTMLValues));
localStorage.setItem("commonParentDivValues", JSON.stringify(commonParentDivValues));



searchbut.addEventListener("click", () => {
    let searchTerm = undefined
    searchTerm = searchinput.value;
    localStorage.setItem("searchTerm", searchTerm);
    window.location.href="./searchresult.html"
    // ... other actions
  });
  
