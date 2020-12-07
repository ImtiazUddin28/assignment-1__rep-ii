const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
imgs.forEach(function (img) {
    img.addEventListener('click', function (e) {
        current.src = e.target.src;
    });
    
});