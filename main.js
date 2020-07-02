const learnMoreBtn = document.getElementById("learnMore");
const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");
const details = document.querySelector(".details");
const body = document.getElementsByTagName("body")[0];

learnMoreBtn.addEventListener("click", (e) => {
  toggleHide();
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
  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
  } else {
    details.classList.add("hidden");
  }
};
