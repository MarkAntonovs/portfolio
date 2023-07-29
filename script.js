document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide').mount();
  });
  

  window.addEventListener('scroll', function() {
    var targetScrollPosition = 600; // Задайте желаемую позицию прокрутки, при которой должен измениться цвет фона и текста
    var currentScrollPosition = window.scrollY;
  
    if (currentScrollPosition >= targetScrollPosition) {
      document.body.style.backgroundColor = 'white'; // Задайте желаемый цвет фона
      document.body.style.color = 'black'; // Задайте желаемый цвет текста
      document.body.style.border = 'black';
      document.body.style.a = 'black';
      setLinkColor('black'); // Задайте цвет ссылок, который будет до достижения желаемой позиции


    } else {
      document.body.style.backgroundColor = 'black'; // Задайте цвет фона, который будет до достижения желаемой позиции
      document.body.style.color = 'white'; // Задайте цвет текста, который будет до достижения желаемой позиции
      document.body.style.border = 'white';
      document.body.style.work_desc = 'white';
      setLinkColor('white'); // Задайте желаемый цвет ссылок

    }
  });
  function setLinkColor(color) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = color;
    }
  }