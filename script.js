var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	//var accept = document.createTextNode(input.value);
	//let listSpan = document.createElement("span");
//	li.firstChild.appendChild(listSpan);
	//li.appendChild(accept);
	li.innerHTML = `<span class="strik">${input.value}</span>`;
	ul.appendChild(li);
	var but = document.createElement("button");
	var done = document.createElement("button");
	done.appendChild(document.createTextNode("Done"));
	done.classList.add("finish");
	li.appendChild(done);
      but.appendChild(document.createTextNode("Delete"));
	but.classList.add("delete");
            li.appendChild(but);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strike(event){
	console.log('Name of the previous element',event.target.previousSibling);
	console.log('EventTargetClick',event.target.click);
	let par= event.target.parentElement;
	let child = par.firstChild;
		console.log('Par first child',child);
		if(event.target.className==="finish"){
						par.firstChild.classList.toggle("done");
						
						
		}
			
		else{
			remove(event);
		}}
function remove(event){
	
	let remove = event.target.parentElement;
	remove.remove();
//	let sib = event.target.parentElement;
//	let rem = sib.previousSibling;
//	let r = event.target.parentNode;
//	console.log('PreviousSibling',sib);
//	console.log('Sib\'s PreviousSibling',rem);
//	console.log('Previous Element Sibling',event.target.previousElementSibling);
//	console.log('Parent Element of Delete',r);
//		ul.removeChild(rem);
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strike);

//document.querySelector("li").addEventListener("click",strike);