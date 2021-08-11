document.addEventListener('DOMContentLoaded', () => {
    // === slider-top ===

    var mySwiper = new Swiper('.slider-top .swiper-container', {
        navigation: {
            nextEl: '.slider-top .swiper-button-next',
            prevEl: '.slider-top .swiper-button-prev'
        },
        pagination: {
            el: '.slider-top .swiper-pagination',
            clickable: 'true'
        }
    });

    var galleryThumbs = new Swiper('.detailed-product-card .gallery-thumbs', {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        loopedSlides: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
    
      var galleryTop = new Swiper('.detailed-product-card .gallery-top', {
        loop: true,
        loopedSlides: 5,
        thumbs: {
          swiper: galleryThumbs
        },
        navigation: {
          nextEl: '.detailed-product-card .swiper-button-next',
          prevEl: '.detailed-product-card .swiper-button-prev'
        }
    });

    // === / slider-top ===

    // === nav-catalog  ===

    if($(".btn_catalog").length > 0) {
      var btn_catalog = $('.btn_catalog'),
          list_catalog = $('.catalog').children('.catalog-list'),
          list_catalog_wrap = $('.catalog').find('.catalog-list__wrap'),
          btn_catalog_close = $('.btn-catalog-close');

          btn_catalog.click(function (e) { 
            e.preventDefault();
            
            list_catalog.toggleClass('catalog-list_active');
            list_catalog_wrap.toggleClass('catalog-list__wrap_active');

            if($(document).width() < 808) {
              $('body').css('overflow', 'hidden');
          }
          });

      btn_catalog_close.click(function (e) { 
        e.preventDefault();
        list_catalog.toggleClass('catalog-list_active');
        list_catalog_wrap.toggleClass('catalog-list__wrap_active');
        $('body').css('overflow', 'auto');
      });
    }

    // === nav-catalog  ===

    // === Маска для ввода телефона в секции Сервис ===

    var form_tel = $('.form-tel__input');

    if (form_tel.length > 0) {
    form_tel.mask("+7 (999) 999 - 9999");
    }
    
    // === Кнопки выбора страницы с списком товаров ===

    // === Scroll top ===
    
    $(function(){
        $.fn.scrollToTop=function(){
          $(this).hide().removeAttr("href");
          if($(window).scrollTop()!="0"){
              $(this).fadeIn("slow")
        }
        var scrollDiv=$(this);
        $(window).scroll(function(){
          if($(window).scrollTop()=="0"){
          $(scrollDiv).fadeOut("slow")
          }else{
          $(scrollDiv).fadeIn("slow")
        }
        });
          $(this).click(function(){
            $("html, body").animate({scrollTop:0},"slow")
          })
        }
      });
      $(function() {$("#scroll-top").scrollToTop();});

    // === / Scroll top ===

    // === tabs ===

    if ($(".tabs-1").length > 0) {
      var tab_1 = $(".tabs-1__label");
    
      tab_1.click(function () {
          tab_1.removeClass('tabs-1__label_active')
          $(this).addClass('tabs-1__label_active')
      });
    }

    if ($(".tabs-color").length > 0) {
      var tab_color = $(".tabs-color__label");
    
      tab_color.click(function () {
        var val = $(this).find('.tabs-color-box').css('background-color');
          tab_color.removeClass('tabs-color__label_active')
          $(this).addClass('tabs-color__label_active')
          console.log(val)
          $('.profile-color__img-box').css('border-color', val);
      });
    }

    // === / tabs ===

    // === select ===

    $(document).click(function(event) {
      if (!$(event.target).closest(".dropdown__current").length) {
        $(".dropdown__current").parent().removeClass('dropdown_open');
      }   
    });
    
    
    
    $('.dropdown__current').click(function(e){
  
      e.preventDefault();
      var button =  $(this),
        parent = button.parent();
  
      if(window.__lastOpenedButton && window.__lastOpenedButton != button)
      {
        window.__lastOpenedButton.parent().removeClass('dropdown_open');
      }
  
  
         
        parent.toggleClass('dropdown_open');
        window.__lastOpenedButton = button;
    })
  
    
    $(".dropdown").each(function() {
      var btn = $(this).find('[type="radio"]'),
        value = $(this).find('.dropdown__current');
        
        btn.change(function(){
          value.text($(this).val());
        });
  
    });
  
    // === select ===

    // === pop ===

    if($(".btn-pop-up").length > 0) {
      var btn_pop_up = $('.btn-pop-up'),
          pop_up = $('.app').children('.pop-up'),
          btn_close_pop_up = $('.app').children('.pop-up').find('.btn-close');

      btn_pop_up.click(function (e) { 
        e.preventDefault();
        
        pop_up.addClass('pop-up_active');
        $('body').css('overflow', 'hidden');
      });

      btn_close_pop_up.click(function (e) { 
        e.preventDefault();

        pop_up.removeClass('pop-up_active');
        $('body').css('overflow', 'auto');
      });
    }

    // === pop ===

    // === nav-mobile ===

    if($(".nav").length > 0) {
      var btn_nav_mobile = $('.nav').find('.nav-btn'),
          btn_nav_mobile_close = $('.nav').find('.nav-btn-close'),
          nav_mobile = $('.nav').find('.nav-container');

      if($(document).width() > 425 ) {
        btn_nav_mobile.click(function (e) { 
          e.preventDefault();
          nav_mobile.toggleClass('nav-container_active');
          $(this).toggleClass('active')
        });
      }      

      if($(document).width() <= 425 ) {
        btn_nav_mobile.click(function (e) { 
          e.preventDefault();
          btn_nav_mobile_close.addClass('nav-btn-close_active')
          nav_mobile.addClass('nav-container_active');
          $('body').css('overflow', 'hidden');
        });

        btn_nav_mobile_close.click(function (e) { 
          e.preventDefault();
          nav_mobile.removeClass('nav-container_active');
          $(this).removeClass('nav-btn-close_active')
          $('body').css('overflow', 'auto');
        });
      }
    }

    // === / nav-mobile ===

    // === text-hide ===

    if($(".text-hide").length > 0) {
      var btn_text_hide = $('.list-products-additional-info').find('.btn_hide'),
          text_hide = $('.list-products-additional-info').find('.text-hide');

        btn_text_hide.click(function (e) { 
        e.preventDefault();
        
        $(this).hide();
        text_hide.addClass('text-hide_active')
      });
    }

    // === text-hide ===
    
});