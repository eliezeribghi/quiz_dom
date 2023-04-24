const questions = [
    'Combien de joueurs jouent sur un terrain de football (en Ligue 1 par exemple) ?',
    'Combien font 6 x 12 ?',
    'L\'eau est composée de combien d\'atomes ?'
];

const responses = [
    22,
    72,
    3
];

// Etape 1, on recupere la premiere question du tableau
const question1 = questions[0];
// Puis on l'affiche
console.log(question1);

// Etape 2, on utilise la methode window.prompt()
// C'est une methode qui permet d'afficher une fenêtre avec un text input pour ensuite récupérer le retour de ce text input
// Ici on affiche une fenetre ou sera affiché la question1, puis on récupère le retour du text input dans reponse1
// Donc ici reponse1 sera egal à la réponse de l'utilisateur
const reponse1 = window.prompt(question1);
// Ici, on affiche le retour de l'utilisateur (reponse1)
console.log(reponse1);

// Etape 3, ici je check si la reponse reçu par l'utilisateur est bien egal a la premiere valeur de mon tableau responses (l'index numero [0] = premiere valeur du tableau)
// Si c'est egal, on affiche CORRECT
if (reponse1 == responses[0]) {
    console.log("CORRECT");
    // Etape 4, si bonne reponse de l'utilisateur, alors on ajoute la question 1 dans la liste vert qu'il y a à gauche
    const container = document.querySelector("#right .responses");
    // Ici on va ajouter dans le HTML l'élément qu'on veut ajouter
    // Si on avait mit : 
    // container.innerHTML = '<li>'+question1+'</li>';
    // Ca aurait écraser tout le HTML deja existant
    container.innerHTML = container.innerHTML + '<li>'+question1+'</li>';
}

// Sinon, on affiche faux
else {
    // Ici meme process que si la reponse est correct, sauf qu'ici on gere le cas ou la reponse est fausse
    // Donc ici on ajoute la question a la liste rouge a droite
    const container = document.querySelector("#wrong .responses");
    container.innerHTML = container.innerHTML + '<li>'+question1+'</li>';
    console.log("faux");
}

