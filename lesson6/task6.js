// - создать массив с 20 числами.
// let arr = [5, 12, 234, 123, -23, 423, -647, 3, 55, 8792, 7, 66, 2, 8, 1, 21, 52, 7, 8, 0 ];
// -- при помощи метода sort отсортировать массив.
// arr.sort(function(a, b){return a - b});
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr.sort(function(a, b){return b - a});
// console.log(arr);

// -- при помощи filter получить числа кратные 3
// function multiple3(element){
	// return (element % 3) === 0;
// }

// console.log(arr.filter(multiple3));

// -- при помощи filter получить числа кратные 10
// function multiple10(element){
	// return (element % 10) === 0;
// }

// console.log(arr.filter(multiple10));

// -- перебрать (проитерировать) массив при помощи foreach()
// function iterateArray(item, index, array){
	// console.log("i: " + index + " item: " + item + " ( array: " + array + " )");
// }

// arr.forEach(iterateArray);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// console.log(arr.map(function(el){return el * 3}));

// - создать массив со словами на 15-20 элементов.
//let arr = ["В", "первой", "пятерке", "рейтинга", "PCT", "оказались", "Huawei", "Mitsubishi", "Samsung", "Qualcomm", "и", "OPPO", "При", "чем", "последняя", "сделала", "за", "год", "феноменальный", "рывок"];

// -- отсортировать его по алфавиту в восходящем порядке.
// console.log(arr.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(arr.reverse());

// -- отфильтровать слова длиной менее 4х символов
// function less4(el){
	// return el.length < 4;
// }

// console.log(arr.filter(less4));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// console.log(arr.map(function(el){return el + "!"}));

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//let users = [ {name: 'vasya', age: 31, status: false},          
			  // {name: 'petya', age: 30, status: true},           
			  // {name: 'kolya', age: 29, status: true},           
			  // {name: 'olya', age: 28, status: false},           
			  // {name: 'max', age: 30, status: true}, 
			  // {name: 'anya', age: 31, status: false}, 
			  // {name: 'oleg', age: 28, status: false}, 
			  // {name: 'andrey', age: 29, status: true}, 
			  // {name: 'masha', age: 30, status: true}, 
			  // {name: 'olya', age: 31, status: false}, 
			  // {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
//*********ASC*********
// users.sort(function(a, b){return a.age - b.age});

// function iterateArray(item, index, array){
	// console.log("i: " + index + " item: [" + item.age + " : " + item.name + "]");
// }

// console.log(users.forEach(iterateArray));

//*********DESC*********
// users.sort(function(a, b){return b.age - a.age});
// console.log(users.forEach(iterateArray));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//*********ASC*********
// users.sort(function(a, b){return a.name.length - b.name.length});

// function iterateArray(item, index, array){
	// console.log("i: " + index + " item: [" + item.name + " : " + item.age + "]");
// }

// console.log(users.forEach(iterateArray));

//*********DESC*********
// users.sort(function(a, b){return b.name.length - a.name.length});
// console.log(users.forEach(iterateArray));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// function addId(el, id){
	// el.id = id++;
	// return el;
// }

// function iterateArray(item, index, array){
	// console.log("i: " + index + " item: [" + item.id + " : " + item.name + " : " + item.age + "]");
// }

// let mass = users.map(addId);
// console.log(mass.forEach(iterateArray));

