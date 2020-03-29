function setUpEvents() {
  var time = 1000;
  var path = 'img\\'
  var i = 1;

  function changeImg() {
    var imageData = new Image();
    imageData.onload = function() {
      document.slide.src = path + i.toString() + '.jpg';
      document.getElementById('num').textContent = i;
      i = i + 1
      setTimeout(changeImg, time);
    }
    imageData.onerror = function() {
      i = 1;
      changeImg();
    }
    imageData.src = path + i.toString() + '.jpg';
  }
  changeImg();
}

window.onload = function() {
  setUpEvents();
}
