class MobileNavbar {
  constructor(iconMenu, listmenu, navLinks) {
      this.menu = document.querySelector(iconMenu);
      this.navList = document.querySelector(listmenu);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.menu.classList.toggle(this.activeClass); // Adicione esta linha para alternar a classe no botão
  }

  addClickEvent() {
      this.menu.addEventListener("click", this.handleClick);
  }

  init() {
      if (this.menu) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".material-symbols-outlined",
  ".listmenu",
  ".listmenu li"
);

mobileNavbar.init();


/*carrosel-por que usar o men plus*/
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let startX = 0;
let isDragging = false;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  e.preventDefault(); // Evita a seleção de texto durante o arrasto
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const deltaX = startX - currentX;
  
  // Ajuste o valor 10 de acordo com a sensibilidade do arrasto desejada
  if (deltaX > 10 && currentIndex < carouselItems.length - 1) {
    currentIndex++;
    isDragging = false;
  } else if (deltaX < -10 && currentIndex > 0) {
    currentIndex--;
    isDragging = false;
  }
  
  const itemWidth = carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Para suporte a dispositivos móveis (toque/swipe)
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;
  
  if (deltaX > 50 && currentIndex < carouselItems.length - 1) {
    currentIndex++;
    startX = currentX;
  } else if (deltaX < -50 && currentIndex > 0) {
    currentIndex--;
    startX = currentX;
  }
  
  const itemWidth = carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});


//reutilizando o código do carrossel para a nova seção "carousel-container-produto"
const carouselContainerProduto = document.querySelector('.carousel-container-produto');
const carouselProduto = carouselContainerProduto.querySelector('.carousel-produto');
const carouselItemsProduto = carouselProduto.querySelectorAll('.item-produto');

let currentIndexProduto = 0;
let startXProduto = 0;
let isDraggingProduto = false;

carouselProduto.addEventListener('mousedown', (e) => {
  isDraggingProduto = true;
  startXProduto = e.clientX;
  e.preventDefault();
});

carouselProduto.addEventListener('mousemove', (e) => {
  if (!isDraggingProduto) return;
  const currentXProduto = e.clientX;
  const deltaXProduto = startXProduto - currentXProduto;

  if (deltaXProduto > 10 && currentIndexProduto < carouselItemsProduto.length - 1) {
    currentIndexProduto++;
    isDraggingProduto = false;
  } else if (deltaXProduto < -10 && currentIndexProduto > 0) {
    currentIndexProduto--;
    isDraggingProduto = false;
  }

  const itemWidthProduto = carouselItemsProduto[0].offsetWidth;
  carouselProduto.style.transform = `translateX(-${currentIndexProduto * itemWidthProduto}px)`;
});

carouselProduto.addEventListener('mouseup', () => {
  isDraggingProduto = false;
});

carouselProduto.addEventListener('mouseleave', () => {
  isDraggingProduto = false;
});

carouselProduto.addEventListener('touchstart', (e) => {
  startXProduto = e.touches[0].clientX;
});

carouselProduto.addEventListener('touchmove', (e) => {
  const currentXProduto = e.touches[0].clientX;
  const deltaXProduto = startXProduto - currentXProduto;

  if (deltaXProduto > 50 && currentIndexProduto < carouselItemsProduto.length - 1) {
    currentIndexProduto++;
    startXProduto = currentXProduto;
  } else if (deltaXProduto < -50 && currentIndexProduto > 0) {
    currentIndexProduto--;
    startXProduto = currentXProduto;
  }

  const itemWidthProduto = carouselItemsProduto[0].offsetWidth;
  carouselProduto.style.transform = `translateX(-${currentIndexProduto * itemWidthProduto}px)`;
});


/*FAQ*/ 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

var scrollTolowBtn = document.getElementById('scrollToMedium');

function scrollToBellow() {
  console.log('a')
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
    
  })}