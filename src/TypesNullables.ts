/* Pour utiliser les types null ou undefined, il faut les ajouter 
comme types union */

function coucou(nom: string | null | undefined) {
    if (nom) {
        console.log("Coucou, " + nom)
    } else {
        console.log("Qui es-tu ?")
    }
}

coucou("Bob");
coucou(undefined);