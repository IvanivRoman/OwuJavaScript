// -1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// var human = {
	// name : "John",
	// surname : "Shepard",
	// age : 37
// }

// var car = {
	// manufacturer : "Ford",
	// model : "Raptor",
	// vin : 123456789
// }

// var cat = {
	// alias : "Bob",
	// color : "grey",
	// weight : 5
// }

// -2 создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let phone = {
	// manufacturer : "Blackberry",
	// model : "Key2",
	// year : 2018,
	// conections : ["wi-fi", "bluetooth"],
	// camera : {
		// main : 12,
		// frontal : 8
	// }
// }

// let movie = {
	// writters : "The Wachowskis",
	// actors : ["Keanu Reeves" , "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
	// company : {
		// name : "Warner Bros",
		// city : "Hollywood"
	// }
// }

// let laptop = {
	// manufacturer : "Dell",
	// brand : "AlienWare",
	// grafic : ["Nvidia", "Intel Hd Grafics"],
	// CPU : {
		// brand : "Intel",
		// model : "i9"
	// }
// }

// let bicycle = {
	// name : "Ghost Lector",
	// sex : ["unisex", "man", "woman"],
	// year : 2019,
	// brake : {
		// front : "Sram Level Ultimate, 180 mm",
		// back : "Sram Level Ultimate, 160 mm"
	// }
// }

// let game = {
	// franchise : "Half - life",
	// games : ["Half - life", "Half - life 2", "Half - life: Episode one", "Half - life: Episode two", "Half - life: Alyx"],
	// developer : {
		// name : "Valve",
		// city : "Bellevue"
	// }
// }

// -3 При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(const keys in human){
	// console.log(`human.${keys}`);
// }

// for(const keys in phone){
	// console.log(`phone.${keys}`);
// }

// for(const keys in car){
	// console.log(`car.${keys}`);
// }

// for(const keys in cat){
	// console.log(`cat.${keys}`);
// }

// for(const keys in movie){
	// console.log(`movie.${keys}`);
// }

// for(const keys in laptop){
	// console.log(`laptop.${keys}`);
// }

// for(const keys in bicycle){
	// console.log(`bicycle.${keys}`);
// }

// for(const keys in game){
	// console.log(`game.${keys}`);
// }

// -4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(human));
// console.log(Object.keys(car));
// console.log(Object.keys(cat));
// console.log(Object.keys(phone));
// console.log(Object.keys(movie));
// console.log(Object.keys(laptop));
// console.log(Object.keys(bicycle));
// console.log(Object.keys(game));

// -5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let car1 = {
	// model : "Lamborghini Miura",
	// year : 1972,
	// power : 500,
	// color : "green"
// }

// let car2 = {
	// model : "Ferrari 250 GTO",
	// year : 1960,
	// power : 450,
	// color : "red"
// }

// let car3 = {
	// model : "Acura NSX",
	// year : 1990,
	// power : 372,
	// color : "red"
// }

// let car4 = {
	// model : "Jaguar E-Type",
	// year : 1961,
	// power : 380,
	// color : "black"
// }

// let car5 = {
	// model : "Dodge Viper",
	// year : 1992,
	// power : 400,
	// color : "yellow"
// }

// let car6 = {
	// model : "Shelby Cobra",
	// year : 1960,
	// power : 450,
	// color : "blue"
// }

// let car7 = {
	// model : "Chevrolet Corvette",
	// year : 1960,
	// power : 400,
	// color : "yellow"
// }

// let car8 = {
	// model : "Mazda MX-5 Miata",
	// year : 1990,
	// power : 350,
	// color : "orange"
// }

// let car9 = {
	// model : "Mercedes-Benz SL",
	// year : 1954,
	// power : 621,
	// color : "gray"
// }

// let car10 = {
	// model : "Porsche 911",
	// year : 2014,
	// power : 300,
	// color : "red" 
// }

// let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

// -6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// city1 = {
	// name : "Tijuana",
	// population : 1909424,
	// country : "Mexico",
	// region : "Baja California"
