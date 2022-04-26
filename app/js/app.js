$(document).ready(function () {
  $(".faq__item-a").hide();

  $(".faq__item").click(function () {
    $(".faq__item-a").hide();
    $(this).find(".icon").toggleClass("down");
    $(this).find(".faq__item-a").show();
  });
});

//Создаём класс для частиц
class Particle
{
   //Конструктор принимает положение частицы по трём осям и цвет
   constructor(x, y, z, w, h, color)
   {
       this.x = (x+w/2)/14.40;
       this.y = y;
       this.z = z;

       this.w = w;
       this.h = h;

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
   new Particle(438, 62, 3, 108, 108, "url(images/dest/parallax/p1.png)"),
   new Particle(810, 73, 2, 137, 137, "url(images/dest/parallax/p2.png)"),
   new Particle(69, 301, 5, 106, 106, "url(images/dest/parallax/p3.png)"),
   new Particle(249, 185, 3, 179, 179, "url(images/dest/parallax/p4.png)"),
   new Particle(1051, 155, 2, 152, 151, "url(images/dest/parallax/p5.png)"),
   new Particle(92, 454, 3, 80, 78, "url(images/dest/parallax/p6.png)"),
   new Particle(414, 431, 2, 93, 92, "url(images/dest/parallax/p7.png)"),
   new Particle(1079, 478, 2, 71, 71, "url(images/dest/parallax/p8.png)"),
   new Particle(1210, 338, 3, 139, 137, "url(images/dest/parallax/p9.png)"),
   new Particle(240, 523, 5, 125, 125, "url(images/dest/parallax/p10.png)"),
   new Particle(842, 548, 3, 178, 178, "url(images/dest/parallax/p11.png)"),
   new Particle(1173, 596, 2, 140, 141, "url(images/dest/parallax/p12.png)"),
   new Particle(355, 738, 1, 164, 164, "url(images/dest/parallax/p13.png)"),
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

       div.setAttribute("style", "width: " + particles[i].w + "px;height: "+ particles[i].h + "px;top: " + particles[i].y + "px; left: " + particles[i].x + "%; z-index: " + particles[i].z + "; background: " + particles[i].color + " 100% no-repeat; ");
       particlesContainer.appendChild(div);
   }
}
