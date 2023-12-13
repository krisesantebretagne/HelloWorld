"use strict";
function kgALbs(poids) {
    if (typeof poids === "number") {
        return poids * 2.2;
    }
    else {
        return parseInt(poids) * 2.2;
    }
}
console.log(kgALbs(10));
console.log(kgALbs("10kg"));
//# sourceMappingURL=TypesUnionExemple.js.map