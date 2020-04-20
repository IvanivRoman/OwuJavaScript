// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let input = document.getElementById("txt");
// let txtLocalText = localStorage.getItem("input");


// if(txtLocalText){
	// input.value = txtLocalText;
// }

// input.oninput = function(){
	// localStorage.setItem("input", input.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let firstName = document.getElementById('fname');
// let lastName = document.getElementById('lname');
// let male = document.getElementById('male');
// let female = document.getElementById('female');
// let vehicle1 = document.getElementById('vehicle1');
// let vehicle2 = document.getElementById('vehicle2');
// let vehicle3 = document.getElementById('vehicle3');
// let comment = document.getElementById('comment');
// let birthday = document.getElementById('birthday');
// let firstNameLocal = localStorage.getItem('firstName');
// let lastNameLocal = localStorage.getItem('lastName');
// let maleLocal = localStorage.getItem('male');
// let femaleLocal = localStorage.getItem('female');
// let vehicle_1_Local = localStorage.getItem('vehicle1');
// let vehicle_2_Local = localStorage.getItem('vehicle2');
// let vehicle_3_Local = localStorage.getItem('vehicle3');
// let commentLocal = localStorage.getItem('comment');
// let birthdayLocal = localStorage.getItem('birthday');

// if(firstNameLocal){
	// firstName.value = firstNameLocal;
// }

// if(lastNameLocal){
	// lastName.value = lastNameLocal;
// }

// if(maleLocal){
	// male.checked = true;
// }

// if(femaleLocal){
	// female.checked = true;
// }

// if(vehicle_1_Local){
	// vehicle1.checked = true;
// }

// if(vehicle_2_Local){
	// vehicle2.checked = true;
// }

// if(vehicle_3_Local){
	// vehicle3.checked = true;
// }

// if(birthdayLocal){
	// birthday = new Date(parseInt(birthdayLocal, 10));
	// var currentDate = birthday.toISOString().slice(0,10);
	// document.getElementById('birthday').value = currentDate;
// }

// if(commentLocal){
	// comment.value = commentLocal;
// }

// firstName.oninput = function(){
	// localStorage.setItem('firstName', firstName.value);
// }

// lastName.oninput = function(){
	// localStorage.setItem('lastName', lastName.value);
// }

// male.oninput = function(){
	// localStorage.setItem('male', male.value);
	// localStorage.removeItem('female');
// }

// female.oninput = function(){
	// localStorage.setItem('female', female.value);
	// localStorage.removeItem('male');
// }

// vehicle1.oninput = function(){
	// if(vehicle_1_Local){
		// localStorage.removeItem('vehicle1');
	// } else {
		// localStorage.setItem('vehicle1', vehicle1.value);
	// }
// }

// vehicle2.oninput = function(){
	// if(vehicle_2_Local){
		// localStorage.removeItem('vehicle2');
	// } else{
		// localStorage.setItem('vehicle2', vehicle2.value);
	// }
// }

// vehicle3.oninput = function(){
	// if(vehicle_3_Local){
		// localStorage.removeItem('vehicle3');
	// } else {
		// localStorage.setItem('vehicle3', vehicle3.value);	
	// }
// }

// comment.oninput = function(){
	// localStorage.setItem('comment', comment.value);
// }

// birthday.onchange = function(){
	// console.log(this.value);
	// if(birthdayLocal){
		// localStorage.removeItem('birthday');
		// console.log('removed');
	// } else {
		// birthday = new Date(this.value);
		// localStorage.setItem('birthday', birthday.getTime());
	// }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let back = document.getElementById('back');
// let save = document.getElementById('save');
// let forward = document.getElementById('forward');
// let clear = document.getElementById('clear');
// let text = document.getElementById('text');
// let textLocal = localStorage.getItem('text');
// let arrText = JSON.parse(localStorage.getItem("arrText"));

// save.onclick = function(){
	
	
	// if(arrText){
		// arrText.push(text.value);
		// localStorage.setItem('arrText', JSON.stringify(arrText));
	// } else {
		// let arrText = [];
		// arrText.push(text.value);
		// localStorage.setItem('arrText', JSON.stringify(arrText));
	// }
	
// }

// if(arrText){
	// text.value = arrText[arrText.length - 1];
// }

// back.onclick = function(ev){
	// ev.preventDefault();
	// if(arrText){
		// let index = arrText.indexOf(text.value);
		// text.value = arrText[--index];
	// }
