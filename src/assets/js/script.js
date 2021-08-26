// $(":input").inputmask();

// $(".mask").inputmask({"mask": "+7 (999) 999-9999"});
//
// $(document).ready(function () {
//     $(".send-number").click(
//         function () {
//             sendAjaxForm('result_form', 'ajax_form', './php/action_ajax_form.php');
//             return false;
//         }
//     );
// });
//
// function sendAjaxForm(result_form, ajax_form, url) {
//     $.ajax({
//         url: url, //url страницы (action_ajax_form.php)
//         type: "POST", //метод отправки
//         dataType: "html", //формат данных
//         data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
//         success: function (response) { //Данные отправлены успешно
//             var result = $.parseJSON(response);
//             $('#result_form').html('<div class="result-detail"><h6>Ваши данные отправлены' +
//                 '</h6><p>Имя: ' + result.name + '</p>' +
//                 '<p>Телефон: ' + result.phonenumber + '</p>' +
//                 '<p class="close">X</p></div>');
//             document.querySelector('.close').addEventListener('click', close, false);
//
//             function close() {
//                 this.parentNode.parentNode.innerHTML = '';
//             };
//         },
//         error: function (response) { // Данные не отправлены
//             $('#result_form').html('Ошибка. Данные не отправлены.');
//         }
//     });
// }
function bugIE(base, added) {
  let images = new Image()
  images.hasWebP = true;
  images.src = './assets/img/car.webp';
  images.onerror = function () {
    images.hasWebP = false;
    images.setting();
    tryyy();
  };
  images.setting = function () {
    document.querySelector(base).setAttribute('class', document.querySelector(base).getAttribute('class') + ' ' + added);
  }
}

bugIE('p.image', 'car-webp1 bug webp fix');
bugIE('p.image', 'car-webp1 bug webp fix');

function tryyy() {
  console.log('ooo');
}

let cacheAuto = {
  show: 'techno mech show',
  hide: 'techno mech hide',
  linkActive: 'kind mechanic active',
  linkNotActive: 'kind mechanic not-active',
  oldTag: document.querySelectorAll('.techno')[0],
  oldTagTwo: document.querySelectorAll('.techno')[1],
  oldLink: document.querySelectorAll('.kind')[0],
  oldLinkTwo: document.querySelectorAll('.kind')[1]
}

function switching() {
  cacheAuto.cachingClass = cacheAuto.oldTag.classList[2];
  if (this.classList[2] === 'active') {
    return true;
  }
  if (cacheAuto.cachingClass === 'show') {
    cacheAuto.oldTag.setAttribute('class', cacheAuto.hide);
    cacheAuto.oldTagTwo.setAttribute('class', cacheAuto.show);
    cacheAuto.oldLink.setAttribute('class', cacheAuto.linkNotActive);
    cacheAuto.oldLinkTwo.setAttribute('class', cacheAuto.linkActive);
  } else {
    cacheAuto.oldTagTwo.setAttribute('class', cacheAuto.hide);
    cacheAuto.oldLinkTwo.setAttribute('class', cacheAuto.linkNotActive);
    cacheAuto.oldTag.setAttribute('class', cacheAuto.show);
    cacheAuto.oldLink.setAttribute('class', cacheAuto.linkActive);
  }
}

