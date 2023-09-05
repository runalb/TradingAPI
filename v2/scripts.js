const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const authcode = urlParams.get('test');
console.log(authcode);
document.getElementById('code').value = authcode;

function copyText() {
	var copy = document.getElementById('code');
	copy.select();
	copy.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copy.value);
	console.log(copy.value);
}