// Bringing the register buttons from HTML

var btnWorshop1 = document.getElementById("work-1");
var btnWorshop2 = document.getElementById("work-2");
var btnWorshop3 = document.getElementById("work-3");
var btnWorshop4 = document.getElementById("work-4");

// __________________________________________________________________

btnWorshop1.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://forms.gle/MR1nDapPMevcXMKp7", "_blank");
});
btnWorshop2.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://forms.gle/vcdiGEpfG94YR16a7", "_blank");
});
btnWorshop3.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://forms.gle/prWQQhWxwh88cnqo8", "_blank");
});
