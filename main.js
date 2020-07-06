const learnMoreBtn = document.getElementById("learnMore");
const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");
const details = document.querySelector(".details");
const body = document.getElementsByTagName("body")[0];

learnMoreBtn.addEventListener("click", (e) => {
  toggleHide(e);
});

const toggleFlexDirection = (element) => {
  let isColumn = element.style.flexDirection === "column" ? true : false;
  if (isColumn) {
    element.style.flexDirection = "row";
  } else {
    element.style.flexDirection = "column";
  }
};

const toggleHide = (e) => {
  let targetElement;
  if (e.target.tagName === "P") {
    targetElement = e.target.parentElement.previousElementSibling;
  } else if (e.target.tagName === "BUTTON") {
    targetElement = e.target.previousElementSibling;
  }

  if (targetElement.classList.contains("hidden")) {
    targetElement.classList.remove("hidden");
    targetElement.nextElementSibling.firstElementChild.innerText =
      "Hide Details";
  } else {
    targetElement.classList.add("hidden");
    targetElement.nextElementSibling.firstElementChild.innerText = "Show More";
  }
};
