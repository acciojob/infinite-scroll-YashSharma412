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

scrollContainer.addEventListener("scroll", () => {
	const maxScrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
	let currentScrollTop = scrollContainer.scrollTop;

	let threshhold = Math.abs(maxScrollHeight - currentScrollTop);

	if (threshhold <= 5) {
		for (let i = 0; i < 2; i++) {
			addOneItem();
		}
	}
});

