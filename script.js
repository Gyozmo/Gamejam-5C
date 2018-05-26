$(document).ready(function(){


var planter = document.querySelector(".planter");
var bouger = document.querySelector(".bouger");
var manger = document.querySelector(".manger");
var fleur = document.querySelector(".fleur");
var foot = document.querySelector(".foot");
var burger = document.querySelector(".burger");



planter.addEventListener("mouseover", function() {
	fleur.style.visibility = "visible";
	fleur.style.marginTop = "0";
	fleur.style.transition = "ease-out 2s"
})

planter.addEventListener("mouseout", function() {
	fleur.style.visibility = "hidden";
	fleur.style.marginTop = "30%";
	fleur.style.transition = "ease-out 2s"
})

bouger.addEventListener("mouseover", function() {
	foot.style.visibility = "visible";
	foot.style.marginTop = "0";
	foot.style.transition = "ease-out 2s"
})

bouger.addEventListener("mouseout", function() {
	foot.style.visibility = "hidden";
	foot.style.marginTop = "30%";
	foot.style.transition = "ease-out 2s"
})

manger.addEventListener("mouseover", function() {
	burger.style.visibility = "visible";
	burger.style.marginBottom = "0";
	burger.style.transition = "ease-out 2s"
})

manger.addEventListener("mouseout", function() {
	burger.style.visibility = "hidden";
	burger.style.marginBottom = "35%";
	burger.style.transition = "ease-out 2s"
})

var data = [

// Objet 0
{
	title : "Germe",
	image : "url(images/ballon.png)",
	index : 0
	/*options : [
	{
		title : "Planter" ,
		target : 1
		
	} ,

	{
		title : "Route" ,
		target : 2
		
	}] */
},

//Objet 1
{
	title : "Planter" ,
	image : "url(images/burger.png)",
	index : 1
} ,

//Objet 2
{
	title : "Route" ,
	image : "url(images/logo.png)",
	index : 2

}

]

var i=0;

$("#centre").css("background-image",data[i].image);
		$("#top").css("background-image",data[i+1].image);
		$("#bottom").css("background-image",data[i+2].image);





/*
$("#centre").css("background-image",data[i].image);
$("#top").css("background-image",data[i+1].image);
$("#bottom").css("background-image",data[i+2].image); */


$("#top").click(function(){
	if (i%2 ==0) {
		$("#centre").css("background-image",data[i].image);
		$("#top").css("background-image",data[i].image);
		$("#bottom").css("background-image",data[i].image);
}


});

$("#bottom").click(function(){



});




});
