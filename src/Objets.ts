/* Objets: définir le type des attributs */
/* let employe: {
    id: number,
    nom: string
} = {
    id: 1,
    nom: "Kris"
};

console.log(employe); */

/* Comment créer des attribut readonly */

/* let employe2: {
    readonly id: number,
    nom: string,
    // méthode avec param Date qui retourne void
    retraite: (date: Date) => void;
} = {
    id: 2,
    nom: "Bob",
    retraite: (date: Date) => {
        console.log(date)
    }
}; */


/* Créer des objet moins verbeux.
Principe DRY: Don't Repeat Yourself */

type Employe = {
    readonly id: number,
    nom: string,
    retraite: (date: Date) => void
}

let employe1: Employe = {
    id: 1,
    nom: "Bob",
    retraite: (date: Date) => {
        console.log(date);
    }
}

console.log(employe1);