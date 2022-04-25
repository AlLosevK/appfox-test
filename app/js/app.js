$(document).ready(function () {
  $(".faq__item-a").hide();

  $(".faq__item-q").click(function () {
    $(".faq__item-a").hide();
    $(this).next(".faq__item-a").show();
  });
});

//Создаём класс для частиц
class Particle
{
   //Конструктор принимает положение частицы по трём осям и цвет
   constructor(x, y, z, color)
   {
       this.x = x;
       this.y = y;
       this.z = z;

       this.speed = z;
       this.color = color;
   }

   //Метод движения частицы
   Move(d)
   {
       this.y += this.speed * d;
   }
}

//Позиция полосы прокрутки
let scrollPosition = 0;

//Получаем контейнер для частиц
const particlesContainer = document.getElementById("particles");

//Создаём массив с частицами
const particles =
[
   new Particle(34, 62, 3, "url(images/dest/parallax/p1.png)"),
   new Particle(69, 73, 2, "url(images/dest/parallax/p2.png)"),
   new Particle(76, 155, 5, "url(images/dest/parallax/p3.png)"),
   new Particle(89, 185, 4, "url(images/dest/parallax/p4.png)"),
   new Particle(53, 301, 2, "url(images/dest/parallax/p5.png)"),
   new Particle(9, 431, 3, "url(images/dest/parallax/p6.png)"),
   new Particle(70, 454, 2, "url(images/dest/parallax/p7.png)"),
   new Particle(40, 523, 2, "url(images/dest/parallax/p8.png)"),
   new Particle(46, 116, 3, "url(images/dest/parallax/p9.png)"),
   new Particle(21, 338, 5, "url(images/dest/parallax/p10.png)"),
   new Particle(64, 548, 4, "url(images/dest/parallax/p11.png)"),
   new Particle(86, 596, 2, "url(images/dest/parallax/p12.png)"),
];

//Это функция вывода частицы на страницу
Fill();

//При каждой прокрутке вызываем функцию Scroll(), которая двигает частицы
window.addEventListener("scroll", function (e) { Scroll(e); });

function Scroll(e)
{
   //Определяем, в каком направлении была прокрутка
   let d = 0;

   if(window.pageYOffset > scrollPosition)
   {
       d = 1;
   }
   else
   {
       d = -1;
   }

   scrollPosition = window.pageYOffset;

   //Двигаем все частицы в заданном направлении
   for(let i = 0; i < particles.length; i++)
   {
       particles[i].Move(d);
   }

   //Выводим всё на страницу
   Fill();
}

function Fill()
{
   //Очищаем контейнер
   particlesContainer.innerHTML = "";

   //Создаём новые элементы с обновлёнными свойствами и помещаем их в контейнер
   for(let i = 0; i < particles.length; i++)
   {
       let div = document.createElement("div");
       div.className = "particle";

       div.setAttribute("style", "top: " + particles[i].y + "px; left: " + particles[i].x + "%; z-index: " + particles[i].z + "; background: " + particles[i].color + "100% no-repeat; ");
       particlesContainer.appendChild(div);
   }
}
