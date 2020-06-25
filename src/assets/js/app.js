import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import slick from "slick-carousel";

$(document).foundation();

// document.querySelector('.active').onclick = function() {
//    if(document.querySelector('.de').style = '#F7F5F9'){
//        document.querySelector('.en').style.color = 'rgba(255, 255, 255, 0.3)';
//    }
//    if(document.querySelector('.en').style = '#F7F5F9'){
//         document.querySelector('.de').style.color = 'rgba(255, 255, 255, 0.3)';
//    }
//    // else{
//    //     document.querySelector('.de').style = '#F7F5F9'
//    //     document.querySelector('.en').style = '#F7F5F9'
//    // }
// }

let de = document.querySelector('.de');
let en = document.querySelector('.en');

de.addEventListener('click', ()=> {
    en.classList.add('change-color');
    de.classList.remove('change-color');

});
en.addEventListener('click', ()=> {
    de.classList.add('change-color');
    en.classList.remove('change-color');
});
