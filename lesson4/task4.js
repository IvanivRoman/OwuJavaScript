// - створити функцію яка виводить масив
// function printArray(array){
			// console.log(array);
// }

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function createRandomArray(){
	// let length = Math.floor(Math.random() * Math.floor(10));
	// let arr = [];
	// for(let i = 0; i < length; i++){
		// arr[i] = Math.floor(Math.random() * Math.floor(10));
	// }
	// return arr;
// }

// printArray(createRandomArray());

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function findMin(a, b, c){
	// if(a <= b && a <= c){
		// console.log(a);
		// return a;
	// } else if(b <= a && b <= c){
		// console.log(b);
		// return b;
	// }
	// else {
		// console.log(c);
		// return c;
	// }
// }

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function findMax(a, b, c){
	// if(a >= b && a >= c){
		// console.log(a);
		// return a;
	// } else if(b >= a && b >= c){
		// console.log(b);
		// return b;
	// }
	// else {
		// console.log(c);
		// return c;
	// }
// }

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function findMinPrintMax(... args){
	// let min = arguments[0];
	// let max = arguments[0];
	// for(let i = 0; i < arguments.length; i++){
		// if(min > arguments[i]){
			// min = arguments[i];
		// }
		// if(max < arguments[i]){
			// max = arguments[i];
			// console.log("max: " + max);
		// }
	// }
	// return min;
// }

// console.log("min: " + findMinPrintMax(5, 2, -3, 7, 0, 6, -1));

// - створити функцію яка повертає найбільше число з масиву
// function findMaxFromArray(array){
	// let max = array[0];
	// for(let i = 0; i < array.length; i++){
		// if(max < array[i]){
			// max = array[i];
		// }
	// }
	// return max;
// }
// let arr = [5, 2, -3, 7, 0, 6, -1];
// console.log(findMaxFromArray(arr));

// - створити функцію яка повертає найменьше число з масиву
// function findMinFromArray(array){
	// let min = array[0];
	// for(let i = 0; i < array.length; i++){
		// if(min > array[i]){
			// min = array[i];
		// }
	// }
	// return min;
// }
// let arr = [5, 2, -3, 7, 0, 6, -1];
// console.log(findMinFromArray(arr));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arraySum(array){
	// let sum = 0;
	// for(let i = 0; i < array.length; i++){
		// sum += array[i];
	// }
	// return sum;
// }
// let arr = [5, 2, -3, 7, 0, 6, -1];
// console.log(arraySum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageFromArray(array){
	// let avg = 0;
	// for(let i = 0; i < array.length; i++){
		// avg += array[i];
	// }
	// return avg/array.length;
// }
// let arr = [5, 2, -3, 7, 0, 6, -1];
// console.log(averageFromArray(arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function numberOfObjects(array){
	// let num = 0;
	// for(let i = 0; i < array.length; i++){
		// if(typeof array[i] === 'object')
			// num++;
	// }
	// return num;
// }
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}, 3, 5];
// console.log(numberOfObjects(citiesWithId));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function countFields(array){
	// let num = 0;
	// for(let elem of array){
		// if(typeof elem === 'object' && !Array.isArray(elem)){
			// for(let key in elem){
				// num++;
			// }
		// }
	// }
	// return num;
// }
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}, 3, 5];
// console.log(countFields(citiesWithId));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  // Приклад
  // [1,2,3,4]
  // [2,3,4,5]
  // результат
  // [3,5,7,9]
// function concatArrays(arr1, arr2){
	// let mass = [];
	// for(let i = 0; i < arr1.length; i++){
		// for(let j = 0; j < arr2.length; j++){
			// if(i == j){
				// mass.push(arr1[i] + arr2[j]);
			// }
		// }
	// }
	// return mass;
// }
// arr1 = [1,2,3,4];
// arr2 = [2,3,4,5];
// console.log(concatArrays(arr1, arr2));
  
  
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function replace(array, i){
	// if(i < array.length && i >= 0){
		// let obj = array[i];
		// array[i] = array[i+1];
		// array[i+1] = obj;
		
	// }
	// return array;
// }
// let test = [1,2,3,4,0];
// console.log(replace(test, -1));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function filterZero(array){
	// let mass = [];
	// let massZero = [];
	// for(let i = 0; i < array.length; i++){
		// if(array[i] == 0){
			// massZero.push(array[i]);
		// } else {
			// mass.unshift(array[i]);
		// }
	// }
	
	// array = [];
	
	// for(let i = mass.length - 1; i >= 0; i--){
		// array.push(mass[i]);
	// }
	
	// for(let i = 0; i < massZero.length; i++){
		// array.push(massZero[i]);
	// }
	
	// return array;
// }

// let arr = [0,0,1,0];
// console.log(filterZero(arr));


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addText(){
	// let div = document.createElement('div');
	// div.innerHTML = "Hello owu";
	// document.body.appendChild(div);
// }

// addText();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText(element, text){
	// let elem = document.createElement(element);
	// elem.innerHTML = text;
	// document.body.appendChild(elem);
// }

// addText('div', 'Aloha');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// function addListToHtml(array, id){
	// let element = document.getElementById(id);
	// let ul = document.createElement('ul');
	// for(let i = 0; i < array.length; i++){
		// let object = array[i];
		// let li = document.createElement('li');
		// li.innerHTML = `${i} - ${object.country}`;
		// ul.appendChild(li);
	// }
	// element.appendChild(ul);
// }

// addListToHtml(citiesWithId, 'test');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function addListToHtml(array, id){
	// let element = document.getElementById(id);
	// let ul = document.createElement('ul');
	// for(let i = 0; i < array.length; i++){
		// let object = array[i];
		// let li = document.createElement('li');
		// let div = document.createElement('div');
		// let h3 = document.createElement('h3');
		// let p = document.createElement('p');
		// h3.innerHTML = `${i} - ${object.country}`;
		// p.innerHTML = `${object.city}`;
		// div.appendChild(h3);
		// div.appendChild(p);
		// li.appendChild(div);
		// ul.appendChild(li);
	// }
	// element.appendChild(ul);
// }

// addListToHtml(citiesWithId, 'test');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
             // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
             // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
// function concatArrays(array1, array2){
	// let result = [];
	// for(let i = 0; i < array1.length; i++){
		// for(let j = 0; j < array2.length; j++){
			// if(array1[i].id === array2[j].user_id){
				// array1[i].country = array2[j].country;
				// array1[i].city = array2[j].city;
				// result.push(array1[i]);
			// }
		// }
	// }
	// return result;
// }

// console.log(concatArrays(usersWithId, citiesWithId));

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.

// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// todo add rules

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
			
// function rulesFunk(array){
	// let elem = document.getElementById('wrap');
	// for(let i = 0; i < array.length; i++){
		// let mainDiv = document.createElement('div');
		// let divTitle = document.createElement('div');
		// let divBody = document.createElement('div');
		
		// divTitle.innerHTML = `${array[i].title}`;
		// divBody.innerHTML = `${array[i].body}`;
		// mainDiv.appendChild(divTitle);
		// mainDiv.appendChild(divBody);
		// elem.appendChild(mainDiv);
	// }
// }			

// rulesFunk(rules);

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]