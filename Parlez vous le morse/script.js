const texteDonner = "Hello world"

function getLatinCharacterList() {
        const tableau = Array.from(texteDonner)
        // Deuxième méthode possible
        // const tableau = texteDonner.split("")
        console.log(tableau)
}

getLatinCharacterList()