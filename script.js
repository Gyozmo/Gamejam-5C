/******* Création des variables ********/

var planter = document.querySelector(".planter");
var bouger = document.querySelector(".bouger");
var manger = document.querySelector(".manger");
var fleur = document.querySelector(".fleur");
var foot = document.querySelector(".foot");
var burger = document.querySelector(".burger");
var croix = document.querySelector(".croix");
var modulePlanter = document.querySelector(".ModulesPlanter");
var modulePlanter2 = document.querySelector(".ModulesPlanter2");
var modulePlanter3 = document.querySelector(".ModulesPlanter3");


/****** Transition au hover : affichage de la plante, du burger et du ballon de foot ******/

	/* Au survol */

planter.addEventListener("mouseover", function() {
	this.style.color = "#FFF";
	fleur.style.visibility = "visible";
	fleur.style.marginTop = "0";
	fleur.style.transition = "ease-out 2s";})

manger.addEventListener("mouseout", function() {
	this.style.color = "#000";
	burger.style.visibility = "hidden";
	burger.style.marginBottom = "35%";
	burger.style.transition = "ease-out 2s";})

bouger.addEventListener("mouseover", function() {
	this.style.color = "#FFF";
	foot.style.visibility = "visible";
	foot.style.marginTop = "0";
	foot.style.transition = "ease-out 2s";})

	/* hors survol */

planter.addEventListener("mouseout", function() {
	this.style.color = "#000";
	fleur.style.visibility = "hidden";
	fleur.style.marginTop = "30%";
	fleur.style.transition = "ease-out 2s";})

bouger.addEventListener("mouseout", function() {
	this.style.color = "#000";
	foot.style.visibility = "hidden";
	foot.style.marginTop = "30%";
	foot.style.transition = "ease-out 2s";})

manger.addEventListener("mouseover", function() {
	this.style.color = "#FFF";
	burger.style.visibility = "visible";
	burger.style.marginBottom = "0";
	burger.style.transition = "ease-out 2s";})


/******** Aggrandir la section au click *********/

planter.addEventListener("click", function() {
    this.style.transform = "scale(3.4, 2.5)";
    this.style.transformOrigin = "bottom left";
    this.style.zIndex = "4";
    this.style.transition = "all 2s";
    setTimeout(function() { // la croix s'affiche après 2 secondes
    	croix.style.display = "block";
    }, 2000);
	modulePlanter.style.display = "flex";})

bouger.addEventListener("click", function() {
    this.style.transform = "scale(3.4, 2.5)";
    this.style.transformOrigin = "bottom right";
    this.style.zIndex = "4";
    this.style.transition = "all 2s";
    setTimeout(function() {
    	croix.style.display = "block";
	}, 2000);
	modulePlanter3.style.display = "flex";})

manger.addEventListener("click", function() {
    this.style.transform = "scale(3.4, 2.5)";
    this.style.transformOrigin = "top";
    this.style.zIndex = "4";
    this.style.transition = "all 2s";
    setTimeout(function() {
    	croix.style.display = "block";
	}, 2000)
	modulePlanter2.style.display = "flex";})


/******* Réduire la div au click *********/

croix.addEventListener("click", function() {
	planter.style.transform = "scale(1, 1)";
    planter.style.transformOrigin = "bottom left";
    planter.style.zIndex = "2";
    planter.style.transition = "all 2s";
	this.style.display = "none";
	modulePlanter.style.display = "none";})

croix.addEventListener("click", function() {
	bouger.style.transform = "scale(1, 1)";
    bouger.style.transformOrigin = "bottom left";
    bouger.style.zIndex = "2";
    bouger.style.transition = "all 2s";
	this.style.display = "none";
	modulePlanter3.style.display = "none";})

croix.addEventListener("click", function() {
	manger.style.transform = "scale(1, 1)";
    manger.style.zIndex = "3";
    manger.style.transition = "all 2s";
	this.style.display = "none";
	modulePlanter2.style.display = "none";})