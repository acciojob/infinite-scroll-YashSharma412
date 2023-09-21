//your code here!
const scrollContainer = document.getElementById("infi-list");
let sr_no = 0;
function addOneItem(){
	const li = document.createElement("li");
	li.innerText = `Item ${++sr_no}`;
	scrollContainer.appendChild(li);
}

for( let i=0; i<10; i++){
	addOneItem();
}

