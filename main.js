var test = document.getElementById("test");
var time = new Date();
var hour = time.getHours();
var minut = time.getMinutes();
var second = time.getSeconds();
var pm;

if (hour <= 9) {
  hour = "0" + hour;
}
if (minut <= 9) {
  minut = "0" + minut;
}
if (second <= 9) {
  second = "0" + second;
}
if (hour <= 12) {
  pm = "AM";
} else {
  pm = "PM";
}

test.innerHTML = hour + " : " + minut + " : " + second + " " + pm;

// var test = document.getElementById("test");
// var time = new Date();
// var hour = time.getHours();
// var minut = time.getMinutes();
// var second = time.getSeconds();
// var am;

// if (hour <= 9) {
//   hour = "0" + hour;
// }
// if (minut <= 9) {
//   minut = "0" + minut;
// }
// if (second <= 9) {
//   second = "0" + second;
// }
// if (hour <= 12) {
//   am = "AM";
// } else {
//   am = "PM";
// }