cacheAuto.listSlide = document.querySelectorAll('.slider');
cacheAuto.listSlideStart = 0;
cacheAuto.listSlideCurrent = 0;
cacheAuto.listSlideAll = cacheAuto.listSlide.length;
cacheAuto.backGo = function (event) {
  event.preventDefault();
  if (cacheAuto.listSlideCurrent !== cacheAuto.listSlideStart) {
    cacheAuto.listSlide[cacheAuto.listSlideCurrent].setAttribute('class', 'slider');
    document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number');
    cacheAuto.listSlideCurrent--;
    cacheAuto.listSlide[cacheAuto.listSlideCurrent].setAttribute('class', 'slider show');
    document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number active');
  }
}
cacheAuto.forwardGo = function (event) {
  event.preventDefault();
  if (cacheAuto.listSlideAll === cacheAuto.listSlideCurrent + 1) {
    return true;
  }
  if (cacheAuto.listSlideAll !== cacheAuto.listSlideCurrent) {
    cacheAuto.listSlide[cacheAuto.listSlideCurrent].setAttribute('class', 'slider');
    document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number');
    cacheAuto.listSlideCurrent++;
    cacheAuto.listSlide[cacheAuto.listSlideCurrent].setAttribute('class', 'slider show');
    document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number active');
  }
};
cacheAuto.setEmotion = function () {
  cacheAuto.listSlide[cacheAuto.listSlideCurrent].setAttribute('class', 'slider');
  document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number');
  cacheAuto.listSlide[this.textContent - 1].setAttribute('class', 'slider show');
  cacheAuto.listSlideCurrent = this.textContent - 1;
  document.querySelectorAll('.emotion-number')[cacheAuto.listSlideCurrent].setAttribute('class', 'emotion-number active');
}
//document.querySelector('.kind.mechanic').addEventListener("click", switching, false);
//document.querySelector('.kind.automate').addEventListener("click", switching, false);
//document.querySelector('.back-go').addEventListener("click", cacheAuto.backGo, false);
//document.querySelector('.forward-go').addEventListener("click", cacheAuto.forwardGo, false);
cacheAuto.setEmotion.allEl = document.querySelectorAll('.emotion-number');
for (let i = 0; i < cacheAuto.setEmotion.allEl.length; i++) {
  cacheAuto.setEmotion.allEl[i].addEventListener("click", cacheAuto.setEmotion, false);
}

function ScrollDetect(whoIsAnimate, whatKindAnimate) {
  this.elementTarget = whoIsAnimate;
  this.animateClass = whatKindAnimate;
  this.windowH = window.innerHeight;
  this.startChanges = 0;
  this.initProps = function () {
    if (this.startChanges === 0) {
      this.elementWork = document.querySelector(this.elementTarget);
      this.initClass = this.elementWork.getAttribute('class');
      this.elPositonY = this.elementWork.offsetTop;
      this.startChanges = 1;
    }
  };
  this.scrolling = function () {
    this.initProps();
    if ((this.elPositonY + 100) > Math.floor(window.scrollY) && Math.floor(window.scrollY) > (this.elPositonY - this.windowH)) {
      this.elementWork.setAttribute('class', this.initClass + ' ' + this.animateClass);
    } else {
      this.elementWork.setAttribute('class', this.initClass);
    }
  }
}

ScrollDetect.firstEffect = new ScrollDetect('.sub.title', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect.scrolling.bind(ScrollDetect.firstEffect), false);
ScrollDetect.firstEffect2 = new ScrollDetect('.per.day', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect2.scrolling.bind(ScrollDetect.firstEffect2), false);
ScrollDetect.firstEffect3 = new ScrollDetect('.choice.title', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect3.scrolling.bind(ScrollDetect.firstEffect3), false);
ScrollDetect.firstEffect4 = new ScrollDetect('.variant', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect4.scrolling.bind(ScrollDetect.firstEffect4), false);
ScrollDetect.firstEffect5 = new ScrollDetect('.conditions .t', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect5.scrolling.bind(ScrollDetect.firstEffect5), false);
ScrollDetect.firstEffect6 = new ScrollDetect('.conditions .d', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect6.scrolling.bind(ScrollDetect.firstEffect6), false);
ScrollDetect.firstEffect7 = new ScrollDetect('.advantage .t', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect7.scrolling.bind(ScrollDetect.firstEffect7), false);
ScrollDetect.firstEffect8 = new ScrollDetect('.emotions .t', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect8.scrolling.bind(ScrollDetect.firstEffect8), false);
ScrollDetect.firstEffect9 = new ScrollDetect('.rent-auto .t', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect9.scrolling.bind(ScrollDetect.firstEffect9), false);
ScrollDetect.firstEffect10 = new ScrollDetect('.faq .t', 'appear');
window.addEventListener('scroll', ScrollDetect.firstEffect10.scrolling.bind(ScrollDetect.firstEffect10), false);

// let i = 0;
// let clock = setInterval(() => {
//     ++i;
//     setTimeout(() => console.log(i), 1000);
// }, 1000);
// setTimeout(() => {
//     clearInterval(clock);
// }, 10000);
