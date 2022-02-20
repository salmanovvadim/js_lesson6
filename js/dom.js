console.log("Javascript - лучший язык программирования!");

//Задаем задержку до внесения изменений в 1500 милисекунд
window.addEventListener('DOMContentLoaded',() =>
{ 
  setTimeout(() => {

  // Смена приветственного сообщения
  document.getElementById("greeting").innerHTML = `Привет Виталий Валентинович!`;

  //Смена цвета фона списка
  document.querySelector("#essentials").style.backgroundColor = "yellow";

  //Встаувка приветственной картинки
  let greetingImages = document.createElement("img");
  greetingImages.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
  document.getElementById("greeting").appendChild(greetingImages); 
  
  //Ввод в конец страницы дополнительного списка
  let schedule = document.createElement("ul");
  schedule.classList.add('todo-items');
  document.body.append(schedule);

  //Создание пунктов в дополнительном списке
  let createArray = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
  for(let i = 0; i < createArray.length; i++)
  {
    let TagLi = document.createElement('li');
    TagLi.textContent = createArray[i];
    schedule.append(TagLi);
  }

  /*перенос класса к пункту списков, при клике
    Смена картинки в зависимости от того какой пункт списка был выбран*/
  const selectedLi = document.querySelector('#essentials')
  selectedLi.addEventListener('click', function(e)
  {
	  const selected = document.querySelectorAll('.selected')
	  const target = e.target
    Array.from(selected).forEach(selected =>
      {
  	selected.classList.remove('selected')
    });

    target.classList.add('selected')
    let imagesSelected =
    {
      "молоко": "images/milk.jpg",
      "мёд": "images/honey.jpg",
      "вода": "images/water.jpg",
      "вино": "images/wine.jpg",
      "пиво": "images/beer.jpg",
    }

    let liElems = document.querySelector('selected');
        let text = target.innerText;
        let images = document.querySelector('#pictures');
        images.setAttribute('src', imagesSelected[text]);
  });

  //Смена класса в дополнительном списке, созданном в конце страницы
  const selectedLiTo = document.querySelector('.todo-items')
  selectedLiTo.addEventListener('click', function(e)
  {
	  const selectedTo = document.querySelectorAll('.selected')
	  const targetTo = e.target
    Array.from(selectedTo).forEach(selectedTo =>
    {
  	  selectedTo.classList.remove('selected')
    });
    targetTo.classList.add('selected')
  });

  //Исчезновение серого окна при наведении курсора мыши
  let disappeared = document.getElementById("ghosting");
  disappeared.addEventListener("mouseover",letDisappeared, false);
  function letDisappeared()
  {
    document.querySelector("body").removeChild(disappeared);
  }

  //Создание широко окна при наведении курсора на оранжевое окно
  //ищем элемент по селектору
  let increase = document.getElementById('resize');
  //вешаем на него события
  increase.onmouseout = function(e)
  {
    document.getElementById('resize').style.width ='200px';
  }

  increase.onmouseover = function(e)
  {
    document.getElementById('resize').style.width='400px';
  };

  //Смена картинки и удаление класса из обоих списков, при клике по кнопке reset
  let res = document.querySelector('#reset');
  res.addEventListener('click', function () 
  {
    let selectedLi = document.querySelectorAll('.selected');
    Array.from(selectedLi).forEach(selectedLi => selectedLi.classList.remove('selected'));
    let images = document.querySelector('#pictures');
    images.setAttribute('src', 'images/panic.jpg');
  });
  window.addEventListener('keydown', keyDown, false);
  

  //Вывод сообщения, при вводе с клавиатуры цифры
  function keyDown(e)
  {
    if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
    {
      alert(`«Я НЕНАВИЖУ ЧИСЛААААА!»`);
    }
  }
}, 1500)});