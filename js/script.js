var btn=document.querySelector(".search-title");
var form=document.querySelector(".search-form");
var arrival=document.querySelector("[name=arrival-date]");
var departure=document.querySelector("[name=departure-date]");
var adults=document.querySelector("[name=adults]");
var children=document.querySelector("[name=children]");

btn.addEventListener("click", function(event){
	event.preventDefault();
	form.classList.add("search-form-close");
});	
/*btn.addEventListener("click", function(event){	
	if (!form) {
		event.preventDefault();
		form.classList.add("search-form-close");
	} else {
		event.preventDefault();
		form.classList.add("search-form-open");
	}
});*/
form.addEventListener("submit", function(event) {
	event.preventDefault();
	localStorage.setItem("arrival", arrival-date.value);
	localStorage.setItem("departure", departure-date.value);
	localStorage.setItem("adults", adults.value);
	localStorage.setItem("children", children.value);
});