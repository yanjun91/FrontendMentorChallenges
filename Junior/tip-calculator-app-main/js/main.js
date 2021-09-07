function selectTipToggle(obj){
	var toggleElem = document.getElementsByClassName("selected");
	if(toggleElem != undefined && toggleElem[0] != undefined){
		toggleElem[0].classList.remove("selected");
	}
	var isInput = obj.classList.contains("input");
	if(!isInput) {
		obj.classList.toggle("selected");
		var inputElem = document.getElementById("custom-tips-input");
		if(inputElem.value != ""){
			inputElem.value = ""; //Resets value in the input when user choose other tip
		}
	}
	calculate();
}

function validateInput(obj) {
	var numOfPeople = obj.value;
	var errorMsgElems = document.getElementsByClassName("error");
	var inputElem = document.getElementById("number-of-people");
	if(numOfPeople <= 0) {
		errorMsgElems[0].classList.add("show");
		inputElem.classList.add("error-input");
	}
	else {
		errorMsgElems[0].classList.remove("show");
		inputElem.classList.remove("error-input");
	}
	calculate();
}

function calculate(){
	// Output elements
	var tipElem = document.getElementById("tip-amount");
	var totalElem = document.getElementById("total-amount");

	// Input elements
	var billElem = document.getElementById("bill-input");
	var tipSelectionElem = document.getElementById("tips-buttons").getElementsByClassName("selected")[0];
	var tipInputElem = document.getElementById("custom-tips-input");
	var numOfPeopleElem = document.getElementById("number-of-people");

	var bill = parseInt(billElem.value);
	var tipPercent = 0;
	var numOfPeople = parseInt(numOfPeopleElem.value);

	// Determine to get selected tip or custom tip percentage
	if(tipSelectionElem == undefined) {
		tipPercent = parseInt(tipInputElem.value);
	}
	else{
		tipPercent = parseInt(tipSelectionElem.value);
	}
	
	// Calculates tip and amount per person if all values are more than zero, else just display "-"
	if(bill > 0 && tipPercent > 0 && numOfPeople > 0){
		var tipAmount = bill * (tipPercent/100);
		var totalAmount = bill + tipAmount;
		var tipAmountPerPerson = tipAmount/numOfPeople;
		var totalPerPerson = totalAmount/numOfPeople;		
		tipElem.innerHTML = "$" + Math.round(tipAmountPerPerson).toFixed(2);
		totalElem.innerHTML = "$" + Math.round(totalPerPerson).toFixed(2);
	}
	else {
		tipElem.innerHTML = "$0.00";
		totalElem.innerHTML = "$0.00";
	}
}

function reset(){
	// Output elements
	var tipElem = document.getElementById("tip-amount");
	var totalElem = document.getElementById("total-amount");

	// Input elements
	var billElem = document.getElementById("bill-input");
	var tipSelectionElem = document.getElementById("tips-buttons").getElementsByClassName("selected")[0];
	var tipInputElem = document.getElementById("custom-tips-input");
	var numOfPeopleElem = document.getElementById("number-of-people");

	billElem.value = "";
	if(tipSelectionElem != undefined) {
		tipSelectionElem.remove("selected");
	}
	tipInputElem.value = "";
	numOfPeopleElem.value = "";

	tipElem.innerHTML = "$0.00";
	totalElem.innerHTML = "$0.00";
}