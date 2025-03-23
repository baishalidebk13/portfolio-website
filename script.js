// Header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
});

// Dynamic footer content
var year = new Date().getFullYear();
var date = `©️ BaishaliPortfolio ${year} . All Rights Reserved`;
document.getElementsByTagName('footer')[0].innerHTML = date;

// Toggle Black/White Mode function
function toggleBWMode() {
    document.body.classList.toggle('bw-mode');
}
