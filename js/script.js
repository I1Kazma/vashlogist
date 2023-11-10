let header__submenu = document.querySelector("#header__submenu");
let header__submenu__open = document.querySelector("#site_menu_open");
let header__submenu__close = document.querySelector("#bx_close");
let callback_open = document.querySelector("#callback_open");
let callback_popup = document.querySelector("#callback__popup");
let callback_success = document.querySelector("#callback__success");
let callback_close = document.querySelector("#callback_close");
let callback__submit = document.querySelector("#callback__submit");

let faq__callback__success = document.querySelector("#faq__callback__success");
let faq__callback__submit = document.querySelector("#faq__callback__submit");
let faq_callback_close = document.querySelector("#faq_callback_close");

let submenu__dropdown = document.querySelector("#submenu__dropdown");
let submenu__header = document.querySelector("#submenu__header");
let submenu__title = document.querySelector("#submenu__title");
let submenu__arrow = document.querySelector("#submenu__arrow");

callback_open.onclick = () => {
  callback_popup.classList.toggle("callback-open");
};

callback__submit.onclick = function (event) {
  event.preventDefault();
  callback_success.classList.toggle("success");
};

callback_close.onclick = () => {
  callback_popup.classList.remove("callback-open");
  callback_success.classList.remove("success");
};

header__submenu__open.onclick = () => {
  header__submenu.classList.toggle("submenu-open");
  document.body.classList.toggle("nav--opened")
};

header__submenu__close.onclick = () => {
  header__submenu.classList.remove("submenu-open");
  document.body.classList.remove("nav--opened")
};

submenu__header.onclick = () => {
  submenu__dropdown.classList.toggle("open");
  submenu__title.classList.toggle("yellow");
  submenu__arrow.classList.toggle("rotate");
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? this.toggle(elOpenItem)
            : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.add("collapsing");
    el.classList.add("accordion__item_slidedown");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      el.classList.remove("accordion__item_slidedown");
      elBody.classList.add("collapse");
      el.classList.add("accordion__item_show");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      !el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("accordion__item_show");
    elBody.classList.add("collapsing");
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      elBody.classList.add("collapse");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains("accordion__item_show")
      ? this.hide(el)
      : this.show(el);
  }
}

faq__callback__submit.onclick = function (event) {
  event.preventDefault();
  faq__callback__success.classList.toggle("success");
};

faq_callback_close.onclick = () => {
  faq__callback__success.classList.remove("success");
};
