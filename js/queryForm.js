document.getElementById("c_button").onclick = function() {validateInputs()};

document.getElementById("post_stage").style.display = "none";

let validMailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateInputs() {

	const validArray = [true, true, true, true];

	let selectionCount = 0;
	let subjectText;

	let nameField = document.getElementById("nameField").value;
	let mailField = document.getElementById("mailField").value;
	let message = document.getElementById("details").value;
	const qAbout = document.querySelectorAll('input[name="query_subject"]');

	if (nameField.length == 0) {
		alert("Name Input Field is Empty");
		validArray[0] = false;
	}

	if (message.length == 0) {
		alert("Detail Area is Empty");
		validArray[1] = false;
	}

	if (mailField.length == 0) {
		alert("Mail Input Field is Empty");
	} else if (!(mailField.match(validMailFormat))) {
		alert("Invalid Email Format");
		validArray[2] = false;
	}
	
	for (const selections of qAbout) {
		if (selections.checked) {
			selectionCount++;
			subjectText = selections.value;
			console.log(subjectText);
		}
	}

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

	if (falseCount == 0) {
		displayPage(nameField, mailField, subjectText, message);
	}
}

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

	// inject html
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

function displayForm() {
	document.getElementById("post_stage").innerHTML = "";
	document.getElementById("post_stage").style.display = "none";
	document.getElementById("q_form").style.display = "flex";
}

function sendEmail() {
	console.log("Sending Email");
	document.getElementById("q_form").submit();
}
