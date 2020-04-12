
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// var object = {
	// dog : "chappi",
	// human : "fry",
	// car : "McLaren",
	// flar : "some flat",
	// book : "1q84"
// }

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// dog1 = {name : "marsik",
		// age : 2}
// dog2 = {name : "tuzik",
		// age : 3}
// dog3 = {name : "chappi",
		// age : 1}
// dog4 = {name : "barsik",
		// age : 5}
// dog5 = {name : "jack",
		// age : 4}		
// let arr = [dog1, dog2, dog3, dog4, dog5];
// console.log(arr);

// - 3 5 людей
// human1 = {
	// name : "John",
	// surname : "Shepard",
	// age : 33
// }
// human2 = {
	// name : "Alex",
	// surname : "Vence",
	// age : 19
// }
// human3 = {
	// name : "Gordon",
	// surname : "Freeman",
	// age : 27
// }
// human4 = {
	// name : "Neo",
	// surname : "Anderson",
	// age : 30
// }
// human5 = {
	// name : "John",
	// surname : "Connor",
	// age : 25
// }
// let arr = [human1, human2, human3, human4, human5];
// console.log(arr);

// - з 5 автомобілів
// car1 = {
	// manufacturer : "Tesla",
	// model : "3"
// }
// car2 = {
	// manufacturer : "Ford",
	// model : "Raptor"
// }
// car3 = {
	// manufacturer : "Toyota",
	// model : "Tundra"
// }
// car4 = {
	// manufacturer : "Mclaren",
	// model : "F1"
// }
// car5 = {
	// manufacturer : "DeLorean",
	// model : "DMC-12"
// }
// let arr = [car1, car2, car3, car4, car5];
// console.log(arr);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// var object = {
	// house : "NY, Halsey str",
	// driver : {
		// name : "Gordon",
		// surname : "Freeman"
	// },
	// toy : ["radiocar", "copter", "bycicle"],
	// table : "some table",
	// bag : "Derbie"
// }
// console.log(object);


// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
// -- статус Андрея
// for(let i = 0; i < users.length; i++){
	// if(users[i].name == 'andrey')
			// console.log(users[i].status);
// }

// -- статус Максима
// for(let i = 0; i < users.length; i++){
	// if(users[i].name == 'max')
			// console.log(users[i].status);
// }
// -- имя предпоследнего объекта
// console.log(users[users.length-1].name);
// -- имя третьего объекта
// console.log(users[2].name);
// -- возраст Олега
// for(let i = 0; i < users.length; i++){
	// if(users[i].name == 'oleg')
			// console.log(users[i].age);
// }
// -- возраст Оли
// for(let i = 0; i < users.length; i++){
	// if(users[i].name == 'olya')
			// console.log(users[i].age);
// }
// -- возраст + имя 5го объекта
// console.log(users[4].age + " " + users[4].name);
// -- возраст + сатус ани
// for(let i = 0; i < users.length; i++){
	// if(users[i].name == 'anya')
			// console.log(users[i].age + " " + users[i].status);
// }
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення