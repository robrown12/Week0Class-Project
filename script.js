const boxes = document.querySelectorAll(".box");

document.getElementById("changeBox1").addEventListener("click", () => {
  boxes[0].style.backgroundColor = "yellow";
  boxes[0].style.border = "4px solid orange";
});

document.getElementById("changeBox2").addEventListener("click", () => {
  boxes[1].style.backgroundColor = "purple";
  boxes[1].style.border = "4px solid pink";
});

document.getElementById("changeBox3").addEventListener("click", () => {
  boxes[2].style.backgroundColor = "teal";
  boxes[2].style.border = "4px solid cyan";
});

document.getElementById("changeAll").addEventListener("click", () => {
  boxes.forEach((box) => {
     boxes[0].style.backgroundColor = "yellow";
     boxes[0].style.border = "4px solid orange";
     boxes[1].style.backgroundColor = "purple";
     boxes[1].style.border = "4px solid pink";
     boxes[2].style.backgroundColor = "teal";
     boxes[2].style.border = "4px solid cyan";
  }); 
});

document.getElementById("resetColors").addEventListener("click", () => {
  boxes[0].style.backgroundColor = "red";
  boxes[1].style.backgroundColor = "green";
  boxes[2].style.backgroundColor = "blue";
  boxes.forEach((box) => {
    boxes[0].style.border = "4px solid purple";
    boxes[1].style.border = "4px dotted blue";
    boxes[2].style.border = "4px solid yellow";
  });
});

document.getElementById("hideBox1").addEventListener("click", () => {
  boxes[0].style.visibility = "hidden";
});

document.getElementById("hideBox2").addEventListener("click", () => {
  boxes[1].style.visibility = "hidden";
});

document.getElementById("hideBox3").addEventListener("click", () => {
  boxes[2].style.visibility = "hidden";
});

document.getElementById("hideAll").addEventListener("click", () => {
  boxes[0].style.visibility = "hidden";
  boxes[1].style.visibility = "hidden";
  boxes[2].style.visibility = "hidden";
});

document.getElementById("showAll").addEventListener("click", () => {
  boxes[0].style.visibility = "initial";
  boxes[1].style.visibility = "initial";
  boxes[2].style.visibility = "initial";
});