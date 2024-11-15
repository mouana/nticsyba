let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent ++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

ScrollReveal().reveal('.contetn-somme', {
  delay: 100,
  duration: 2000,
  origin: 'top',
  distance: '10px'

});
ScrollReveal().reveal('.contetn-somme');
ScrollReveal().reveal('.contetn-somme-2', {
  delay: 200,
  duration: 4000,
  origin: 'top',
  distance: '10px'

});
ScrollReveal().reveal('.contetn-somme-2');
ScrollReveal().reveal('.partenair', {
  delay: 200,
  duration: 4000,
  origin: 'top',
  distance: '10px'

});
ScrollReveal().reveal('.partenair');