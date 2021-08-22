const loadLater = document.querySelector(".loadLater");
const head = document.querySelector("head");

if (loadLater && head) {
   head.insertAdjacentHTML("beforeend", loadLater.innerHTML);
}

const myLazy = new LazyLoad({ elements_selector: ".photo" });

//Background image lazy loading realization
const offer = document.querySelector(".offer");
window.addEventListener("scroll", scrollYShow);

function scrollYShow() {
   if (offer.offsetTop - scrollY <= 900) {
      // offer.style.backgroundImage = "url('/assets/img/fashion.jpg')";
      offer.style.backgroundImage = `url('${offer.dataset.bgset}')`;
      console.log("offer.style.backgroundImage = ", offer.style.backgroundImage);
   }
}