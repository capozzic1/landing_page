var slider = document.querySelector(".slider");
var output = document.querySelector(".counter");
output.innerHTML = slider.value; // Display the default slider value
var basic = 39;
var standard = 79;
var professional = 149;
var enterprise = 399;
var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');
var p4 = document.querySelector('.p4');
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var val = this.value

  if (val == 2000) {

    p1.innerHTML = basic + 100;
    p2.innerHTML = standard + 100;
    p3.innerHTML = professional + 100;
    p4.innerHTML = enterprise + 100;
  } else if (val == 3000) {
    p1.innerHTML = basic + 200;
    p2.innerHTML = standard + 200;
    p3.innerHTML = professional + 200;
    p4.innerHTML = enterprise + 200;
  } else if (val == 4000) {
    p1.innerHTML = basic + 300;
    p2.innerHTML = standard + 300;
    p3.innerHTML = professional + 300;
    p4.innerHTML = enterprise + 300;
  } else if (val == 1000) {
    p1.innerHTML = basic;
    p2.innerHTML = standard;
    p3.innerHTML = professional;
    p4.innerHTML = enterprise;
  }

  output.innerHTML = this.value;

}
