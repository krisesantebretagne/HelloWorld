"use strict";
function rechercheClient(id) {
    return id === 0 ? null : { dateDeNaissance: new Date() };
}
let client1 = rechercheClient(0);
console.log(client1 === null || client1 === void 0 ? void 0 : client1.dateDeNaissance);
//# sourceMappingURL=ChainingOptionel.js.map