let sideNav = document.getElementById("side-nav");
let navButton = document.getElementById("nav-button");

window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (currentScrollPos > 400) {
        sideNav.style.display = 'block';
        if(navButton.innerText === '<'){
            sideNav.style.width = '0';
            navButton.innerHTML = '<';
            navButton.style.display = '';
        } else {
            sideNav.style.width = '175px';
            navButton.style.display = '';
            navButton.innerHTML = '>';
        }

    } else {
        sideNav.style.width = '0';
        navButton.style.display = 'none';
    }
}

navButton.onclick = () => {
    if(sideNav.style.width === '175px'){
        sideNav.style.width = '0';
        navButton.innerHTML = '<';
    } else {
        sideNav.style.width = '175px';
        navButton.innerHTML = '>';
    }
}