// }

// city2 = {
	// name : "Acapulco",
	// population : 857883,
	// country : "Mexico",
	// region : "Guerrero"
// }

// city3 = {
	// name : "Caracas",
	// population : 2980492,
	// country : "Venezuela",
	// region : "Capital District"
// }

// city4 = {
	// name : "Ciudad Victoria",
	// population : 365089,
	// country : "Mexico",
	// region : "Tamaulipas"
// }

// city5 = {
	// name : "Ciudad Juárez",
	// population : 1462133,
	// country : "Mexico",
	// region : "Chihuahua"
// }

// let cities = [city1, city2, city3, city4, city5];

// -7 Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
 // let car1 = {
	// model : "Lamborghini Miura",
	// year : 1972,
	// power : 500,
	// color : "green",
	// driver : {
		// name : "Dominic Toretto",
		// age : 34,
		// sex : "male",
		// experience : 18
	// }
// }

// let car2 = {
	// model : "Ferrari 250 GTO",
	// year : 1960,
	// power : 450,
	// color : "red",
	// driver : {
		// name : "Letty Ortiz",
		// age : 32,
		// sex : "female",
		// experience : 10
	// }
// }

// let car3 = {
	// model : "Acura NSX",
	// year : 1990,
	// power : 372,
	// color : "red",
	// driver : {
		// name : "Brian O'Conner",
		// age : 31,
		// sex : "male",
		// experience : 14
	// }
// }

// let car4 = {
	// model : "Jaguar E-Type",
	// year : 1961,
	// power : 380,
	// color : "black",
	// driver : {
		// name : "Luke Hobbs",
		// age : 35,
		// sex : "male",
		// experience : 13
	// }
// }

// let cars = [car1, car2, car3, car4];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;

// while(i < cities.length){
	// console.log(cities[i]);
	// i++;
// }

// let j = 0;

// while(j < cars.length){
	// console.log(cars[j]);
	// j++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i = 0; i < cities.length; i++){
	// console.log(cities[i]);
// }

// for(let i = 0; i < cars.length; i++){
	// console.log(cars[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const city of cities) {
  // console.log(city);
// }

// for (const car of cars) {
  // console.log(car);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jsonObj1 = JSON.stringify(human);
// let jsonObj2 = JSON.stringify(car);
// let jsonObj3 = JSON.stringify(cat);

// - взять json из задания 11 и превратить их обратно в объекты.
// let parseJson1 = JSON.parse(jsonObj1);
// let parseJson2 = JSON.parse(jsonObj2);
// let parseJson3 = JSON.parse(jsonObj3);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let jsons = [];
// for(let i = 0; i < cities.length; i++){
	// jsons[i] = JSON.stringify(cities[i]);
// }
// console.log(jsons);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let jsons = [];
// for(let i = 0; i < cars.length; i++){
	// jsons[i] = JSON.stringify(cars[i]);
// }
// console.log(jsons);

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let jsons = [];
// for(let i = 0; i < cars.length; i++){
	// jsons[i] = JSON.stringify(cars[i]);
// }
// console.log(jsons);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
			// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
			// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
			// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
			// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for(let i = 0; i < users.length; i++){
	// console.log(users[i].name + ":");
	// for(let j = 0; j < users[i].skills.length; j++){
		// console.log(users[i].skills[j]);
	// }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let allSkills = [];
// for(let i = 0; i < users.length; i++){
	// for(let j = 0; j < users[i].skills.length; j++){
		// allSkills.push(users[i].skills[j]);
	// }
// }

// console.log(allSkills);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
  // let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
			// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
			// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
			// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
			// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
			
// for(let user of users){
	// console.log(user.name);
	// for(let skill of user.skills){
		// console.log(skill);
	// }
