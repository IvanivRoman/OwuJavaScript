function userCard(number){
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	let key  = number <= 3
	? number
	: 1;
	
	function getCardOptions(){
		return {
			key,
			balance,
			transactionLimit,
			historyLogs
		}
	}
	
	function addHistoryLogs(operationType, credits, operationTime){
		historyLogs.push(operationType, credits, operationTime);
	}
	
	function putCredits(costs){
		let date = new Date();
		if(costs > 0){
			balance += costs;
			addHistoryLogs("put costs", costs, date.toLocaleDateString()  + " " + date.toLocaleTimeString());
		}
	}
	
	function takeCredits(costs){
		let date = new Date();
		if(balance > costs && costs <= transactionLimit){
			balance -= costs;
			addHistoryLogs("take costs", costs, date.toLocaleDateString()  + " " + date.toLocaleTimeString());
		} else {
			console.error("Error in takeCredits");
		}
	}
	
	function setTransactionLimit(limit){
		let date = new Date();
		if(limit > 0){
			transactionLimit = limit;
			addHistoryLogs("set limit", limit, date.toLocaleDateString()  + " " + date.toLocaleTimeString());
		}
	}
	
	function transferCredits(costs, card){
		let date = new Date();
		let credit = costs * 1.005;
		if(credit <= transactionLimit && credit <= balance){
			takeCredits(credit);
			card.putCredits(costs);
		}
	}
	
	return {
		getCardOptions,
		putCredits,
		takeCredits,
		setTransactionLimit,
		transferCredits
	}
}

// let testCard = new userCard(2);

// console.log(testCard.getCardOptions());

// testCard.putCredits(150);
// console.log(testCard.getCardOptions());

// testCard.takeCredits(100);
// console.log(testCard.getCardOptions());

// testCard.setTransactionLimit(5000);
// console.log(testCard.getCardOptions());

// let testCard2 = new userCard(3);
// testCard.transferCredits(50, testCard2);
// console.log(testCard.getCardOptions());
// console.log(testCard2.getCardOptions());

class UserAccount{
	constructor(name){
		this.name = name;
		this.cards = [];
	}
	
	addCard(){
		if(this.cards.length < 3){
			this.cards.push(new userCard(this.cards.length + 1));
		} else {
			console.error('cards limit over');
		}
	}
	
	getCardByKey(key){
		if(key <= 3 && key > 0)
		return this.cards[key - 1];
	}
}

let user = new UserAccount('Bob'); 
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1); 
let card2 = user.getCardByKey(2);   

card1.putCredits(500); 
card1.setTransactionLimit(800); 
card1.transferCredits(300, card2);   

card2.takeCredits(50);   
console.log(card1.getCardOptions()); 
console.log(card2.getCardOptions()); 