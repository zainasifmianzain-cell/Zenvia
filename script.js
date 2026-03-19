const wrapper = document.getElementById('headline-wrapper');
const headlines = document.querySelectorAll('.headline');
let currentIndex = 0;

function slideHeadlines() {
  currentIndex++;

  if (currentIndex >= headlines.length) {
    currentIndex = 0;
  }
  const stepHeight = headlines[0].offsetHeight;
  wrapper.style.transform = `translateY(-${currentIndex * stepHeight}px)`;
}

setInterval(slideHeadlines, 3000);


const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu');


bars.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


const search= document.getElementById('searchIcon');
const input = document.getElementsByClassName("searchInput");


search.addEventListener('click', () => {
  input.classList.toggle('active2');
});