// }

// forward.onclick = function(ev){
	// ev.preventDefault();
	// if(arrText){
		// let el = arrText.indexOf(document.getElementById('text').value);
		// console.log(el);
		// if(el + 1 < arrText.length)
		// text.value = arrText[el + 1];
	// }
// }

// clear.onclick = function(ev){
	// ev.preventDefault();
	// localStorage.removeItem('arrText');
	// text.value = "";
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// class User{
	// constructor(name, surname, phone, email, firm){
		// this.name = name;
		// this.surname = surname;
		// this.phone = phone;
		// this.email = email;
		// this.firm = firm;
	// }
// };

// let name = document.getElementById('fname');
// let surname = document.getElementById('lname');
// let phone = document.getElementById('phone');
// let email = document.getElementById('email');
// let firm = document.getElementById('firm');
// let del = document.getElementById('delete');
// let save = document.getElementById('save');
// let previous = document.getElementById('previous');
// let next = document.getElementById('next');
// let clear = document.getElementById('clear');

// let users = JSON.parse(localStorage.getItem("users"));

// save.onclick = function(ev){
	// ev.preventDefault();
	// let user = new User(name.value, surname.value, phone.value, email.value, firm.value);
	
	// if(users){
		// for(let i = 0; i < users.length; i++){
			// if(users[i].name !== user.name && users[i].surname !== user.surname && users[i].phone !== user.phone && users[i].email !== user.email && users[i].firm !== user.firm){
				// users.push(JSON.stringify(user));
				// localStorage.setItem('users', JSON.stringify(users));
			// }
			
		// }
	// } else {
		// let users = [];
		// users.push(JSON.stringify(user));
		// localStorage.setItem('users', JSON.stringify(users));
	// }
	
// }

// previous.onclick = function(ev){
	// ev.preventDefault();
	// if(users){
		// name = document.getElementById('fname');	
		// surname = document.getElementById('lname');
		// phone = document.getElementById('phone');
		// email = document.getElementById('email');
		// firm = document.getElementById('firm');
		
		// if(name.value === "" && surname.value === "" && phone.value === "" && email.value === ""  && firm.value === ""){
			// let index = users.length - 1;
				// let user = users[index];
				// user = JSON.parse(user);
				// showUser(user);
		// } else {
			// let index = users.indexOf(JSON.stringify(new User(name.value, surname.value, phone.value, email.value, firm.value)));
			// if(index > 0){
				// let user = users[index - 1];
				// user = JSON.parse(user);
				// showUser(user);
				// index--;
			// }
		// }
	
	// }
// }

// next.onclick = function(ev){
	// ev.preventDefault();
	// if(users){
		// name = document.getElementById('fname');	
		// surname = document.getElementById('lname');
		// phone = document.getElementById('phone');
		// email = document.getElementById('email');
		// firm = document.getElementById('firm');
		
		// if(name.value === "" && surname.value === "" && phone.value === "" && email.value === ""  && firm.value === ""){
			// let index = 0;
			// let user = users[index];
			// user = JSON.parse(user);
			// showUser(user);
		// } else {
			// let index = users.indexOf(JSON.stringify(new User(name.value, surname.value, phone.value, email.value, firm.value)));
			// if(index < users.length){
				// let user = users[index + 1];
				// user = JSON.parse(user);
				// showUser(user);
				// index++;
			// }
		// }
	// }
// }

// del.onclick = function(ev){
	// ev.preventDefault();
	// name = document.getElementById('fname');	
	// surname = document.getElementById('lname');
	// phone = document.getElementById('phone');
	// email = document.getElementById('email');
	// firm = document.getElementById('firm');
	// if(users){
		// if(name.value !== "" && surname.value !== "" && phone.value !== "" && email.value !== ""  && firm.value !== ""){
		// let index = users.indexOf(JSON.stringify(new User(name.value, surname.value, phone.value, email.value, firm.value)));
		// users.splice(index, 1);
		// localStorage.setItem('users', JSON.stringify(users));	
		// }
	// }
// }

// clear.onclick = function(){
	// name.value = "";
	// surname.value = "";
	// phone.value = "";
	// email.value = "";
	// firm.value = "";
// }

// function showUser(user){
	// name.value = user.name;
	// surname.value = user.surname;
	// phone.value = user.phone;
	// email.value = user.email;
	// firm.value = user.firm;
// }
