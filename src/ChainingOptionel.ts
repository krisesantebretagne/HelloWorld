type Client = {
    dateDeNaissance: Date
};

function rechercheClient(id: number): Client | null {
    return id === 0 ? null : {dateDeNaissance: new Date()};
}

let client1 = rechercheClient(0);

/* Optional property access operator ?. 
=> seulement executé si l'attribut n'est pas null ou undefined */
console.log(client1?.dateDeNaissance);

