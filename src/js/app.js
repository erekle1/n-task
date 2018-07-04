import './jquery';

import 'popper.js';
import 'bootstrap';
import 'owl.carousel'
import './jquery.srcipts.min';
import './jquery.dlmenu.min';
import './main';


$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            },
            1500:{
                items:5,
                nav:true,
                loop:false
            }

        }
    })

    }
);