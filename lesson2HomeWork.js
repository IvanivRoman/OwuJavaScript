// --створити масив та вивести його в консоль:
// - з 5 числових значень
// let arr = [1, 5, 9 , 8, 2];
// console.log(arr);

// - з 5 стічкових значень
// let str = ["Яблоко", "Апельсин", "Груша", "Лимон", "Кавун"];
// console.log(str);

// - з 5 значень стрічкового, числового та булевого типу
// let mix = ["Яблоко", 7, true, "Апельсин", 3];
// console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = new Array();
// arr[0] = "Груша";
// arr[1] = "Яблоко";
// arr[2] = "Кавун";
// arr[3] = "Лимон";
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i = 0; i < 10; i++){
	// document.write('<div>' + "Hello world" + '</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
	// for(let i = 0; i < 10; i++){
		// document.write('<div>' + "Hello world " + i + '</div>');
	// }
	
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 1;
// while(i <= 20){
	// document.write("Some text");
	// document.write('<br>');
	// i++;

// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while(i <= 20){
	// document.write("Some text " + i);
	// document.write('<br>');
	// i++;

// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < arr.length; i++){
	// console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['qwe', 'wer', 'ert', 'rty', 'tyu', 'yui', 'uio', 'iop', 'opa', 'pas'];
// for(let i = 0; i < arr.length; i++){
	// console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = ['qwe', 1, true, null, undefined, 'yui', 2, false, 'opa', 3];
// for(let i = 0; i < arr.length; i++){
	// console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['qwe', 1, true, 'wer', true, 'yui', 2, false, 'opa', 3];
// for(let i = 0; i < arr.length; i++){
	// if(typeof(arr[i]) === 'boolean')
	// console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['qwe', 1, true, 'wer', true, 'yui', 2, false, 'opa', 3];
// for(let i = 0; i < arr.length; i++){
	// if(typeof(arr[i]) === 'number')
	// console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['qwe', 1, true, 'wer', true, 'yui', 2, false, 'opa', 3];
// for(let i = 0; i < arr.length; i++){
	// if(typeof(arr[i]) === 'string')
	// console.log(arr[i]);
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'qwe';
// arr[1] = 1;
// arr[2] = true;
// arr[3] = null;
// arr[4] = undefined;
// arr[5] = 'yui';
// arr[6] = 2;
// arr[7] = false;
// arr[8] = 'opa';
// arr[9] = 3;
// for(let i = 0; i < arr.length; i++){
	// console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 10; i++){
	// console.log('step ' + i);
	// document.write('step ' + i);
	// document.write('<br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
	// console.log('step ' + i);
	// document.write('step ' + i);
	// document.write('<br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let j = 1;
// for(let i = 0; i < 200; i+=2){
	// console.log('step ' + j);
	// document.write('step ' + j);
	// document.write('<br>');
	// j++;
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
	// if(i%2 == 0){
	// console.log('step ' + i);
	// document.write('step ' + i);
	// document.write('<br>');
	// }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
	// if(i%2 != 0){
	// console.log('step ' + i);
	// document.write('step ' + i);
	// document.write('<br>');
	// }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди) -->
// for(let min = 0; min <= 59; min ++){
	// for(let sec = 0; sec <= 59; sec++){
	// document.write(min + " : " + sec);
	// document.write("<br>");
	// }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди) -->
// outer: for(let hours = 0; hours <= 2; hours++){
	// for(let minutes = 0; minutes <= 59; minutes++){
		// for(let seconds = 0; seconds <= 59; seconds++){
		// console.log(hours + ":" + minutes + ":" + seconds);
		// if(hours == 2 && minutes == 20)
		// break outer;
		// }
	// }
// }

// Додатково -->
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово. -->
// let arr = [ 'a', 'b', 'c'];
// let word = "";
// for(let i = 0; i < arr.length; i++){
// word += arr[i]; 
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово. -->
// let arr = [ 'a', 'b', 'c'];
// let word = "";
// let i = 0;
// while(i < arr.length){
	// word += arr[i];
	// i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. -->
// let arr = [ 'a', 'b', 'c'];
// let word = "";
// for (const element of arr) {
  // word += element;
// }
// console.log(word);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. -->
// let arr = [ 'a', 'b', 'c'];
// for(let i = 1; i <= 3; i++){
// arr.push(i);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]. -->
// let arr = [ 1, 2, 3];
// arr.reverse();
// console.log(arr);

// let list = [];
// for(let i = arr.length-1; i >= 0; i--) {
        // list.push(arr[i]);
// }
// console.log(list);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6. -->
// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6. -->
// let arr = [1, 2, 3];
// arr.unshift(6);
// arr.unshift(5);
// arr.unshift(4);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift() -->
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop() -->
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1, 4, 5]. -->
// let arr = [1, 2, 3, 4, 5];
//TODO -->

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]. -->
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]. -->
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. -->
// let arr = [1, 2, 3, 4, 5];
//TODO -->

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. -->
//TODO -->

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. -->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i <= arr.length; i++){
	// if(arr[i] % 2 == 0)
	// console.log(arr[i]);
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший -->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let clone = [];

// for(let i = 0; i < arr.length; i++){
	// clone.push(arr[i]);
// }

// console.log(clone);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. -->
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let clone = [];

// for(let i = 0; i < arr.length; i++){
	// clone[i] = arr[i];
// }

// console.log(clone);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: -->
// 1. перебрати його циклом while -->
// let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while(i < 10){
	// console.log(arr[i]);
	// i++;
// }

// 2. перебрати його циклом for -->
// for(let i = 0; i < arr.length; i++){
	// console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом -->
// let i = 0;
// while(i < 10){
	// if(i % 2 != 0){
	// console.log(arr[i]);
	// }
	// i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом -->
// for(let i = 0; i < arr.length; i++){
	// if(i % 2 != 0)
	// console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення -->
// let i = 0;
// while(i < 10){
	// if(arr[i] % 2 == 0){
	// console.log(arr[i]);
	// }
	// i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення -->
// for(let i = 0; i < arr.length; i++){
	// if(arr[i] % 2 == 0)
	// console.log(arr[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten" -->
// for(let i = 0; i < arr.length; i++){
	// if(arr[i] % 3 == 0)
	// arr[i] = "okten";
// }
// console.log(arr);

// 8. вивести масив в зворотньому порядку. -->
// for(let i = arr.length - 1; i > 0; i--){
	// console.log(arr[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) -->
//TODO -->

// 10 -->
// створити пустий масив та : -->
// - заповнити його 50 парними числами за допомоги циклу. -->
// let arr = [];
// for(let i = 0; i < 100; i++){
	// if(i % 2 == 0){
		// arr.push(i);
	// }
// }
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу. -->
// let arr = [];
// for(let i = 0; i < 100; i++){
	// if(i % 2 != 0){
		// arr.push(i);
	// }
// }
// console.log(arr);

// 1 -->
 // створити пустий масив та : -->
 
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов. -->
// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!) -->
// let max = 732;
// let min = 8;
 // let arr = [];
 // for(let i = 0; i < 10; i++){
	// arr[i] = Math.floor(Math.random() * ((max + 1) - min) + min);
 // }
 // console.log(arr);
 
 // 3. вывести на консоль  каждый третий елемент -->
 // for(let i = 1; i < arr.length; i++){
	// if(i % 3 == 0)
	// console.log(arr[i-1]);
 // }
 
 // но при условии что его значение является парным. -->
 // for(let i = 1; i < arr.length; i++){
	// if((i % 3 == 0) && (arr[i] % 2 == 0))
	// console.log(arr[i-1]);
 // }
 
 // 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и -->
 // записать их в другой массив. -->
 // let list = [];
 
 // for(let i = 1; i < arr.length; i++){
	// if((i % 3 == 0) && (arr[i-1] % 2 == 0)){
	// console.log(arr[i-1]);
	// list.push(arr[i-1]);
	// }
 // }
 // console.log(list);
 
 // 5. Вывести каждый елемент массива у которого соседний с права элемент - парный -->
 // for(let i = 0; i < arr.length-1; i++){
	// if(arr[i+1] % 2 == 0){
	// console.log(arr[i]);
	// }
 // }
 
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек. -->
// let arr = [100,250,50,168,120,345,188];
// let average = 0;
// for(let i = 0; i < arr.length; i++){
	// average += arr[i];
// }
// average = average / arr.length;
// console.log(average);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив. -->
// let arr = [];
// let list = [];
// for(let i = 0; i < 100; i++){
	// arr[i] = Math.floor(Math.random() * Math.floor(101));
	// list[i] = arr[i] * 5;
// }
// console.log(arr);
// console.log(list);


 // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 // додати його в інший масив. -->
 // let arr = ['qwe', 1, true, null, undefined, 'yui', 2, false, 'opa', 3];
 // let result = [];
 // for(let i = 1; i < arr.length; i++){
	// if(Number.isInteger(arr[i])){
	// result.push(arr[i]);
	// }
 // }
 // console.log(arr);
 // console.log(result);