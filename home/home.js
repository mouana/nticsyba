
document.addEventListener("DOMContentLoaded", function () {
// slideshow
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active_1 = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
  if (active_1 + 1 > lengthItems) {
    active_1 = 0;
  } else {
    active_1 += 1;
  }
  reloadSlider();
};
prev.onclick = () => {
  if (active_1 - 1 < 0) {
    active_1 = lengthItems;
  } else {
    active_1 -= 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  next.click();
}, 5000);
function reloadSlider() {
  let checkLeft = items[active_1].offsetLeft;
  list.style.left = -checkLeft + "px";
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}
// *******************************************************

// callender
$(document).ready(function() {
  var daysList = $(".days");
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonthIndex = currentDate.getMonth(); 
  var currentYear = currentDate.getFullYear();

  var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  $("#current-month").html(monthNames[currentMonthIndex] + "<br><span style='font-size: 18px'>" + currentYear + "</span>");

  for (var i = 1; i <= 31; i++) {
      var listItem = $("<li>" + i + "</li>");
      if (i === currentDay) {
          listItem.addClass("active_callender");
      }
      daysList.append(listItem);
  }
});


// oservation api

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('showDiplom');
    } else {
      entry.target.classList.remove('showDiplom');
    }
  });
});
const hiddenElement = document.querySelectorAll('.form-typ .diplom_hiden');
const hiddenElement_2 = document.querySelectorAll('.big, .itemfirst')
const hiddenElement_3 =  document.querySelectorAll('.evenements_institution .evenement_1')
hiddenElement.forEach((element) => observer.observe(element));
hiddenElement_2.forEach((element) => observer.observe(element));
hiddenElement_3.forEach((element) => observer.observe(element));


$(document).ready(function() {
  function moveImages() {
      $('.stag-empl').animate({
          marginLeft: '-=100px'
      }, 2000, 'linear', function() {
          $(this).append($(this).find('.emplois:first-child')).css('marginLeft', '0');
      });
  }

  setInterval(moveImages,500); 
});
});


// event and callnd
document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('.slider_for_event .list_for_event');
    const items = document.querySelectorAll('.slider_for_event .list_for_event .item_for_event');
    const prevButton = document.getElementById('prev_event');
    const nextButton = document.getElementById('next_event');
    let currentIndex = 0;
    const slideWidth = items[0].offsetWidth;
  
    function goToSlide(index) {
        list.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }
  
    function nextSlide() {
        if (currentIndex === items.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentIndex + 1);
        }
    }
  
    function prevSlide() {
        if (currentIndex === 0) {
            goToSlide(items.length - 1);
        } else {
            goToSlide(currentIndex - 1);
        }
    }
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    setInterval(nextSlide, 5000); 
  });