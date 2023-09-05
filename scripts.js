const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const authcode = urlParams.get('test');
console.log(authcode);
document.getElementById('code').value = authcode;

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
