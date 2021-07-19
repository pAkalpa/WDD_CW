const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel.className);
    switch (panel.className) {
      case "panel img1 active":
        displayDescription(1);
        break;
      case "panel img2 active":
        displayDescription(2);
        break;
      case "panel img3 active":
        displayDescription(3);
        break;
      case "panel img4 active":
        displayDescription(4);
        break;
      case "panel img5 active":
        displayDescription(5);
        break;
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function displayDescription(number) {
  console.log(number);
  let img1Description = ``;
  let img2Description = ``;
  let img3Description = ``;
  let img4Description = ``;
  let img5Description = ``;
  switch (number) {
    case 1:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img1Description;
      break;
    case 2:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img2Description;
      break;
    case 3:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img3Description;
      break;
    case 4:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img4Description;
      break;
    case 5:
      document.getElementById("showSnap").innerHTML = "";
      document.getElementById("showSnap").innerHTML = img5Description;
      break;
  }
}

function setFontColour(form) {
  let selectedColor = fontColour[fontColour.selectedIndex].value;
  console.log(selectedColor);
  switch (selectedColor) {
    case "Color#1":
      colorChanger(1, "red");
      break;
    case "Color#2":
      colorChanger(1, "blue");
      break;
    case "Color#3":
      colorChanger(1, "green");
      break;
    case "Color#4":
      colorChanger(1, "Orange");
      break;
  }
}

function setBackgroundColour(form) {
  let selectedColor = backgroundColour[backgroundColour.selectedIndex].value;
  switch (selectedColor) {
    case "Color#1":
      colorChanger(2, "red");
      break;
    case "Color#2":
      colorChanger(2, "blue");
      break;
    case "Color#3":
      colorChanger(2, "green");
      break;
    case "Color#4":
      colorChanger(2, "Orange");
      break;
  }
}

function colorChanger(number, color) {
  if (number === 1) {
    let allElements = document.getElementsByClassName("snapPageContainer");
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.color = color;
    }
  } else if (number === 2) {
    document.body.style.backgroundColor = color;
  }
}
