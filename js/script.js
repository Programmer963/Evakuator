// burger
const burger = document.getElementById('burger');
const navList = document.querySelector('.header__nav-list');
const navLinks = document.querySelectorAll(".header__nav-link");

function openMenuByBurger() {
    navList.classList.toggle('active');
    burger.classList.toggle('active');
}

burger.addEventListener('click', openMenuByBurger);

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navList.classList.remove('active');
        burger.classList.remove('active');
    });
});


// Функция для обработки пересечения элементов с областью видимости
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show-animation');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

function observeElements(selectors) {
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  });
}

let selectors = [
    '.main-block-content',
    '.about-us-image',
    '.about-us-text',
    '.par-bottom',
    '.swiper-slide',
    '.services-card',
    '.portfolio-project',

    '.footer-info',
    '.footer-links',
    '.footer-services',
    '.footer-contacts'
];

observeElements(selectors);


// Фильтр
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.portfolio-filter li');
    const projects = document.querySelectorAll('.portfolio-project');

    const setFilter = (filter) => {
        filterItems.forEach(i => i.classList.remove('active'));
        document.querySelector(`.portfolio-filter li[data-filter="${filter}"]`).classList.add('active');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');
            project.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        })
    }
     
    setFilter('all')

    filterItems.forEach(item => {
        item.addEventListener('click', () => setFilter(item.getAttribute('data-filter')));
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth < 968) {
            setFilter('all');
        }
    });
});

// Удаление картинок
document.addEventListener("DOMContentLoaded", function () {
    function updateProjects() {
        let limit = window.innerWidth <= 540 ? 6 : window.innerWidth <= 968 ? 9 : Infinity;

        document.querySelectorAll(".portfolio-project").forEach((el, index) => {
            el.style.display = index >= limit ? "none" : "block";
        });
    }

    updateProjects();
    window.addEventListener("resize", updateProjects);
});
