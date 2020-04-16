// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// h1.innerHTML = "JavaScript sucks";
// div.appendChild(h1);
// div.id = 'text';
// div.style.width = 100 + 'px';
// div.style.height = 100 + 'px';
// div.style.color = "red";
// div.onclick = function(){
		//div.hidden = true;
		//or
		// div.style.display = 'none';
// }
// document.body.appendChild(div);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.innerHTML = "Click me";
// button.onclick = function(){
	// button.hidden = true;
// }
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// input.setAttribute("type", "text");
// input.setAttribute("value", "Enter your age");
// let button = document.createElement('button');
// button.innerHTML = "Submit";
// button.onclick = function(){
	// let age = parseInt(input.value);
	// if(age < 18)
		// alert('You are not suppose to be here!');
	// else
		// alert('Everything is in order');
// }
// document.body.appendChild(input);
// document.body.appendChild(button);

// - Создайте меню, которое раскрывается/сворачивается при клике

// let button = document.createElement('button');
// let div = document.createElement('div');
// let h61 = document.createElement('h6');
// let h62 = document.createElement('h6');
// let h63 = document.createElement('h6');

// button.innerHTML = 'Menu';
// h61.innerHTML = 'Home';
// h62.innerHTML = 'About';
// h63.innerHTML = 'Contact';

// button.appendChild(div);
// div.appendChild(h61);
// div.appendChild(h62);
// div.appendChild(h63);

// let flag = false;

// document.body.appendChild(button);

// button.onclick = function(){
	// if(flag){
		// div.style.display = 'block';
		// flag = false;
	// } else {
		// div.style.display = 'none';
		// flag = true;
	// }
// }

// preventDefault

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
 // Добавьте каждому комментарию по кнопке для сворачивания его body.
 
 // let arr = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
			// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
			// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
			// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
			// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
			// ];
			
// let mainDiv = document.createElement('div');
// for(let i = 0; i < arr.length; i++){
	// let div = document.createElement('div');
	// let h2 = document.createElement('h2');
	// let p = document.createElement('p');
	// let button = document.createElement('button');
	
	// button.innerText = 'Hide';
	// h2.innerText = arr[i].title;
	// p.innerText = arr[i].body;
	
	// div.appendChild(h2);
	// div.appendChild(p);
	// div.appendChild(button);
	// mainDiv.appendChild(div);
	
	// button.onclick = function(){
		// p.hidden
			// ? p.hidden = false
			// : p.hidden = true
	// }
// }

// document.body.appendChild(mainDiv);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let div = document.createElement('div');
// let div1 = document.createElement('div');
// let div2 = document.createElement('div');

// let form1 = document.createElement('form');
// let form2 = document.createElement('form');

// let inputOne_1 = document.createElement('input');
// let inputOne_2 = document.createElement('input');
// let inputTwo_1 = document.createElement('input');
// let inputTwo_2 = document.createElement('input');

// let button = document.createElement('button');

// div.appendChild(div1);
// div.appendChild(div2);

// div1.appendChild(form1);
// div2.appendChild(form2);

// form1.appendChild(inputOne_1);
// form1.appendChild(inputOne_2);
// form2.appendChild(inputTwo_1);
// form2.appendChild(inputTwo_2);

// div.appendChild(button);

// button.innerHTML = "Submit";

// form1.name = "firstForm";
// form2.name = "secondForm";

// inputOne_1.name = "name";
// inputOne_2.name = "age";
// inputTwo_1.name = "name";
// inputTwo_2.name = "age";

// button.onclick = function(){
	// console.log(document.forms.firstForm.name.value);
	// console.log(document.forms.firstForm.age.value);
	// console.log(document.forms.secondForm.name.value);
	// console.log(document.forms.secondForm.age.value);
// }

// document.body.appendChild(div);

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// function drawTable(row, column, element){
	// let table = document.createElement('table');
	// for(let i = 0; i < row; i++){
		
		// let tr = document.createElement('tr');
		
		// for(let j = 0; j < column; j++){
			// let td = document.createElement('td');
			// td.innerHTML = element;
			// tr.appendChild(td);
		// }
		
		// table.appendChild(tr);
	// }
	
	// document.body.appendChild(table);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let div = document.createElement('div');
// let form = document.createElement('form');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let button = document.createElement('button');

// form.name = "formOne";

// input1.name = "row";
// input2.name = "column";
// input3.name = "element";

// button.innerHTML = "Submit";

// div.appendChild(form);
// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(input3);
// div.appendChild(button);

