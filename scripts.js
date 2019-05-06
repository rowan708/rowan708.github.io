function getNewInfo() {
	var newLocation = document.getElementById("site-search").value;
	localStorage.setItem("search", newLocation);
}