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

       //Размытие и скорость зависят от положения частицы по оси Z
       //Чем выше частица, тем более размытой она будет и тем быстрее она будет двигаться
       let blurs = [ 0, 2, 1, 0 ];

       this.blur = blurs[z];
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
   new Particle(34, 116, 3, "url(images/dest/parralax-1.png)"),
   new Particle(17, 450, 1, "#FF7019"),
   new Particle(22, 500, 3, "#FF7019"),
   new Particle(60, 700, 1, "#FF7019"),
   new Particle(90, 600, 4, "#FF7019"),
   new Particle(10, 900, 2, "#FF7019"),
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

       div.setAttribute("style", "top: " + particles[i].y + "px; left: " + particles[i].x + "%; z-index: " + particles[i].z + "; filter: blur(" + particles[i].blur + "px); background: " + particles[i].color + "; ");
       particlesContainer.appendChild(div);
   }
}
