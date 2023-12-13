/* Fonctions : Définir le type des paramètres et de la valeur retourné  */

function calculerImpot(salaire: number, anneeImpot: number): number {
    if (anneeImpot < 2023)
        return salaire * 1.2;
    return salaire * 1.3;
}

let impot: number = calculerImpot(10_000, 2022);
console.log(impot);

/* Fonction avec une paramètre optionelle et valeur défaut pour l'option*/
function calculerImpot2(salaire: number, anneeImpot: number = 2023): number {
    if (anneeImpot < 2023)
        return salaire * 1.2;
    return salaire * 1.3;
}

let impot2: number = calculerImpot2(10_000);
console.log(impot);