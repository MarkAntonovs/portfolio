document.addEventListener('DOMContentLoaded', function() {
    new Glide('#glide1').mount();
    new Glide('#glide2').mount();
    new Glide('#glide3').mount();
});

window.addEventListener('scroll', function() {
    var targetScrollPosition = 600; // Задайте желаемую позицию прокрутки, при которой должен измениться цвет фона и текста
    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition >= targetScrollPosition) {
        document.body.style.backgroundColor = '#E8E8DF'; // Задайте желаемый цвет фона
        document.body.style.color = 'black'; // Задайте желаемый цвет текста
        setLinkColor('black'); // Задайте цвет ссылок, который будет до достижения желаемой позиции
    } else {
        document.body.style.backgroundColor = 'black'; // Задайте цвет фона, который будет до достижения желаемой позиции
        document.body.style.color = '#E8E8DF'; // Задайте цвет текста, который будет до достижения желаемой позиции
        setLinkColor('white'); // Задайте желаемый цвет ссылок
    }
});

function setLinkColor(color) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = color;
    }
}