// }			

            			// let users = [{
            				// name: 'vasya',
            				// age: 31,
            				// status: false,
            				// address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            				// name: 'petya',
            				// age: 30,
            				// status: true,
            				// address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            				// name: 'kolya',
            				// age: 29,
            				// status: true,
            				// address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            				// name: 'olya',
            				// age: 28,
            				// status: false,
            				// address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            				// name: 'max',
            				// age: 30,
            				// status: true,
            				// address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            				// name: 'anya',
            				// age: 31,
            				// status: false,
            				// address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            				// name: 'oleg',
            				// age: 28,
            				// status: false,
            				// address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            				// name: 'andrey',
            				// age: 29,
            				// status: true,
            				// address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            				// name: 'masha',
            				// age: 30,
            				// status: true,
            				// address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            				// name: 'olya',
            				// age: 31,
            				// status: false,
            				// address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            				// name: 'max',
            				// age: 31,
            				// status: true,
            				// address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			// }];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addresses = [];
// for(let user of users){
	// addresses.push(user.address);
// }
// console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for(let user of users){
	// const div = document.createElement("div");
	// div.innerText = `${user.name} ${user.age}`;
	// document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for(let user of users){
	// const div = document.createElement("div");
	// const div1 = document.createElement("div");
		// div1.innerText = user.name;
	// const div2 = document.createElement("div");
		// div2.innerText = user.age;
	// const div3 = document.createElement("div");
		// div3.innerText = user.status;
	// const div4 = document.createElement("div");
		// div4.innerText = user.address;
		// div.appendChild(div1);
		// div.appendChild(div2);
		// div.appendChild(div3);
		// div.appendChild(div4);
	// document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
//   блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for(let user of users){
	// const div = document.createElement("div");
	// const divName = document.createElement("div");
	// const divAge = document.createElement("div");
	// const divAddr = document.createElement("div");
		
		// const divCity = document.createElement("div");
			// divCity.innerText = user.address.city;
		// const divCountry = document.createElement("div");
			// divCountry.innerText = user.address.country;
		// const divStreet = document.createElement("div");
			// divStreet.innerText = user.address.street;
		// const divHouse = document.createElement("div");
			// divHouse.innerText = user.address.houseNumber;
			
		// divAddr.appendChild(divCity);
		// divAddr.appendChild(divCountry);
		// divAddr.appendChild(divStreet);
		// divAddr.appendChild(divHouse);
	
	// divName.innerText = user.name;
	// divAge.innerText = user.age;
	
	// div.appendChild(divName);
	// div.appendChild(divAge);
	// div.appendChild(divAddr);
	
	// document.body.appendChild(div);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
								// {id: 2, name: 'petya', age: 30, status: true}, 
								// {id: 3, name: 'kolya', age: 29, status: true}, 
								// {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
								// {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
								// {user_id: 2, country: 'Poland', city: 'Krakow'}, 
								// {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let usersWithCities = [];
// for(let user of usersWithId){
	// for(let city of citiesWithId){
		// if(user.id == city.user_id){
			// user.address = city;
			// usersWithCities.push(user);
		// }
	// }
// }
// console.log(usersWithCities);




// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
	// let div = document.createElement("div");
	// div.id = "some id";
	// div.className = "new Class";
	// div.innerText = "Hello world!";
	// document.body.appendChild(div);
	
	// let otherDiv1 = document.getElementById("some id");
	// console.log(otherDiv1.innerText);
	
	// let otherDiv2 = document.getElementsByClassName("new Class");
	// for(let div2 of otherDiv2){
		// console.log(div2.innerText);
	// }

