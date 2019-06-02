
// Des que je touche une touche du clavier cela se marque sur l'écran(Ok ca fonctionne)

const sms = document.querySelector('.message');
const letter = document.querySelectorAll('.letters input:not(:disabled');
const number = 0;

for (let i = 0; i < letter.length; i++) {
    letter[i].addEventListener('click', function () {
        sms.value += letter[i].value;
    });
}

// Je veux que des que je touche le bouton + je veux incrémenter la valeur de +1;

const button = document.querySelector('button');
const chiffre = document.querySelector('.numbers');

button.addEventListener('click', function(){
    chiffre.value++;
})

// Je veux que des que je touche la lettre -, la dernière lettre du texte que j'ai écrit soit supprimé;



const button2 = document.querySelector('.moins');
button2.addEventListener('click', function(){
    chiffre.value--;
})

// Des que j 'appuie sur le vert le bouton devient rouge et tout est vérouille, donc je ne peux pas taper des lettres

const bloc = document.querySelector('.bloc');
    bloc.addEventListener('click', function(){
        alert('Votre message a été envoyé');
    })









