// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
 // -назва тегу
 // - опис його дій
 // - масив з атрибутами (2-3 атрибути максимум)
 // Кожен атрибут описати як окремий який буде містити
 // -назву атрибуту
 // -опис дії атрибуту
 // інформацію брати з htmlbook.ru

 // Таким чином описати теги
 // -a
 // -div
 // -h1
 // -span
 // -input
 // -form
 // -option
 // -select
 // Приклад результату
   // {
        // titleOfTag: 'area',
        // action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        // attrs: [
        // {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        // {/*some props and values*/},
        // {/*...*/},
        // {/*...*/},
        // ]

   // }
// ==============================================

// function Tag(titleOfTag, action, attrs){
	// this.titleOfTag = titleOfTag;
	// this.action = action;
	// this.attrs = attrs;
//}

// let titleA = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
		// {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
		// {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
	// ]; 

// let a = new Tag(titleA, action, attributes);
// console.log(a);

//*********************************************

// let titleDiv = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attributes = [
		// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
		// {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'}
	// ]; 

// let div = new Tag(titleDiv, action, attributes);
// console.log(div);

//*********************************************

// let titleH1 = '<h1>';
// let action = 'тег <h1> представляет собой наиболее важный заголовок первого уровня';
// let attributes = [
		// {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
	// ]; 

// let h1 = new Tag(titleH1, action, attributes);
// console.log(h1);

//*********************************************

// let titleSpan = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Определяет выравнивание заголовка.'},
		// {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
		// {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
	// ]; 

// let span = new Tag(titleSpan, action, attributes);
// console.log(span);

//*********************************************

// let titleInput = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let attributes = [
		// {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
		// {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'}
	// ]; 

// let input = new Tag(titleInput, action, attributes);
// console.log(input);

//*********************************************

// let titleForm = '<form>';
// let action = 'Связывает поле с формой по её идентификатору. ';
// let attributes = []; 

// let form = new Tag(titleForm, action, attributes);
// console.log(form);

//*********************************************

// let titleOption = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let attributes = [
		// {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
		// {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
		// {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
	// ]; 

// let option = new Tag(titleOption, action, attributes);
// console.log(option);

//*********************************************

// let titleSelect = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
		// {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
		// {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
	// ]; 

// let select = new Tag(titleSelect, action, attributes);
// console.log(select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
 // -назва тегу
 // - опис його дій
 // - масив з атрибутами (2-3 атрибути максимум)
 // Кожен атрибут описати як окремий який буде містити
 // -назву атрибуту
 // -опис дії атрибуту
 // інформацію брати з htmlbook.ru

 // Таким чином описати теги
 // -a
 // -div
 // -h1
 // -span
 // -input
 // -form
 // -option
 // -select
 // Приклад результату
   // {
        // titleOfTag: 'area',
        // action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        // attrs: [
        // {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        // {/*some props and values*/},
        // {/*...*/},
        // {/*...*/},
        // ]

   // }
// ==============================================

// class Tag{
	// constructor(titleOfTag, action, attrs){
		// this.titleOfTag = titleOfTag;
		// this.action = action;
		// this.attrs = attrs;
	// }
// }

// let titleA = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
		// {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
		// {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
	// ]; 

// let a = new Tag(titleA, action, attributes);
// console.log(a);

//*********************************************

// let titleDiv = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attributes = [
		// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
		// {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'}
	// ]; 

// let div = new Tag(titleDiv, action, attributes);
// console.log(div);

//*********************************************

// let titleH1 = '<h1>';
// let action = 'тег <h1> представляет собой наиболее важный заголовок первого уровня';
// let attributes = [
		// {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
	// ]; 

// let h1 = new Tag(titleH1, action, attributes);
// console.log(h1);

//*********************************************

// let titleSpan = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Определяет выравнивание заголовка.'},
		// {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
		// {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}
	// ]; 

// let span = new Tag(titleSpan, action, attributes);
// console.log(span);

//*********************************************

// let titleInput = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let attributes = [
		// {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
		// {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'}
	// ]; 

// let input = new Tag(titleInput, action, attributes);
// console.log(input);

//*********************************************

// let titleForm = '<form>';
// let action = 'Связывает поле с формой по её идентификатору. ';
// let attributes = []; 

// let form = new Tag(titleForm, action, attributes);
// console.log(form);

//*********************************************

// let titleOption = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let attributes = [
		// {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
		// {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
		// {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
	// ]; 

// let option = new Tag(titleOption, action, attributes);
// console.log(option);

//*********************************************

// let titleSelect = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attributes = [
		// {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
		// {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
		// {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
	// ]; 