// button.onclick = function(){
	// let row = document.forms.formOne.row.value;
	// let column = document.forms.formOne.column.value;
	// let element = document.forms.formOne.element.value;
	
	// drawTable(row, column, element);
// }

// document.body.appendChild(div);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [{id: 1, img_url: 'blackberry-key2-le-1.jpg'},
				// {id: 2, img_url: 'blackberry-key2-le-2.jpg'},
				// {id: 3, img_url: 'blackberry-key2-le-3.jpg'}];

// let div = document.createElement('div');
// let img = document.createElement('img');
// let button1 = document.createElement('button');
// let button2 = document.createElement('button');

// button1.innerHTML = "Left";
// button2.innerHTML = "Right";

// let index = 0;

// img.width = 300;
// img.src = imgArray[index].img_url;

// div.appendChild(img);
// div.appendChild(button1);
// div.appendChild(button2);

// button1.onclick = function(){
	// index - 1 < 0
	// ? index = imgArray.length - 1
	// : index -= index;
	
	// img.src = imgArray[index].img_url;
// }

// button2.onclick = function(){
	// index + 1 > imgArray.length -1
	// ? index = 0
	// : index += index;
	
	// img.src = imgArray[index].img_url;
// }

// document.body.appendChild(div);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badWords = ['bad1', 'bad2', 'bad3', 'bad4', 'bad5', 'bad6', 'bad7'];
// let div = document.createElement('div');
// let form = document.createElement('form');
// let input = document.createElement('input');
// let button = document.createElement('button');

// form.name = 'firstForm';
// input.name = 'text';

// div.appendChild(form);
// form.appendChild(input);
// form.appendChild(button);
// button.innerHTML = "OK";

// button.onclick = function(ev){
	// ev.preventDefault();
	// let text = document.forms.firstForm.text.value;
	// let arr = text.split(" ");
	// for(let i = 0; i < badWords.length; i++){
		// for(let j = 0; j < arr.length; j++){
			// if(arr[i] === badWords[j]){
				// alert("You are using bad words!!!");
			// }
		// }
	// }
// }

// document.body.appendChild(div);


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let arrH2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');

// let ul = document.createElement('ul');

// for(let i = 0; i < arrH2.length; i++){
	// let li = document.createElement('li');
	// let a = document.createElement('a');
	// let flag = 'flag' + i;
	// a.href = "#" + flag;
	// arrH2[i].setAttribute('id', flag);
	// a.innerHTML = arrH2[i].innerText;
	// li.appendChild(a);
	// ul.appendChild(li);
// }
// content.appendChild(ul);

// content.style.width = '30%';
// wrap.style.width = '30%';
// content.style.float = 'left';
// wrap.style.float = 'left';


// -- взять массив пользователей
// let usersWithAddress = [
                // {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                // {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                // {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                // {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                // {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                // {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                // {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                // {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                // {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                // {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                // {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            // ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let divMain = document.createElement('div');
// let divArray = document.createElement('div');

// let divFilter = document.createElement('div');
// let label1 = document.createElement('label');
// let label2 = document.createElement('label');
// let label3 = document.createElement('label');

// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');

// let button = document.createElement('button');

// label1.innerText = "со статусом false";
// label2.innerText = "старше 29 лет";
// label3.innerText = "город киев";

// button.innerText = "Filter";

// input1.type = "checkbox";
// input2.type = "checkbox";
// input3.type = "checkbox";

// divFilter.appendChild(input1);
// divFilter.appendChild(label1);
// divFilter.appendChild(input2);
// divFilter.appendChild(label2);
// divFilter.appendChild(input3);
// divFilter.appendChild(label3);
// divFilter.appendChild(button);

// divArray.appendChild(renderArray(usersWithAddress));
// divMain.appendChild(divArray);
// divMain.appendChild(divFilter);

// function renderArray(array){
	
	// let main = document.createElement('div');
	
	// for(let i = 0; i < array.length; i++){
		// let div = document.createElement('div');
		// div.innerHTML = JSON.stringify(array[i]);
		// main.appendChild(div);
	// }
	// return main;
// }

// button.onclick = function(){
	// let mass = JSON.parse(JSON.stringify(usersWithAddress));
	
	// if(input1.checked) mass = mass.filter(value => value.status == false);
	// if(input2.checked) mass = mass.filter(value => value.age >= 29);
	// if(input3.checked) mass = mass.filter(value => value.address.city === 'Kyiv');
	
	// divArray.innerHTML = '';
	// divArray.appendChild(renderArray(mass));
// }


// document.body.appendChild(divMain);

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
