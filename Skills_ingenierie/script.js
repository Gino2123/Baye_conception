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
// Slogan-overlay
window.addEventListener('load', function() {
    const slogan = document.querySelector('.overlay');
    const products = document.querySelector('.product');
    const item = document.querySelector('.item');
    
    slogan.style.transform = 'scale(1)';
    products.style.transform = 'translateY(-100px)';
    products.style.opacity = '1';
    item.style.transform = 'translateY(0)';
    item.style.opacity = '1';
    
})

// Product-presentation