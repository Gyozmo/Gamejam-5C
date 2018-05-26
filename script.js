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
=======
var data = [
{
	title : "Germe",
	image : "bleu.png" 
	options : [
	{
		title : "Planter" ,
		target : 1
		
	} ,

	{
		title : "Route" ,
		target : 2
		
	}]
}
,

{
	title : "Planter" ,
	image : "rouge.jpg"
} ,

{
	title : "Route" ,
	image : "vert.gif"

}

]