// - відсортувати його за індентифікатором
// console.log(mass.sort(function(a, b){return b.id - a.id}));

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(a, b) {
  // let operator = prompt("Enter mathematic operator (only one of: +-*/)");
  // switch(operator){
	  // case "+":
		// return a + b;
	// case "-":
		// return a - b;
	// case "*":
		// return a * b;
	// case "/":
		// return a / b;
	// default:
		// return "False operator";
  // }
// }
// function processUserInput(callback){
	// let a = parseInt(prompt("Enter a number:"));
	// let b = parseInt(prompt("Enter a number:"));
	// return callback(a, b);
// }
// console.log(processUserInput(calc));

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc(a, b) {
  // let operator = prompt("Enter mathematic operator (only one of: +-*/)");
  // switch(operator){
	  // case "+":
		// return a + b;
	// case "-":
		// return a - b;
	// case "*":
		// return a * b;
	// case "/":
		// return a / b;
	// default:
		// return "False operator";
  // }
// }
// function processUserInput(callback){
	// let a = parseInt(prompt("Enter a number:"));
	// let b = parseInt(prompt("Enter a number:"));
	// let c = parseInt(prompt("Enter a number:"));
	
	// let ab = callback(a, b);
	// return callback(ab, c);
// }
// console.log(processUserInput(calc));

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




 // let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
			  // {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
			  // {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
			  // {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
			  // {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
			  // {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
			  // {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
			  // {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
			  // {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
			  // {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
			  // {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
			  // {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
			  // {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
//console.log(cars.filter(function(el){return el.volume > 3}));

// - двигун = 2л
//console.log(cars.filter(function(el){return el.volume == 2}));

// - виробник мерс
//console.log(cars.filter(function(el){return el.producer === "mercedes"}));

// - двигун більше 3х літрів + виробник мерседес
//console.log(cars.filter(function(el){return el.volume > 3 && el.producer === "mercedes"}));

// - двигун більше 3х літрів + виробник субару
//console.log(cars.filter(function(el){return el.volume > 3 && el.producer === "subaru"}));

// - сили більше ніж 300
//console.log(cars.filter(function(el){return el.power > 300}));

// - сили більше ніж 300 + виробник субару
//console.log(cars.filter(function(el){return el.power > 300 && el.producer === "subaru"}));

// - мотор серіі ej
//console.log(cars.filter(function(el){return el.engine.startsWith("ej")}));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
//console.log(cars.filter(function(el){return el.power > 300 && el.producer === "subaru" && el.engine.startsWith("ej")}));

// - двигун меньше 3х літрів + виробник мерседес
//console.log(cars.filter(function(el){return el.volume < 3 && el.producer === "mercedes"}));

// - двигун більше 2л + сили більше 250
//console.log(cars.filter(function(el){return el.volume > 2 && el.power > 250}));

// - сили більше 250  + виробник бмв
//console.log(cars.filter(function(el){return el.power > 250 && el.producer === "bmw"}));


// - взять слдующий массив
 // let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
						 // {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
						 // {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
						 // {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
						 // {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Abr', number: 115}}, 
						 // {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
						 // {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
						 // {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
						 // {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
						 // {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
						 // {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Zelena', number: 121}}];
						 
// -- отсортировать его по id пользователей
// usersWithAddress.sort(function(a, b){return a.id - b.id});
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort(function(a, b){return b.id - a.id});
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort(function(a, b){return a.age - b.age});
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort(function(a, b){return b.age - a.age});
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort(function(a, b){
	// let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
	// if (nameA < nameB) 
		// return -1;
	// if (nameA > nameB)
		// return 1;
		// return 0;
// });
// console.log(usersWithAddress);


// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort(function(a, b){
	// let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
	// if (nameB < nameA) 
		// return -1;
	// if (nameB > nameA)
		// return 1;
		// return 0;
// });
// console.log(usersWithAddress);

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort(function(a, b){
	// let streetA = a.address.street.toLowerCase(), streetB = b.address.street.toLowerCase()
	// if (streetA < streetB) 
		// return -1;
	// if (streetA > streetB)
		// return 1;
		// return 0;
// });
// console.log(usersWithAddress);

// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort(function(a, b){
	// let houseA = a.address.number, houseB = b.address.number;
		// return houseA - houseB;
// });
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// console.log(usersWithAddress.filter(function(el){return el.age < 30}));

// -- отфильтровать (оставить) тех у кого отрицательный статус
//console.log(usersWithAddress.filter(function(el){return el.status == false}));

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//console.log(usersWithAddress.filter(function(el){return el.age < 30 && el.status == false}));

// -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter(function(el){return el.address.number % 2 == 0}));

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// class Car{
	// constructor(model, power, owner, price, year){
		// this.model = model;
		// this.power = power;
		// this.owner = owner;
		// this.price = price;
		// this.year = year;
	// }
	
	// repairPower(){
		// return this.power = this.power * 1.1; 
	// }
	
	// changeDriver(driver){
		// return this.owner = driver;
	// }
	
// }

// class Owner{
	// constructor(name, age, experience){
		// this.name = name;
		// this.age = age;
		// this.experience = experience;
	// }
// }
// let driver1 = new Owner("Dominik", 32, 15);
// let driver2 = new Owner("Alyx", 24, 5);
// let driver3 = new Owner("Gordon", 27, 9);
// let driver4 = new Owner("Ily", 48, 28);
// let driver5 = new Owner("John", 26, 8);
// let driver6 = new Owner("Shepard", 30, 12);
// let driver7 = new Owner("Trent", 28, 14);

// let drivers = [driver1, driver2, driver3, driver4, driver5, driver6, driver7];

// let car1 = new Car("Shelby GT350", 306, driver7, 3500, 1965);
// let car2 = new Car("Shelby GT500", 355, driver6, 3700, 1968);
// let car3 = new Car("Dodge Super Bee A12", 390, driver5, 2400, 1969);
// let car4 = new Car("GT Corvette", 600, driver4, 2800, 1971);
// let car5 = new Car("AMX/3", 340, driver3, 3300, 1969);
// let car6 = new Car("Chevy Corvette", 205, driver2, 3000, 1984);
// let car7 = new Car("COPO Camaro", 425, driver1, 3400, 1969);

// let cars = [car1, car2, car3, car4, car5, car6, car7];

// for(let i = 0; i < cars.length; i += 2){
	// cars[i].repairPower();
	// cars[i].changeDriver(drivers[i]);
// }

// console.log(cars);

// let totalCostOfAllCars = 0;
// for(let car of cars){
	// totalCostOfAllCars += car.price; 
// }
// console.log("Total cost: " + totalCostOfAllCars);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
//Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// let minIndex = -1; 
// let maxIndex = -1;
// let element = parseInt(prompt("enter number from 0 to 14"));

// for(let i = 0; i < Arr.length; i++){
	
	// if(i == 0){
		// if(element == Arr[i]){
			// minIndex = i;
		// }
	// }
	
	// if(i > 0){
		// if(element == Arr[i] && element != Arr[i-1]){
			// minIndex = i;
		// }
	// }
	
	// if(i == Arr.length - 1){
		// if(element == Arr[i]){
			// maxIndex = i;
		// }
	// }
	
	// if(i < Arr.length){
		// if(element == Arr[i] && element != Arr[i+1]){
			// maxIndex = i;
		// }
	// }

	
// }

// console.log("minIndex: " + minIndex);
// console.log("maxIndex: " + maxIndex);