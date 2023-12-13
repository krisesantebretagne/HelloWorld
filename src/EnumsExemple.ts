/* une liste de constants, valeurs attribués à chaque élément.
Small = 1, Medium = 2, Large = 3.
On peut aussi définir les valeurs explicitement dans l'enum.
Si on déclare que l'enum est un constant, le code JS va être 
beaucoup moins verbeux */

//PascalCase
const enum Taille {Small, Medium, Large};
let maTaille: Taille = Taille.Medium;
console.log(maTaille);

const enum TailleExplicite{Small = 's', Medium = 'm', Large = "l"};
let maTailleExplicite: TailleExplicite = TailleExplicite.Medium;
console.log(maTailleExplicite);