// Invoke validateInputs function when check button clicked
document.getElementById("c_button").onclick = function() {validateInputs()};

// Remove Styling In the Begining
document.getElementById("post_stage").style.display = "none";

// Valid email format as Regex expression
let validMailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// This Function Validate The Form inputs
function validateInputs() {

	// This array contains valid inputs
	const validArray = [true, true, true, true];

	let selectionCount = 0;
	let subjectText;

	// Store form inputs in variables
	let nameField = document.getElementById("nameField").value;
	let mailField = document.getElementById("mailField").value;
	let message = document.getElementById("details").value;
	const qAbout = document.querySelectorAll('input[name="query_subject"]');

	// Validate for Empty Name Input Field
	if (nameField.length == 0) {
		alert("Name Input Field is Empty");
		validArray[0] = false;
	}

	// Validate for Empty Text Input Field
	if (message.length == 0) {
		alert("Detail Area is Empty");
		validArray[1] = false;
	}

	// Validate for Empty email field and valid email format
	if (mailField.length == 0) {
		alert("Mail Input Field is Empty");
	} else if (!(mailField.match(validMailFormat))) {
		alert("Invalid Email Format");
		validArray[2] = false;
	}
	
	// validate for radio button selection
	for (const selections of qAbout) {
		if (selections.checked) {
			selectionCount++;
			subjectText = selections.value;
			console.log(subjectText);
		}
	}

	// Show Alert if No Selection is made
	if (selectionCount == 0) {
		alert("Please Select atleast one Subject");
		validArray[3] = false;
	}

	// count false in an array
	let falseCount = 0;
	for (let i = 0; i < validArray.length; i++) {
		if (!validArray[i]) {
			falseCount++;
		}
	}

	// Pass the form inputs if all inputs are valid
	if (falseCount == 0) {
		displayPage(nameField, mailField, subjectText, message);
	}
}

// This Function Display Details Dialog and remove Form
function displayPage(nameField, mailField, subjectText, message) {
	let subjectString;
	switch (subjectText) {
		case "sub1":
			subjectString = "Send Overseas";
			break;
		case "sub2":
			subjectString = "Package & Postal Cost";
			break;
		case "sub3":
			subjectString = "Taxes and Laws";
			break;
	}

	// inject html into Div tag
	let html = `
		<div>Name : ${nameField}</div>
		<div>Email : ${mailField}</div>
		<div>Subject : ${subjectString}</div>
		<div>Details : ${message}</div>
		<div class="buttonContainer">
			<button id="query_edit" onclick="displayForm()">Edit</button>
			<button id="query_send" onclick="sendEmail()">Send Email</button>
		</div>
	`;
	// remove old content
	document.getElementById("q_form").style.display = "none";
	document.getElementById("post_stage").style.display = "flex";
	document.getElementById("post_stage").innerHTML = html;
}

// This Fuction Display Form again and remove dialog box
function displayForm() {
	document.getElementById("post_stage").innerHTML = "";
	document.getElementById("post_stage").style.display = "none";
	document.getElementById("q_form").style.display = "flex";
}

// This function Execute Form Submit button
function sendEmail() {
	console.log("Sending Email");
	document.getElementById("q_form").submit();
}