// let select = new Tag(titleSelect, action, attributes);
// console.log(select);


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let Car = {
	// model : 'GT40',
	// manufacturer: 'Ford',
	// year: 1964,
	// max_speed: 320,
	// volume: 7,
	
	// drive: function(){
		// console.log("їдемо зі швидкістю " + this.max_speed + " на годину");
	// }, 
	
	// info: function(){
		// console.log(this);
	// },
	
	// increaseMaxSpeed: function(newSpeed){
		// this.max_speed += newSpeed;
	// },
	
	// changeYear: function(newValue){
		// this.year = newValue;
	// },
	
	// addDriver: function(driver){
		// this.driver = driver;
	// }
// }

// let drive = {
	// name: "dominik",
	// surname: "toreto",
	// age: 37
// }

// Car.addDriver(drive);
// Car.info();


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, manufacturer, year, max_speed, volume){
	// this.model = model;
	// this.manufacturer = manufacturer;
	// this.year = year;
	// this.max_speed = max_speed;
	// this.volume = volume;
	
	// this.drive = function(){
		// console.log("їдемо зі швидкістю " + this.max_speed + " на годину");
	// }; 
	
	// this.info = function(){
		// console.log(this);
	// };
	
	// this.increaseMaxSpeed = function(newSpeed){
		// this.max_speed += newSpeed;
	// };
	
	// this.changeYear = function(newValue){
		// this.year = newValue;
	// };
	
	// this.addDriver = function(driver){
		// this.driver = driver;
	// }
// }

// let car1 = new Car('gt40', 'ford', 1964, 320, 7);
// car1.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car{
	// constructor(model, manufacturer, year, max_speed, volume){
	// this.model = model;
	// this.manufacturer = manufacturer;
	// this.year = year;
	// this.max_speed = max_speed;
	// this.volume = volume;
	// }
	
	// drive(){
		// console.log("їдемо зі швидкістю " + this.max_speed + " на годину");
	// }; 
	
	// info(){
		// console.log(this);
	// };
	
	// increaseMaxSpeed(newSpeed){
		// this.max_speed += newSpeed;
	// };
	
	// changeYear(newValue){
		// this.year = newValue;
	// };
	
	// addDriver(driver){
		// this.driver = driver;
	// }
// }

// let car1 = new Car('gt40', 'ford', 1964, 320, 7);
// car1.info();

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Human{
	// constructor(name, age){
		// this.name = name;
		// this.age = age;
	// }
// }

// class Cinderella extends Human{
	// constructor(name, age, footSize){
		// super(name, age);
		// this.footSize = footSize;
	// }
// }

// class Prince extends Human{
	// constructor(name, age, foundShoeSize){
		// super(name, age);
		// this.foundShoeSize = foundShoeSize;
	// }
	
	// findCinderella(array){
		// for(let i = 0; i < array.length; i++){
			// if(array[i].footSize == this.foundShoeSize){
				// console.log("Found cinderella! Her name is " + array[i].name);
			// }
		// }
	// }
// }

// let cindy1 = new Cinderella('Emmy', 18, 36);
// let cindy2 = new Cinderella('Nina', 30, 38);
// let cindy3 = new Cinderella('Zoja', 32, 34);
// let cindy4 = new Cinderella('Galina', 30, 35);
// let cindy5 = new Cinderella('Vika', 26, 33);
// let cindy6 = new Cinderella('Alyx', 24, 37);
// let cindy7 = new Cinderella('Mira', 27, 39);
// let cindy8 = new Cinderella('Maya', 18, 35);
// let cindy9 = new Cinderella('Marta', 25, 37);
// let cindy10 = new Cinderella('Nataly', 35, 39);

// let mass = [cindy1, cindy2, cindy3, cindy4, cindy5, cindy6, cindy7, cindy8, cindy9, cindy10];

// let princess = new Prince('John', 33, 38);
// princess.findCinderella(mass);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize){
	// this.name = name;
	// this.age = age;
	// this.footSize = footSize;
// }

// let cindy1 = new Cinderella('Emmy', 18, 36);
// let cindy2 = new Cinderella('Nina', 30, 38);
// let cindy3 = new Cinderella('Zoja', 32, 34);
// let cindy4 = new Cinderella('Galina', 30, 35);
// let cindy5 = new Cinderella('Vika', 26, 33);
// let cindy6 = new Cinderella('Alyx', 24, 37);
// let cindy7 = new Cinderella('Mira', 27, 39);
// let cindy8 = new Cinderella('Maya', 18, 35);
// let cindy9 = new Cinderella('Marta', 25, 37);
// let cindy10 = new Cinderella('Nataly', 35, 39);

// let mass = [cindy1, cindy2, cindy3, cindy4, cindy5, cindy6, cindy7, cindy8, cindy9, cindy10];

// class Prince{
	// constructor(name, age, foundShoeSize){
		// this.name = name;
		// this.age = age;
		// this.foundShoeSize = foundShoeSize;
	// }
	
	// findCinderella(array){
		// for(let i = 0; i < array.length; i++){
			// if(array[i].footSize == this.foundShoeSize){
				// console.log("Found cinderella! Her name is " + array[i].name);
			// }
		// }
	// }
// }

// let princess = new Prince('John', 33, 38);
// princess.findCinderella(mass);