

// 1 getElementById()

// var div = document.getElementById('myDiv');
// alert(div);



// 2 L'héritage des propriétés et des méthodes

// var query = document.querySelector('#menu .item span'),
// queryAll = document.querySelectorAll('#menu .item span');
// alert(query.innerHTML); // Affiche : "Élément 1"
// alert(queryAll.length); // Affiche : "2"
// alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); 
// Affiche : "Élément 1 - Élément 2"




// 3 Les attributs  Via l'objet Element

// var link = document.getElementById('myLink');
// var href = link.href;
// alert(href);
// link.href = 'http://www.yahoo.com';



// 4  La classe

// document.getElementById('myColoredDiv').className = 'blue';
// document.getElementById('orange').className = 'orange';
// document.getElementById('myColoredDiv2').className = 'red1';



// 5  Récupérer du HTML 

// var div = document.getElementById('myDiv');
// alert(div.innerHTML);

// document.getElementById('myDiv').innerHTML += '<blockquote>Je mets une citation à la place du paragraphe</blockquote>';




// 6 innerText et textContent

// var div = document.getElementById('myDiv');
// alert(div.innerText);

// ---------------------

// var div = document.getElementById('myDiv');
// var txt = '';

// if (div.textContent) { // « textContent » existe ? Alors on s'en sert !

// txt = div.textContent;
// } 

// else if (div.innerText) { // « innerText » existe ? Alors on doit être sous IE.
// txt = div.innerText + ' [via Internet Explorer]';
// } 

// // else { // Si aucun des deux n'existe, cela est sûrement dû au fait qu'il n'y a
// // pas de texte
// // txt = ''; // On met une chaîne de caractères vide
// // }

// alert(txt);




// 7 Lister et parcourir des noeuds enfants

var paragraph = document.getElementById('myP');
var first = paragraph.firstChild;
var last = paragraph.lastChild;
alert(first.nodeName.toLowerCase());
alert(last.nodeName.toLowerCase());








