// Bringing the register buttons from HTML

var btnWorshop1 = document.getElementById("work-1");
var btnWorshop2 = document.getElementById("work-2");
var btnWorshop3 = document.getElementById("work-3");
var btnWorshop4 = document.getElementById("work-4");

// __________________________________________________________________

btnWorshop1.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://youtu.be/EUu1E_YKGTw", "_blank");
});
btnWorshop2.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://youtu.be/PN3VqbZqmD8", "_blank");
});
btnWorshop3.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://forms.gle/prWQQhWxwh88cnqo8", "_blank");
});
btnWorshop4.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("https://forms.gle/mCiVubGcEjdMwEhG8", "_blank");
});
