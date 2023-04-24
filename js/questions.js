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

// Etape 5
// Ici on créer la methode askQuestion qui prend en parametre l'index de la question qu'on va poser et qui va retourner la réponse de l'utilisateur
function askQuestion(questionIndex) {
    // On pose une question à l'utilisateur et on récupère sa réponse
    const userAnswer = window.prompt(questions[questionIndex]);

    // On retourne la réponse entrée par l'utilisateur
    return userAnswer;
}

// Ici on créer une fonction nommée checkResponse qui va vérifier la réponse de l'utilisateur à la question dont l'index est passé en argument
// - responseIndex correspond a l'index de la question
// - answer correspond a la reponse (en string)
// Si la reponse est correcte, checkResponse retourne un booleen : true si bonne reponse, false si mauvaise reponse
function checkResponse(responseIndex, answer) {
    if (answer == responses[responseIndex]) {
        // Bonne reponse
        return true;
    }
    // Mauvaise reponse 
    else {
        return false;
    }
}

// Fonction qui ajoute une question dans la bonne liste selon la reponse de l'utilisateur
// questionIndex pour savoir quelle question ajouter 
// isCorrect, pour savoir si on a eu une bonne reponse ou non
function addResponseToDom(questionIndex, isCorrect) {
    // On créer une variable qui va stocker le container dans lequel on ajoutera notre question
    // On la créer ici car si on l'avait créée dans le if ou le else, elle ne serait pas accessible apres le if/else à cause de la portée des variables avec let
    let container;
    // Si la reponse de l'utilisateur est correcte, la variable container contient l'élément ul de right, sinon celui de wrong
    if (isCorrect === true) {
        container = document.querySelector("#right .responses");
    }
    else {
        container = document.querySelector("#wrong .responses");
    }
    // On vient ajouter un nouvel <li> contenant la question a notre container
    container.innerHTML = container.innerHTML + '<li>'+questions[questionIndex]+'</li>';
}

// Pose la premère question et récupère la réponse de l'utilisateur
let response = askQuestion(0);

// Vérifie que la réponse donnée est bien la bonne
let isCorrect = checkResponse(0, response);

// Modifie le DOM (#right ou #wrong si c'est une bonne ou mauvaise réponse)
addResponseToDom(0, isCorrect);