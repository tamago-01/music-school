//ハンバーガー
$(".js-hamburger").click(function () {
  $(".l-header__hamburger").toggleClass("is-active");
  $(".l-header__nav-menu").toggleClass("is-open");
});

$(".l-header__nav-menu a").on("click", function () {
  $(".l-header__hamburger").removeClass("is-active");
  $(".l-header__nav-menu").removeClass("is-open");
});

// スワイパー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },
});

// アコーディオン;
// jQuery(".js-accordion").on("click", function (e) {
//   e.preventDefault();

//   if (jQuery(this).parent().hasClass("is-open")) {
//     jQuery(this).parent().removeClass("is-open");
//     jQuery(this).next().slideUp();
//   } else {
//     jQuery(this).parent().addClass("is-open");
//     jQuery(this).next().slideDown();
//   }
// });

// アコーディオン
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  const box = jQuery(this).closest(".p-qa__box"); // 属するboxを取得
  const answer = box.find(".p-qa__a-box"); // その中の回答ボックス

  if (box.hasClass("is-open")) {
    box.removeClass("is-open");
    answer.slideUp();
  } else {
    box.addClass("is-open");
    answer.slideDown();
  }
});

// トップへ戻るボタン
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 300) {
    // 300px以上スクロールしたら
    $(".c-back-to-top").addClass("is-show");
  } else {
    $(".c-back-to-top").removeClass("is-show");
  }
});

// お問い合わせボタン
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 300) {
    // 300px以上スクロールしたら
    $(".c-contact-btn").addClass("is-show");
  } else {
    $(".c-contact-btn").removeClass("is-show");
  }
});
