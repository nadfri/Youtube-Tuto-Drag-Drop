window.onload = ()=> 
{ "use strict";

// const divs = document.querySelectorAll(".draggable"); //selection de toutes les divs avec la classe draggable
// let dragged; //servira à stocker la div dragged

// for (let div of divs)
// {
//     //Lancement du Drag
//     div.ondragstart = ()  => 
//     {
//         dragged = div; //copie de la div qui sera dragged
//         div.classList.add("dragged"); //ajout de la classe dragged
//     };

//     //Applique un effet CSS à l'entrée d'une zone de drop
//     div.ondragenter = ()  =>
//     {
//         if (!div.classList.contains("dragged")) //si ce n'est pas l'element dragged
//              div.classList.add('dragEffects'); //applique la classe dragEffects
//         div.classList.remove('shake');        //Supprime la classe shake si présente
//     };

//     //Applique un effet CSS à l'a sortie d'une zone de drop
//     div.ondragleave = ()  => div.classList.remove('dragEffects'); //supprime la classe dragEffects

//     //Applique à un effet à la div qui a subit le drag d'origine
//     div.ondragend   = ()  => div.classList.remove("dragged"); //supprime la classe dragged

//     //Permet à la div d'etre une zone de drop (refusé par defaut)
//     div.ondragover  = (e) => e.preventDefault();

//     //Copie la div dragged à la zone du drop et applice un effet CSS dessus
//     div.ondrop      = (e) => 
//     {
//         [dragged.innerHTML, div.innerHTML] = [div.innerHTML,dragged.innerHTML]; //interverti les 2 divs
//         //Ex: a=1; b=2;  [a,b]=[b,a]; // maintenant a=2 et b=1
//         div.classList.remove('dragEffects'); //supprime la classe dragEffects
//         div.classList.add("shake");         //ajout de la classe shake
//     }
// }


/**Version avec dataTransfert.setData() */

const divs = document.querySelectorAll(".draggable");
let dragged;
for (let div of divs)
{
  div.ondragstart     = (e) =>
  { 
    dragged = div; //save the element before change 
    div.classList.toggle("dragged");
    e.dataTransfer.setData('text/html', div.innerHTML);
  };

  div.ondragenter = ()  =>
  {
    if (!div.classList.contains("dragged")) 
         div.classList.add('dragEffects'); 
    div.classList.remove('shake');       
  };

  div.ondragleave = ()  => div.classList.remove('dragEffects');
  div.ondragend   = ()  => div.classList.remove("dragged"); 
  div.ondragover   = (e) => e.preventDefault();

  div.ondrop = (e) =>
  {
    dragged.innerHTML = div.innerHTML;
    div.innerHTML     = e.dataTransfer.getData('text/html');
    div.classList.remove('dragEffects');
    div.classList.add("shake"); 
  };

};


};

