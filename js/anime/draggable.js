document.getElementsByClassName("banner-area-2")[0].style.display = "none";
let imagespacechildren = document.getElementsByClassName("image-area")[0]
  .children;

function drag(evt) {
  evt.dataTransfer.setData("image", evt.target.id);
}

function drop(evt) {
  evt.preventDefault();
  var data = evt.dataTransfer.getData("image");
  var image = document.getElementById(data);
  evt.target.appendChild(image);
  let numberofImageLeft = countImages();
  if (numberofImageLeft === 0) {
    document.getElementsByClassName("banner-area-2")[0].style.display = "flex";
    document.getElementsByClassName("banner-area")[0].style.display = "none";
  }
}

function countImages() {
  let count = 0;
  for (let i = 0; i < imagespacechildren.length; i++) {
    count += imagespacechildren[i].childElementCount;
  }
  return count;
}

function allowDrop(evt) {
  evt.preventDefault();
}
