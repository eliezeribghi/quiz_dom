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