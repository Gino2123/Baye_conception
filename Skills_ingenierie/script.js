// -------------------------------------------Icon-----------------------------//

// -------------------------------------------Search textarea-----------------------------//

const searchInput = document.querySelector('.search input[type="text"]');
const searchIcon = document.querySelector('.search button');

searchIcon.addEventListener('click', function() {
    if (searchInput.style.width === '0px' || searchInput.style.width === '') {
        searchInput.style.display = 'inline-block';
        searchInput.offsetWidth; // Force le recalcul du style pour s'assurer que l'animation se déclenche
        searchInput.style.width = '250px';
        searchInput.style.opacity = '1';
        searchInput.focus();
    } else {
        // Si la barre de recherche est déjà visible
        if (searchInput.value.trim() !== '') {
            // Soumettre la recherche ou autre action
            console.log('Recherche soumise :', searchInput.value);
        } else {
            // Si le champ est vide, on le cache
            // searchInput.style.display = 'none';
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            setTimeout(() => {
                searchInput.style.display = 'none';
            }, 400);
        }
    }
});


searchInput.addEventListener('blur', function() {
    setTimeout(function() {
        if (searchInput.value.trim() === '') {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            setTimeout(() => {
                searchInput.style.display = 'none';
            }, 400);
        }
    }, 400);
});

// -------------------------------------------Menu-----------------------------//
const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu button');
const menuIcon = document.querySelector('.menu-icon');

menuBtn.addEventListener('click', function(){
    console.log('Le bouton menu a été cliqué');
    const currentDisplay = window.getComputedStyle(menuList).display;
    if(currentDisplay === 'none'){
        menuList.style.display = 'flex';
        console.log('Le bouton menu en display flex');
        menuIcon.style.content = "url('images/icons/menu-close.svg')";
    }
    else{
        menuList.style.display = 'none';
        console.log('Le bouton menu en display none');
        menuIcon.style.content = "url('images/icons/menu1.svg')";
    }
});

// ----------------------------------------------------------Animation----------------------------------------------------

// Scroll
// Indicateur pour vérifier si l'animation a été jouée
let sloganPlayed = false; 
let contactPlayed = false;
let illustratePlayed = false;
let desctitlePlayed = false;
let descriptionPlayed = false;
let areaPlayed = false;
let knowmorePlayed = false;
let strongPlayed1 = false;
let strongPlayed2 = false;
let strongPlayed3 = false;
let descPlayed = false;
let jobPlayed = false;
let usely1Played = false;
let usely2Played = false;
let usely3Played = false;

