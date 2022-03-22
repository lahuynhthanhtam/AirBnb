const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = $(".app");
const header = $('.header')
const beforeScroll = $(".header-navigation-search");
const afterScroll = $(".header-nav");
const userNormal = $(".header-nav__icon-user");
const navList = $('.header-nav__menu-list')
const userClick = $(".header-user-contain__list");
const intros = $$(".header-search-intro");
const places = $$(".header-search-place");
const logo = $('.header-nav__logo-link');


// Lấy biến đặt chung trong css ra js để dùng
var style = getComputedStyle(document.body);
var cssBootom = style.getPropertyValue('--height-search-bottom');
var cssAdv = style.getPropertyValue('--height-advert');
var cssColor = style.getPropertyValue('--color-primary')
// Scroll
const bootom = $('.nav-mobile-scroll');
const search = $('.search-on-mobile');

window.onscroll = function () {
    const scrollTop = window.scrollTop || document.documentElement.scrollTop;
    const width = screen.width;
    const heightDocument = document.body.scrollHeight;
    const heightScreen = window.screen.height;
    const maxScroll = heightDocument - heightScreen;
    const heightButton = maxScroll - parseInt(cssBootom);
    const heightAdv = parseInt(cssAdv);

    // // Ẩn hiện header scroll trên PC

    if (scrollTop < heightAdv && 1024< width) {
        beforeScroll.style.display = 'none';
        afterScroll.style.backgroundColor = 'transparent';
        afterScroll.style.padding = '0';
        logo.style.color = 'white';
        afterScroll.style.position = 'relative';
        afterScroll.style.margin = '20px 0 28px'
        navList.style.display = 'flex';
        $('.header-nav__icon-item').style.color = '#fff';
        $('.header-nav__icon-language').style.color = '#fff';
        // $('.header-nav__menu  ').style.display = 'none';
    }
    else if (scrollTop > heightAdv && 1024< width){
        beforeScroll.style.display = "flex";
        afterScroll.style.position = 'fixed';
        afterScroll.style.top = '0';
        afterScroll.style.left = '0';
        afterScroll.style.right = '0';
        afterScroll.style.zIndex = '2';
        afterScroll.style.margin = '0';
        afterScroll.style.padding = '15px';
        afterScroll.style.backgroundColor = '#fff';
        navList.style.display = 'none';
        logo.style.color = cssColor;
        $('.header-nav__icon-item').style.color = '#000';
        $('.header-nav__icon-language').style.color = '#000';
        $('.header-nav__menu  ').style.display = 'block';
    }

    // Ẩn hiện header scroll trên Tablet 

    if(scrollTop > heightAdv && 739< width && width < 1024){
        beforeScroll.style.display = "flex";
        afterScroll.style.position = 'fixed';
        afterScroll.style.top = '0';
        afterScroll.style.left = '0';
        afterScroll.style.right = '0';
        afterScroll.style.zIndex = '2';
        afterScroll.style.margin = '0';
        afterScroll.style.padding = '15px';
        afterScroll.style.backgroundColor = '#fff';
        navList.style.display = 'none';
        logo.style.color = cssColor;
        $('.header-nav__icon-item').style.color = '#000';
        $('.header-nav__icon-language').style.color = '#000';
        $('.header-nav__menu  ').style.display = 'block';
    }
    else if(scrollTop < heightAdv && 739< width && width < 1024){
        beforeScroll.style.display = 'none';
        afterScroll.style.backgroundColor = 'transparent';
        afterScroll.style.padding = '0';
        logo.style.color = 'white';
        afterScroll.style.position = 'relative';
        afterScroll.style.margin = '20px 0 28px'
        navList.style.display = 'flex';
        $('.header-nav__icon-item').style.color = '#fff';
        $('.header-nav__icon-language').style.color = '#fff';
        $('.header-nav__menu  ').style.display = 'none';
    }


    // Ẩn hiện header scroll trên mobile 
    if(heightButton > scrollTop && scrollTop > heightAdv && width <= 739){
        // header.appendChild(beforeScroll);
        search.style.position = 'fixed';
        search.style.backgroundColor = 'white';
        bootom.style.visibility = 'visible';
    }
    else if( scrollTop < heightAdv && width <= 739){
        // header.appendChild(beforeScroll);
        search.style.position = 'absolute';
        search.style.backgroundColor = 'transparent';
        
    }   
    else if( scrollTop > heightButton && width <= 739){
       bootom.style.visibility = 'hidden';
    }
}


// Ẩn hiện click user


userNormal.onclick = function(e){
    const valueUserNormal = userNormal.innerHTML;
    const value = valueUserNormal.indexOf("header-user-contain__list");
    if( value != -1){
        userClick.remove();
    }
    else{
        userNormal.appendChild(userClick);
        userClick.style.display = "block";
    }
    e.stopPropagation();
}
// Xóa gạch giữa khi hover
// const content = $('.header-search-intro-content:last-child');
// content.onmouseenter = function(){
//     content.classList.remove('header-search-separator');
//     $('.header-search-intro:last-child').classList.remove('header-search-separator');
// }
// content.onmouseleave = function(){
//     content.classList.add('header-search-separator');
//     $('.header-search-intro:last-child').classList.add('header-search-separator');
// }
// $('.header-search-intro:last-child').onmouseenter = function(){
//     $('.header-search-intro:last-child').classList.remove('header-search-separator');
// }
// $('.header-search-intro:nth-child(2)').onmouseenter = function(){
//     $('.header-search-intro:nth-child(2)').classList.remove('header-search-separator');
//     content.classList.remove('header-search-separator');
// }
// $('.header-search-intro:last-child').onmouseleave = function(){
//     $('.header-search-intro:last-child').classList.add('header-search-separator');
// }
// $('.header-search-intro:nth-child(2)').onmouseleave = function(){
//     content.classList.add('header-search-separator');
//     $('.header-search-intro:nth-child(2)').classList.add('header-search-separator');

// }
// $('.header-search-intro').onmouseenter = function(){
//     $('.header-search-intro:nth-child(2)').classList.remove('header-search-separator');
// }
// $('.header-search-intro').onmouseleave = function(){
//     $('.header-search-intro:nth-child(2)').classList.add('header-search-separator');
// }

// Hiện nội dung khi click vào thanh nav

intros.forEach(function(intro,index){
    const place = places[index];
    intro.onclick = function(e){
        clearContent.style.display = 'block';
        $('.header-search-place.active').classList.remove('active');
        place.classList.add('active');
        if(places[index] == places[0]){
            places[0].style.visibility = 'visible';
        }
        else{
            places[0].style.visibility = 'hidden';
        }
        e.stopPropagation();
    }
});

// Handle click nav

const clickOver = $('.header-search-contain');
const clearContent = $('.header-search-content');
app.onclick = function(){
    clearContent.style.display = 'none';
    userClick.remove();
}
// clickOver.onclick = function(e){
//     e.stopPropagation();
// }
