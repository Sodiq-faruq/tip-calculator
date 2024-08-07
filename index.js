let tipPercent = document.querySelectorAll(".tipPercent");
let tip = document.querySelector(".tip");

let total = document.querySelector(".total");

for (let i = 0; i < tipPercent.length; i++) {
  tipPercent[i].addEventListener("click", function () {
    let bil = Number(document.querySelector(".bil").value);
    let people = Number(document.querySelector(".people").value);

    let tipPercents = tipPercent[i].textContent;

    tipPercents = tipPercents.slice(0, -1);

    let tips = Number(tipPercents);

    let calcTip = (+bil * (tips / 100)) / people;
    tip.textContent = calcTip.toFixed(2);

    let totals = bil / calcTip;
    total.textContent = totals.toFixed(2);
  });
}