// - змінити цей текст використовуючи селектори id, class,  tag
	// let idElement = document.getElementById("some id");
	// idElement.innerText += " Nice weather today!"
	
	// let classElement = document.getElementsByClassName("new Class");
		// for(let classEl of classElement)
			// classEl.innerText += "\n testing some methods ";
		
	// let tagElement = document.getElementsByTagName("div");
		// for(let tagEl of tagElement)
			// tagEl.innerText += "\n testing getElementsByTagName method";
	

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
	 // let container = document.getElementById('container');
		// container.style.height=250+"px";
		// container.style.width=250+"px";

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// td1.textContent = "hello";
// let td2 = document.createElement('td');
// td2.textContent = "world";
// let td3 = document.createElement('td');
// td3.textContent = "!";

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// for(let i = 1; i <= 10; i++){
	// let tr = document.createElement('tr');
	// let td1 = document.createElement('td');
		// td1.textContent = "hello";
	// let td2 = document.createElement('td');
		// td2.textContent = "world";
	// let td3 = document.createElement('td');
		// td3.textContent = i + "!";
		
	// tr.appendChild(td1);
	// tr.appendChild(td2);
	// tr.appendChild(td3);

	// table.appendChild(tr);
		
// }

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// for(let i = 1; i <= 10; i++){
	// let tr = document.createElement('tr');
	
	// for(let j = 1; j <= 5; j++){
		// let td = document.createElement('td');
		// td.textContent = "word " + j;
		// tr.appendChild(td);
	// }
	
	// table.appendChild(tr);
// }

// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let table = document.createElement('table');
// let n = parseInt(prompt('введіть кількість рядків:'), 10);
// let m = parseInt(prompt('введіть кількість стовпчиків:'), 10);
// for(let i = 1; i <= n; i++){
	// let tr = document.createElement('tr');
	
	// for(let j = 1; j <= m; j++){
		// let td = document.createElement('td');
		// td.textContent = "word " + j;
		// tr.appendChild(td);
	// }
	
	// table.appendChild(tr);
// }

// <!-- <!-- document.body.appendChild(table); -->		 -->

		
			// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 // - знайти всі елементі, які мають class
 // let arr = document.getElementsByClassName("rules rule3");
 // for(let class1 of arr){
	// console.log(class1);
 // }
 
 // - знайти всі параграфи ,та змінити текст на hello oktenweb!
 // let arr = document.getElementsByTagName("p");
 // for(let tag of arr){
	// tag.textContent = "hello oktenweb!";
 // }
 
 // - знайти всі div та змінити ім колір на червоний
 // let arr = document.getElementsByTagName("div");
 // for(let div of arr){
	// div.style.color = "red";
 // }
 
 // ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let arr = document.getElementsByTagName("h2");
// let div = document.getElementById("content");
// let ul = document.createElement("ul");
// div.appendChild(ul);
// for(let h2 of arr){
	// let li = document.createElement("li");
	// li.appendChild(h2);
	// ul.appendChild(li);
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//todo add rules

			// let rules = [
				// {
					// title: 'Первое правило Бойцовского клуба.',
					// body: 'Никому не рассказывать о Бойцовском клубе.'
				// },
				// {
					// title: 'Второе правило Бойцовского клуба.',
					// body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				// },
				// {
					// title: 'Третье правило Бойцовского клуба.',
					// body: 'В схватке участвуют только двое.'
				// },
				// {
					// title: 'Четвертое правило Бойцовского клуба.',
					// body: 'Не более одного поединка за один раз.'
				// },
				// {
					// title: 'Пятое правило Бойцовского клуба.',
					// body: 'Бойцы сражаются без обуви и голые по пояс.'
				// },
				// {
					// title: 'Шестое правило Бойцовского клуба.',
					// body: 'Поединок продолжается столько, сколько потребуется.'
				// },
				// {
					// title: 'Седьмое правило Бойцовского клуба.',
					// body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				// },
				// {
					// title: 'Восьмое и последнее правило Бойцовского клуба.',
					// body: 'Новичок обязан принять бой.'
				// },

			// ];
 // let div = document.getElementById("wrap");
 // for(let i = 1; i <= rules.length; i++){
	// let div1 = document.createElement("div");
	// let h2 = document.createElement("h2");
	// h2.textContent = rules[i-1].title;
	// let p = document.createElement("p");
	// p.textContent = rules[i-1].body;
	// div1.appendChild(h2);
	// div1.appendChild(p);
	// div.appendChild(div1);
 }




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// © 2020 GitHub, Inc.