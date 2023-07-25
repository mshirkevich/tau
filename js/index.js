(() => {
  const header = document.querySelector(".header");
  const headerMenuItems = document.querySelectorAll(".h-menu__item");

  const burgerMenu = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mobileMenuItems = document.querySelectorAll(".m-menu__item");
  const mobileSecondMenus = document.querySelectorAll(".m-menu__second");
  const mobilemenuItemContent = document.querySelectorAll(".m-menu__content");

  const searchBtn = document.querySelector(".header__search");
  const searchDropdown = document.querySelector(".search");

  const tabItem = document.querySelectorAll(".tabs__nav-item");
  const tabContent = document.querySelectorAll(".tabs__content");

  const accordionItems = document.querySelectorAll(".accordion__item");

  const selectElements = document.querySelectorAll(".custom-select");

  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    });

    headerMenuItems.forEach((item) => {
      const dropdown = item.querySelector(".h-menu__dropdown");
      item.addEventListener("mouseenter", (e) => {
        if (dropdown) {
          document.body.classList.add("blackouted");
          document.body.classList.remove("hidden");
          searchBtn.classList.remove("header__search--active");
          searchDropdown.classList.remove("search--active");
        }
      });
      item.addEventListener("mouseleave", (e) => {
        if (dropdown) {
          document.body.classList.remove("blackouted");
        }
      });
    });

    searchBtn.addEventListener("click", () => {
      if (searchDropdown.classList.contains("search--active")) {
        document.body.classList.remove("blackouted");
      } else {
        document.body.classList.add("blackouted");
      }
      document.body.classList.toggle("hidden");
      burgerMenu.classList.remove("header__burger--active");
      mobileMenu.classList.remove("header__mobile-menu--active");
      searchBtn.classList.toggle("header__search--active");
      searchDropdown.classList.toggle("search--active");
      if (document.querySelector(".search__results")) {
        console.log(document.querySelector(".search__results"));
        const searchResultsPs = new PerfectScrollbar(".search__results", {
          wheelSpeed: 2,
          wheelPropagation: true,
          minScrollbarLength: 20,
        });
      }
    });

    burgerMenu.addEventListener("click", () => {
      searchBtn.classList.remove("header__search--active");
      searchDropdown.classList.remove("search--active");
      document.body.classList.remove("hidden");
      document.body.classList.toggle("blackouted");
      burgerMenu.classList.toggle("header__burger--active");
      mobileMenu.classList.toggle("header__mobile-menu--active");
      mobileMenuItems.forEach((li) => {
        li.classList.remove("m-menu__item--active");
      });
      mobileSecondMenus.forEach((menu) => {
        menu.classList.remove("m-menu__second--active");
      });
      mobilemenuItemContent.forEach((content) => {
        content.classList.remove("m-menu__content--active");
      });
    });

    mobileMenuItems.forEach((item) => {
      const itemId = item.getAttribute("id");
      item.classList.remove("m-menu__item--active");

      item.addEventListener("click", () => {
        mobileMenuItems.forEach((li) => {
          li.classList.remove("m-menu__item--active");
        });
        if (itemId) {
          item.classList.add("m-menu__item--active");
          mobileSecondMenus.forEach((menu) => {
            menu.classList.remove("m-menu__second--active");
            if (menu.dataset.target === itemId) {
              menu.classList.add("m-menu__second--active");
            }
          });
          mobilemenuItemContent.forEach((content) => {
            content.classList.remove("m-menu__content--active");
            if (content.dataset.content === itemId) {
              content.classList.add("m-menu__content--active");
            }
          });
        }
      });
    });

    tabItem.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabItem.forEach((item) =>
          item.classList.remove("tabs__nav-item--active")
        );
        tab.classList.add("tabs__nav-item--active");
        tabContent.forEach((item) => {
          item.classList.remove("tabs__content--active");
          if (tab.dataset.id === item.dataset.target) {
            item.classList.add("tabs__content--active");
            initTabWrapScroll();
          }
        });
      });
    });

    accordionItems.forEach((item) => {
      const accordionBtn = item.querySelector(".accordion__item-btn");
      accordionBtn.addEventListener("click", () => {
        item.classList.toggle("accordion__item--active");
      });
    });

    selectElements.forEach((element) => {
      const choices = new Choices(element, {
        searchEnabled: false,
        searchChoices: false,
      });
    });

    if (document.getElementById("map")) {
      ymaps.ready(init);
      function init() {
        var myMap = new ymaps.Map("map", {
          center: [48.861787492135164, 2.312244969887328],
          zoom: 14,
          controls: [],
        });

        var myPlacemark = new ymaps.Placemark(
          [48.861787492135164, 2.312244969887328],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "../img/location.svg",
            iconImageSize: [174, 174],
          }
        );

        myMap.geoObjects.add(myPlacemark);
      }
    }
  });

  if (document.querySelector(".tabs__nav")) {
    const ps = new PerfectScrollbar(".tabs__nav", {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
    });
  }

  initTabWrapScroll();

  function initTabWrapScroll() {
    if (document.body.clientWidth < 721) {
      if (document.querySelector(".tabs__content--active .tabs__wrap")) {
        const tabWrapPs = new PerfectScrollbar(
          ".tabs__content--active .tabs__wrap",
          {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20,
          }
        );
      }
    }

    if (document.body.clientWidth < 961) {
      if (
        document.querySelector(
          ".tabs--projects .tabs__content--active .tabs__wrap"
        )
      ) {
        const tabWrapPs = new PerfectScrollbar(
          ".tabs--projects .tabs__content--active .tabs__wrap",
          {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20,
          }
        );
      }
    }
  }

  if (document.querySelector(".manager__body")) {
    const managerBodyPs = new PerfectScrollbar(".manager__body", {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
    });
  }
})();

$(document).ready(function () {
  $(".hero__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  });
  AOS.init();
  $(".hero__slider").on("swipe", function (event, slick, currentSlide) {
    AOS.init();
  });

  $(".open-popup").magnificPopup({
    type: "inline",
    showCloseBtn: false,
  });

  $(".popup__close").on("click", function () {
    $.magnificPopup.close();
  });
});
