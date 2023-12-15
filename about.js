
var check = document.querySelector("#check");
var nav = document.querySelector("#nav");
var hamburgermenu = document.querySelector("#menu-icon");
var navright = document.querySelector("#topright h1");
var navelem1 = document.querySelector("#navelem1");
var navelem2 = document.querySelector("#navelem2");
var navelem3 = document.querySelector("#navelem3");
var navelem4 = document.querySelector("#navelem4");
var navelem1link = document.querySelector("#navelem1link");
var navelem2link = document.querySelector("#navelem2link");
var navelem3link = document.querySelector("#navelem3link");
var navelem4link = document.querySelector("#navelem4link");
var allnavelem = document.querySelectorAll(".elem1");
var page2 = document.querySelector("#page2");
Shery.textAnimate("#topright h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 10,
});
navelem1.addEventListener("mouseover", () => {
  navright.innerHTML = "HOME";
});
navelem1.addEventListener("mouseout", () => {
  navright.innerHTML = "ABOUT";
});
navelem2.addEventListener("mouseover", () => {
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
});
navelem2.addEventListener("mouseout", () => {
  navright.innerHTML = "ABOUT";
});
navelem3.addEventListener("mouseover", () => {
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
});

navelem3.addEventListener("mouseout", () => {
  navright.innerHTML = "ABOUT";
});
navelem4.addEventListener("mouseover", () => {
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
});

navelem4.addEventListener("mouseout", () => {
  navright.innerHTML = "ABOUT";
});


    navelem1link.style.display = "none";
    navelem2link.style.display = "none";
    navelem3link.style.display = "none";
    navelem4link.style.display = "none";


check.addEventListener("change", function (e) {
  if (e.target.checked) {
    if (screen.width < 420) {
      nav.style.opacity = "1";
      nav.style.width = "100vw";
      document.querySelector("#nav h1").style.opacity = "1";
      hamburgermenu.classList.remove("ri-menu-line");
      hamburgermenu.classList.add("ri-close-line");
      // allnavelem.stlye.display="block";
      // navelem1link.stlye.display="block";
      // navelem2link.stlye.display="block";
      // navelem3link.stlye.display="block";
      // navelem4link.stlye.display="block";
      // allnavelem.style.display = "block";
      navelem1link.style.display = "block";
      navelem2link.style.display = "block";
      navelem3link.style.display = "block";
      navelem4link.style.display = "block";

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
      // allnavelem.style.display = "block";
      navelem1link.style.display = "block";
      navelem2link.style.display = "block";
      navelem3link.style.display = "block";
      navelem4link.style.display = "block";

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
  } else {
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
var loader = document.getElementById("preloader");

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
      loader.style.opacity = "1";
      loader.style.zIndex = "1000";
      setTimeout(() => {
        loader.style.display = "none";
        loader.style.zIndex = "100";
      }, 1000);
      root.style.setProperty("--primaryforeground", "#efefef");
      root.style.setProperty("--primarybackground", "#000");
      buttonicon.classList.remove("ri-sun-fill");
      buttonicon.classList.add("ri-moon-clear-fill");
      button.style.backgroundColor = "dodgerblue";

      body.style.cursor = "url(./Images/whitecursor.png),default";
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

Shery.makeMagnet("#booktooltip" /* Element to target.*/, {
  duration: 1,
});
Shery.makeMagnet("#websitetooltip" /* Element to target.*/, {
  duration: 1,
});
Shery.makeMagnet("#calendartooltip" /* Element to target.*/, {
  duration: 1,
});
Shery.makeMagnet("#aitooltip" /* Element to target.*/, {
  duration: 1,
});


var exp1 = document.querySelector("#experiences h1:nth-child(1)");
var exp2 = document.querySelector("#experiences h1:nth-child(2)");
var exp3 = document.querySelector("#experiences h1:nth-child(3)");
var exp4 = document.querySelector("#experiences h1:nth-child(4)");
var exp5 = document.querySelector("#experiences h1:nth-child(5)");

exp1.addEventListener("mouseover",()=>{
  exp1.innerHTML="ALAYA PHARMA: Logo design and web development.";
  exp1.style.fontSize = "3vw"
})
exp1.addEventListener("mouseout",()=>{
  exp1.innerHTML="ALAYA PHARMA";
  exp1.style.fontSize = "4vw"
})
exp2.addEventListener("mouseover",()=>{
  exp2.innerHTML="BE BELLE: Product packaging design.";
  exp2.style.fontSize = "3vw"
})
exp2.addEventListener("mouseout",()=>{
  exp2.innerHTML="BE BELLE";
  exp2.style.fontSize = "4vw"
})
exp3.addEventListener("mouseover",()=>{
  exp3.innerHTML="HOMEDIRECTEYECARE: Business web development.";
  exp3.style.fontSize = "3vw"
})
exp3.addEventListener("mouseout",()=>{
  exp3.innerHTML="HOMEDIRECTEYECARE";
  exp3.style.fontSize = "4vw"
})
exp4.addEventListener("mouseover",()=>{
  exp4.innerHTML="GLASS GEEKS: Social media post design, e-commerce web development, and logo design.";
  exp4.style.fontSize = "3vw"
})
exp4.addEventListener("mouseout",()=>{
  exp4.innerHTML="GLASS GEEKS";
  exp4.style.fontSize = "4vw"
})
exp5.addEventListener("mouseover",()=>{
  exp5.innerHTML="THRIVEHIVE: Web development.";
  exp5.style.fontSize = "3vw"
})
exp5.addEventListener("mouseout",()=>{
  exp5.innerHTML="THRIVEHIVE";
  exp5.style.fontSize = "4vw"
})
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});