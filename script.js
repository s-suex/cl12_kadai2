document.querySelectorAll('.chou').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left=(Math.random()*800)+"px";
    el.style.top=(Math.random()*400)+"px";

  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left=(Math.random()*300+400)+"px";
    el.style.top=(Math.random()*80+200)+"px";

  });
});