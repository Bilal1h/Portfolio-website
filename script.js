
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
    delay: 0,
    duration: .1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 1,
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
    delay: 0,
    duration: .1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 1,
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
    delay: 0,
    duration: .1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 1,
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

//hero heading animation
var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll(".elem h1");
  var index = 0;
  var animating = false;
  document.querySelector("#bottomhero").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], {
            top: "100%",
          });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    } else {
    }
  });
});

Shery.textAnimate("#page2-content h2" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  // delay: 0.1,
  duration: 0.4,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 10,
});

Shery.makeMagnet("#left img" /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  strength: 1,
});

let no = 0;
let root = document.documentElement;
let button = document.getElementById("button");
let buttonicon = document.querySelector("#button i");
let body = document.querySelector("body");

let aboutpara = document.querySelector("#aboutpara");
let homepage = document.querySelector("#homepage");
let elemofhomepage1 = document.querySelector("#elem1");
let elemofhomepage2 = document.querySelector("#elem2");
let elemofhomepage3 = document.querySelector("#elem3");
let elemofhomepage4 = document.querySelector("#elem4");


if (no == 0) {
  aboutpara.addEventListener("mouseover", () => {
    aboutpara.style.background = "none";
    aboutpara.style.backgroundColor = "var(--homepagebg)";
    aboutpara.style.color = "var(--homepagefg)";
    gsap.to("#tophero , #bottomleft", {
      y: "-250%",
      // scrub:.4
      duration: 1,
      opacity: 0,
    });
    setTimeout(() => {
      gsap.to("#tophero , #bottomleft", {
        y: "0%",
        // scrub:.4
        duration: 1,
        opacity: 1,
      });

      elemofhomepage1.style.color = "var(--homepagebg)";
      elemofhomepage2.style.color = "var(--homepagebg)";
      elemofhomepage3.style.color = "var(--homepagebg)";
      elemofhomepage4.style.color = "var(--homepagebg)";
      aboutpara.style.background = "none";
      aboutpara.style.color = "var(--homepagebg)";
      homepage.style.background = "url(./Images/tempimages/about-gradient.png) no-repeat";
      homepage.style.backgroundSize = "cover";
      document.querySelector("##bottomleft #box1 img").src =
        "./Images/Code typing.gif";
      document.querySelector("##bottomleft #box2 img").src =
        "./Images/programming-bgremove.gif";
    }, 1000);
  });

  aboutpara.addEventListener("mouseout", () => {
    aboutpara.backgroundColor = "none";
    aboutpara.style.background = "none";

    gsap.to("#tophero , #bottomleft", {
      y: "-250%",
      // scrub:.4
      duration: 1,
      opacity: 0,
    });
    setTimeout(
      () => {
        gsap.to("#tophero , #bottomleft", {
          y: "0%",
          // scrub:.4
          duration: 1,
          opacity: 1,
        });

        elemofhomepage1.style.color = "#000";
        elemofhomepage2.style.color = "#000";
        elemofhomepage3.style.color = "#000";
        elemofhomepage4.style.color = "#000";
        aboutpara.style.color = "var(--homepagebg)";
        aboutpara.style.background =
          "url(./Images/tempimages/about-gradient.png) no-repeat";
        aboutpara.style.backgroundSize = "cover";
        homepage.style.background = "none";
      },

      1000
    );
  });
}

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
      root.style.setProperty("--homepagebg", "#000");
      root.style.setProperty("--homepagefg", "#efefef");
      buttonicon.classList.remove("ri-sun-fill");
      buttonicon.classList.add("ri-moon-clear-fill");
      button.style.backgroundColor = "dodgerblue";
      body.style.cursor = "url(./Images/whitecursor.png),default";
      homepage.style.backgroundColor = "var(--homepagebg)";
      elemofhomepage1.style.color = "var(--homepagefg)";
      elemofhomepage2.style.color = "var(--homepagefg)";
      elemofhomepage3.style.color = "var(--homepagefg)";
      elemofhomepage4.style.color = "var(--homepagefg)";
      aboutpara.style.color = "var(--homepagefg)";
      aboutpara.addEventListener("mouseover", () => {
        aboutpara.style.background = "none";
        aboutpara.style.backgroundColor = "var(--homepagebg)";
        aboutpara.style.color = "var(--homepagefg)";
        gsap.to("#tophero , #bottomleft", {
          y: "-250%",
          // scrub:.4
          duration: 1,
          opacity: 0,
        });
        setTimeout(() => {
          gsap.to("#tophero , #bottomleft", {
            y: "0%",
            // scrub:.4
            duration: 1,
            opacity: 1,
          });

          elemofhomepage1.style.color = "var(--homepagefg)";
          elemofhomepage2.style.color = "var(--homepagefg)";
          elemofhomepage3.style.color = "var(--homepagefg)";
          elemofhomepage4.style.color = "var(--homepagefg)";
          aboutpara.style.background = "none";
          aboutpara.style.color = "var(--homepagefg)";
          homepage.style.background =
            "url(./Images/tempimages/about-gradient.png) no-repeat";
          homepage.style.backgroundSize = "cover";
          document.querySelector("##bottomleft #box1 img").src =
            "./Images/Code typing.gif";
          document.querySelector("##bottomleft #box2 img").src =
            "./Images/programming-bgremove.gif";
        }, 1000);
      });

      aboutpara.addEventListener("mouseout", () => {
        aboutpara.backgroundColor = "none";
        aboutpara.style.background = "none";

        gsap.to("#tophero , #bottomleft", {
          y: "-250%",
          // scrub:.4
          duration: 1,
          opacity: 0,
        });
        setTimeout(
          () => {
            gsap.to("#tophero , #bottomleft", {
              y: "0%",
              // scrub:.4
              duration: 1,
              opacity: 1,
            });

            elemofhomepage1.style.color = "var(--homepagefg)";
            elemofhomepage2.style.color = "var(--homepagefg)";
            elemofhomepage3.style.color = "var(--homepagefg)";
            elemofhomepage4.style.color = "var(--homepagefg)";
            aboutpara.style.color = "var(--homepagefg)";
            aboutpara.style.background =
              "url(./Images/tempimages/about-gradient.png) no-repeat";
            aboutpara.style.backgroundSize = "cover";
            homepage.style.background = "none";
            homepage.style.backgroundColor = "var(--homepagebg)";
          },

          1000
        );
      });
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
      root.style.setProperty("--homepagebg", "#efefef");
      root.style.setProperty("--homepagefg", "#000");
      buttonicon.classList.remove("ri-moon-clear-fill");
      buttonicon.classList.add("ri-sun-fill");
      button.style.backgroundColor = "orange";
      aboutpara.style.color = "var(--homepagebg)";

      body.style.cursor = "url(./Images/tempimages/blackcursor.png),default";
      aboutpara.addEventListener("mouseover", () => {
        aboutpara.style.background = "none";
        aboutpara.style.backgroundColor = "var(--homepagebg)";
        aboutpara.style.color = "var(--homepagefg)";
        gsap.to("#tophero , #bottomleft", {
          y: "-250%",
          // scrub:.4
          duration: 1,
          opacity: 0,
        });
        setTimeout(() => {
          gsap.to("#tophero , #bottomleft", {
            y: "0%",
            // scrub:.4
            duration: 1,
            opacity: 1,
          });

          elemofhomepage1.style.color = "var(--homepagebg)";
          elemofhomepage2.style.color = "var(--homepagebg)";
          elemofhomepage3.style.color = "var(--homepagebg)";
          elemofhomepage4.style.color = "var(--homepagebg)";
          aboutpara.style.background = "none";
          aboutpara.style.color = "var(--homepagebg)";
          homepage.style.background =
            "url(./Images/tempimages/about-gradient.png) no-repeat";
          homepage.style.backgroundSize = "cover";
          document.querySelector("##bottomleft #box1 img").src =
            "./Images/tempimages/Code typing.gif";
          document.querySelector("##bottomleft #box2 img").src =
            "./Images/tempimages/programming-bgremove.gif";
        }, 1000);
      });

      aboutpara.addEventListener("mouseout", () => {
        aboutpara.backgroundColor = "none";
        aboutpara.style.background = "none";

        gsap.to("#tophero , #bottomleft", {
          y: "-250%",
          // scrub:.4
          duration: 1,
          opacity: 0,
        });
        setTimeout(
          () => {
            gsap.to("#tophero , #bottomleft", {
              y: "0%",
              // scrub:.4
              duration: 1,
              opacity: 1,
            });

            elemofhomepage1.style.color = "#000";
            elemofhomepage2.style.color = "#000";
            elemofhomepage3.style.color = "#000";
            elemofhomepage4.style.color = "#000";
            aboutpara.style.color = "var(--homepagebg)";
            aboutpara.style.background =
              "url(./Images/tempimages/about-gradient.png) no-repeat";
            aboutpara.style.backgroundSize = "cover";
            homepage.style.background = "none";
          },

          1000
        );
      });

      no = 0;
      console.log(no);
    }, 200);
  }
});

Shery.hoverWithMediaCircle(".elem h1" /* Element to target.*/, {
  images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
Shery.imageMasker(".box img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Click me!",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".box img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