document.addEventListener('scroll', function() {
    // Select element
    const slogan = document.querySelector('.overlay');
    const contact = document.querySelector('.contact-us');
    const illustrate = document.querySelector('.illustrate img');
    const desctitle = document.querySelector('.description h1');
    const description = document.querySelector('.description');
    const area = document.querySelector('.area-content');
    const area_1 = document.querySelector('.oil-gas');
    const area_2 = document.querySelector('.area-energie');
    const area_3 = document.querySelector('.area-water');
    const area_4 = document.querySelector('.area-tech');
    const know = document.querySelector('.knowmore');
    const strong_1 = document.querySelector('.strong-1');
    const strong_2 = document.querySelector('.strong-2');
    const strong_3 = document.querySelector('.strong-3');
    const desc = document.querySelector('.desc');
    const jobutton = document.querySelector('.button-job');
    const usely1 = document.querySelector('.useful-menu h1');
    const usely2 = document.querySelector('.useful-contact h1');
    const usely3 = document.querySelector('.useful-about h1');


    
    if (!illustratePlayed && isInViewport(illustrate)) {
        console.log('illustrate')
        slideElement(illustrate, '0');
        illustratePlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!sloganPlayed && isInViewport(slogan)) {
        console.log('slogan')
        scaleAnimation(slogan, 500);
        sloganPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!descriptionPlayed && isInViewport(description)) {
        console.log('description')
        scaleAnimation(description, 20);
        descriptionPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!desctitlePlayed && isInViewport(description)) {
        console.log('description title')
        setTimeout(function() {
            desctitle.style.opacity = '1';
        }, 800);
        desctitlePlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!contactPlayed && isInViewport(contact)) {
        console.log('contact')
        bounceElement(contact);
        contactPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!areaPlayed && isInViewport(area)) {
        console.log('area content')
        slideDown(area_1);
        setTimeout(function(){
            slideUp(area_2);
        }, 1000);
        setTimeout(function(){
            slideDown(area_3);
        }, 2000);
        setTimeout(function(){
            slideUp(area_4);
        }, 3000);
        areaPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!knowmorePlayed && isInViewport(know)) {
        console.log('knowmore')
        bounceElement(know);
        knowmorePlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!strongPlayed1 && isInViewport(strong_1)) {
        console.log('strong 1')
        slideDown(strong_1);
        strongPlayed1 = true; // Marquer l'animation comme jouée
    }
    if (!strongPlayed2 && isInViewport(strong_2)) {
        console.log('strong 2')
        slideDown(strong_2);
        strongPlayed2 = true; // Marquer l'animation comme jouée
    }
    if (!strongPlayed3 && isInViewport(strong_3)) {
        console.log('strong 3')
        slideDown(strong_3);
        strongPlayed3 = true; // Marquer l'animation comme jouée
    }
    
    if (!descPlayed && isInViewport(desc)) {
        console.log('main description')
        scaleAnimation(desc, 20);
        descPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!jobPlayed && isInViewport(jobutton)) {
        console.log('job-button')
        bounceElement(jobutton);
        jobPlayed = true; // Marquer l'animation comme jouée
    }
    
    if (!usely1Played && isInViewport(usely1)) {
        console.log('usely title');
        usely1.style.opacity = '0'
        setTimeout(function(){
            usely1.style.opacity = '1'
            usely1.style.transition = 'opacity 2s linear'
        }, 200)
        usely1Played = true; // Marquer l'animation comme jouée
    }
    
    if (!usely2Played && isInViewport(usely2)) {
        console.log('usely title');
        usely2.style.opacity = '0'
        setTimeout(function(){
            usely2.style.opacity = '1'
            usely2.style.transition = 'opacity 2s linear'
        }, 200)
        usely2Played = true; // Marquer l'animation comme jouée
    }
    
    if (!usely3Played && isInViewport(usely3)) {
        console.log('usely title');
        usely3.style.opacity = '0'
        setTimeout(function(){
            usely3.style.opacity = '1'
            usely3.style.transition = 'opacity 2s linear'
        }, 200)
        usely3Played = true; // Marquer l'animation comme jouée
    }
});


// -----------------------------------------------------functions---------------------------------------------------
// view in scroll
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
         rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

// Element jump
function bounceElement(element) {
    element.style.position = 'relative';
    element.style.transition = 'transform 0.8s ease';

    // Créer l'effet de saut
    element.style.transform = 'translateY(-100px)';
    setTimeout(function() {
        element.style.transform = 'translateY(0)';
    }, 100); // Durée de l'animation de saut (100ms)
}

// Element slide
function slideElement(element, transval){
    console.log('Slide Animation:', element);
    element.style.translate = transval;
    element.style.transition = 'translate 1s ease';
}

function slideDown(element){
    console.log('Slide Down:', element);
    element.style.opacity = '0';
    element.style.transform = 'translateY(-100%)';

    // Créer l'effet de saut
    setTimeout(function() {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)';
        element.style.transition = 'transform 2s ease, opacity 3s ease';
    }, 1000); // Durée de l'animation de saut (1s)
}

function slideUp(element){
    console.log('Slide Up:', element);
    element.style.opacity = '0';
    element.style.transform = 'translateY(100%)';

    // Créer l'effet de saut
    setTimeout(function() {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)';
        element.style.transition = 'transform 2s ease, opacity 3s ease';
    }, 2000); // Durée de l'animation de saut (2s)
}

function scaleAnimation(element, time){   
        console.log('Scale Animation:', element);
    setTimeout(function() {
        element.style.transform = 'scale(1)';
        element.style.transition = 'transform 2s ease'
    }, time); // Durée de l'animation de saut (time)
}