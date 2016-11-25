
// JQUERY HTML

 // REG JQUERY PDF


// Notions indispensables

// $(function() {
// // Ici, le DOM est entièrement défini
// $(sélecteur).action  Toujour :   sélecteur ex: H1   et   action  ex: .css('color','yellow');
// });



// Fonctions de rappel

$(function() {

    $(".rouge").fadeOut("slow",function(){

      $(this).fadeIn("slow");

      $('.bleu').css('background','blue').css('color','yellow');

    }); 
});


$(function() {
$('a').css('background','blue').css('color','yellow');


// méthode removeAttr()  pour supprimer des lienes
$('a').removeAttr('href');

});



// Manipulation de l'attribut class
$(function() {

$('#julia').addClass('rouge grand');

});


// LA GESTION ÉVÉNEMENTIELLE

// $(sel).mge(function() {
// // Une ou plusieurs instructions jQuery
// // pour gérer l'événement lorsqu'il se produit
// }



