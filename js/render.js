/*
=========================================================
Katabumb Creator

render.js

PART 1
=========================================================
*/

"use strict";

/*
=========================================================
CURRENT PAGE
=========================================================
*/

let currentPage="dashboard";

/*
=========================================================
ELEMENT
=========================================================
*/

const settingPanel=document.getElementById(
"settingPanel"
);

/*
=========================================================
HELPER
=========================================================
*/

function clearPanel(){

settingPanel.innerHTML="";

}

/*
=========================================================
SET ACTIVE MENU
=========================================================
*/

function setActiveMenu(page){

document

.querySelectorAll(".menu button")

.forEach(btn=>{

btn.classList.remove("active");

if(

btn.dataset.page===page

){

btn.classList.add("active");

}

});

}

/*
=========================================================
RENDER PAGE
=========================================================
*/

function renderPage(page){

currentPage=page;

clearPanel();

setActiveMenu(page);

switch(page){

case"dashboard":

settingPanel.innerHTML=

Components.dashboard();

break;

case"theme":

settingPanel.innerHTML=

Components.theme();

break;

case"hero":

settingPanel.innerHTML=

Components.hero();

break;

case"gallery":

settingPanel.innerHTML=

Components.gallery();

break;

case"memories":

settingPanel.innerHTML=

Components.memories();

break;

case"message":

settingPanel.innerHTML=

Components.message();

break;

case"music":

settingPanel.innerHTML=

Components.music();

break;

case"gift":

settingPanel.innerHTML=

Components.gift();

break;

case"button":

settingPanel.innerHTML=

Components.button();

break;

case"animation":

settingPanel.innerHTML=

Components.animation();

break;

case"seo":

settingPanel.innerHTML=

Components.seo();

break;

case"generate":

settingPanel.innerHTML=

Components.generate();

break;

default:

settingPanel.innerHTML=

Components.dashboard();

}

}

/*
=========================================================
MENU EVENT
=========================================================
*/

document

.querySelectorAll(

".menu button"

)

.forEach(btn=>{

btn.onclick=()=>{

renderPage(

btn.dataset.page

);

};

});

/*
=========================================================
OPEN PAGE
=========================================================
*/

function openDashboard(){

renderPage(

"dashboard"

);

}

function openTheme(){

renderPage(

"theme"

);

}

function openHero(){

renderPage(

"hero"

);

}

function openGallery(){

renderPage(

"gallery"

);

}

function openMemories(){

renderPage(

"memories"

);

}

function openMessage(){

renderPage(

"message"

);

}

function openMusic(){

renderPage(

"music"

);

}

function openGift(){

renderPage(

"gift"

);

}

function openButton(){

renderPage(

"button"

);

}

function openAnimation(){

renderPage(

"animation"

);

}

function openSEO(){

renderPage(

"seo"

);

}

function openGenerate(){

renderPage(

"generate"

);

}

/*
=========================================================
PART 1 END
=========================================================
*/
