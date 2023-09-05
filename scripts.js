let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});



const queryString = window.location.href;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('test');
console.log(urlParams.get('test'));
