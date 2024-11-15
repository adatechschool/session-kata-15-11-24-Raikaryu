const texteDonner = 'JEANNE'

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList() {
        // const texteDonner = prompt('donner votre message en majuscule')

        //recupère le texte donner et le mets dans une tableau
        const tableau = Array.from(texteDonner)
        // Deuxième méthode possible
        // const tableau = texteDonner.split('')
        return tableau
}


function translateLatinCharacter(tableau) {
        // Initialiser une chaîne vide pour stocker le résultat
        let resultat = '';
    
        // Parcourir chaque caractère du texte
        for(let i = 0; i < tableau.length; i++) {
            // Ajouter la traduction du caractère actuel
            resultat += latinToMorse[tableau[i]] + ' ';
        }
    
        // Retourner le résultat en enlevant l'espace final
        return resultat;

}
console.log(translateLatinCharacter(getLatinCharacterList()))




