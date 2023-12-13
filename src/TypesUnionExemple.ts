/* Pour définir plusieurs types possibles : type 1 | type 2 */
function kgALbs(poids: number | string): number {
    if (typeof poids === "number") {
        return poids * 2.2;
    } else {
        return parseInt(poids) * 2.2;
    }
}

console.log(kgALbs(10));
/* parseInt reconnaît le numéro au début. 
Ne fonctionne pas s'il commence par des lettres. */
console.log(kgALbs("10kg"));

