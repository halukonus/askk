document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.2}s`; // Her harf için artan gecikme ekler
        title.appendChild(span);

        setTimeout(function () {
            for (let j = 0; j < 10; j++) {
                setTimeout(function () {
                    span.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                }, (j * 20));
            }
        }, i * 0.2 * 1000);

        setTimeout(function () {
            span.textContent = text[i];
        }, (i + 2) * 0.2 * 1000);
    }
});

// Evet butonu
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function () {
    generateHearts();
    const title = document.querySelector('.title');
    title.textContent = 'Seni Çok Seviyorum❤️';
});

const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa'];
const heartInterval = 15;

function generateHearts() {
    const symbols = ['❤️', '💖', '💗', '💕', '💓'];

    setInterval(() => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        createHeart(symbol);
    }, 100);
}

function createHeart(symbol) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = symbol;

    // Ekranın boyutuna göre konum ayarı yap
    heart.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // 50px genişlikten çıkar
    heart.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // 50px yükseklikten çıkar
    heart.style.animationName = 'heartAnimation';
    heart.style.animationDuration = '.9s';
    document.body.appendChild(heart);
}

const btn = document.getElementById('noButton');

let isMoved = false;

btn.addEventListener("mouseover", function() {
    if (!isMoved) {
        btn.style.transform = `translate(-80px, 50px)`;
        isMoved = true;
    } else {
        btn.style.transform = `translate(80px, 50px)`;
        isMoved = false;
    }
    
    btn.style.transition = "all 0.3s ease";
});

// Hayır butonuna basıldığında da kayması için
btn.addEventListener("click", function() {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    btn.style.transition = "all 0.3s ease";
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        noButton.style.animation = 'explode 0.5s forwards';
        if (!noButton.dataset.tabPressed) {
            noButton.dataset.tabPressed = true;
            setTimeout(() => noButton.style.display = 'none', 500);
            event.preventDefault();

            const title = document.querySelector('.title');
            title.textContent = 'Hile yapmak yok :)';
            
            setTimeout(() => {
                title.textContent = 'Çıkalım mı artık?';
            }, 2000);
        }
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 85)) {
        return false;
    }
};

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "Sayfayı kapatmak istediğinizden emin misiniz?";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});
