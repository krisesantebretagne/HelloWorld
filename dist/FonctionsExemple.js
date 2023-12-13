"use strict";
function calculerImpot(salaire, anneeImpot) {
    if (anneeImpot < 2023)
        return salaire * 1.2;
    return salaire * 1.3;
}
let impot = calculerImpot(10000, 2022);
console.log(impot);
function calculerImpot2(salaire, anneeImpot = 2023) {
    if (anneeImpot < 2023)
        return salaire * 1.2;
    return salaire * 1.3;
}
let impot2 = calculerImpot2(10000);
console.log(impot);
//# sourceMappingURL=FonctionsExemple.js.map