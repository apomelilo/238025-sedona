var btn=document.querySelector(".search-title");
var form=document.querySelector(".search-form");
var arrival=document.querySelector("[name=arrival-date]");
var departure=document.querySelector("[name=departure-date]");
var adults=document.querySelector("[name=adults]");
var children=document.querySelector("[name=children]");

btn.addEventListener("click", function(event){
	event.preventDefault();	
	if (!form.classList.contains("search-form-close")) {
		form.classList.add("search-form-close");
	} else {
		form.classList.remove("search-form-close");
	}
});
form.addEventListener("submit", function(event) {
	event.preventDefault();
	localStorage.setItem("arrival", arrival-date.value);
	localStorage.setItem("departure", departure-date.value);
	localStorage.setItem("adults", adults.value);
	localStorage.setItem("children", children.value);
});