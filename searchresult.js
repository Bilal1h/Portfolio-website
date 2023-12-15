var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});




var check = document.querySelector("#check");
var nav = document.querySelector("#nav");
var hamburgermenu = document.querySelector("#menu-icon");
var allnavelem = document.querySelector(".elem1 h2")
var page2content = document.querySelector("#page2-content");
check.addEventListener("change", function (e) {
  if (e.target.checked) {
    if (screen.width < 420) {
      nav.style.opacity = "1";
      nav.style.width = "350px";
      document.querySelector("#nav h1").style.opacity = "1";
      hamburgermenu.classList.remove("ri-menu-line");
      hamburgermenu.classList.add("ri-close-line");
      allnavelem.style.pointerEvents="all"

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
      nav.style.width = "450px";
      document.querySelector("#nav h1").style.opacity = "1";
      hamburgermenu.classList.remove("ri-menu-line");
      hamburgermenu.classList.add("ri-close-line");
      allnavelem.style.pointerEvents="none"

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









const searchTerm = localStorage.getItem("searchTerm");
const resultDiv = document.querySelector(".results");

if (searchTerm && resultDiv) {
  console.log("Search Term:", searchTerm);

  const commonParentDivValues = localStorage.getItem("commonParentDivValues");
  if (commonParentDivValues) {
    const parsedCommonParentDivValues = JSON.parse(commonParentDivValues);
    console.log("Common Parent div HTML values:", parsedCommonParentDivValues);

    parsedCommonParentDivValues.forEach((commonParentDivHTML, index) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = commonParentDivHTML;

      const commonParentDiv = tempDiv.querySelector(".right11");

      if (commonParentDiv) {
        const h1Text = commonParentDiv.querySelector("h1").textContent;
        
        // Check if the search term is present in the h1 text
        if (h1Text.includes(searchTerm)) {
          commonParentDiv.classList.add("appended-div");
          commonParentDiv.classList.add("dark-light");
          resultDiv.appendChild(commonParentDiv.cloneNode(true));

          // Add a horizontal rule except for the last element
          if (index < parsedCommonParentDivValues.length - 1) {
            resultDiv.appendChild(document.createElement("hr"));
          }
        }
      } else {
        console.log("Common parent div not found in the retrieved HTML.");
      }
    });
  } else {
    console.log("Common Parent div HTML values not found in localStorage.");
  }
} else {
  console.log("No search term or #results found in localStorage.");
}
