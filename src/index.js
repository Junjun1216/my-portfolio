import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

$.fn.isInViewport = function() {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

if ($('.about').isInViewport()) {
    document.getElementsByClassName("aboutContent")[0].style.opacity = 1;
    document.getElementsByClassName("aboutContent")[0].style.visibility = "visible";
}

$(window).scroll(function() {

    if ($('.about').isInViewport()) {
        document.getElementsByClassName("aboutContent")[0].style.opacity = 1;
        document.getElementsByClassName("aboutContent")[0].style.visibility = "visible";
    }

    if ($('.experience').isInViewport()) {
        document.getElementsByClassName("experience")[0].style.opacity = 1;
        document.getElementsByClassName("experience")[0].style.visibility = "visible";
    }

    if ($('.sample').isInViewport()) {
        document.getElementsByClassName("sample")[0].style.opacity = 1;
        document.getElementsByClassName("sample")[0].style.visibility = "visible";
    }

    if ($('.contact').isInViewport()) {
        document.getElementsByClassName("contact")[0].style.opacity = 1;
        document.getElementsByClassName("contact")[0].style.visibility = "visible";
    }
});

document.getElementById("welcomebtn").addEventListener('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
});

document.getElementById("experiencebtn").addEventListener('click', function() {
    $('html, body').animate({
        scrollTop: $(".experience").offset().top
    }, 300);
});

document.getElementById("samplebtn").addEventListener('click', function() {
    $('html, body').animate({
        scrollTop: $(".sample").offset().top
    }, 300);
});

document.getElementById("contactbtn").addEventListener('click', function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 300);
});