/*En este archivo vamos a proceder a realizar consultas mediante el uso de query selectors aplicados
a la colección inventory, a la cual le hemos insertado documentos en el archivo inserciones.js*/

/*$And EXPLICITO (Usando el operador), en este caso para encadenar condiciones será necesario el uso de $and, por ejemplo
para decir que la cantidad sea mayor a 50, no sea igual a 56 y que no sea mayor a 67*/

db.inventory.find( {
    $and: [
        { $or: [ { qty: { $lt : 12 } }, { qty : { $gt: 23 } } ] },
        { $or: [ { sale: false }, { size : { $ltq : 5 } } ] }
    ]
} );
db.inventory.find( {
    $and: [
        { $or: [ { lte: { $ne : 10 } }, { $nin : { $gt: 5 } } ] },
        { $or: [ { sale: true }, { size : { $ne : 5 } } ] }
    ]
} );
db.inventory.find( {
    $and: [
        { $or: [ { qty: { $lt : 153 } }, { qty : { $gt: 540 } } ] },
        { $or: [ { sale: true }, { size : { $lt : 5 } } ] }
    ]
} );
db.inventory.find( { $and: [ { h: { $gt: 145 } }, { w: { $lt: 56 } } ] } );
db.inventory.find( { $and: [ { uom: { $eq: "cm" } }, { size: { $ne: 56 } } ] } );
db.inventory.find( { $and: [ { item: { $eq: "NoteBooks" } }, { qty: { $gt: 5 } } ] } );
db.inventory.find( { $and: [ { item: { $eq: "Pencils" } }, { size: { $ltq: 1398 } } ] } );
db.inventory.find( { $and: [ { item: { $eq: "Folders" } }, { size: { $gte: 34 } } ] } );

/*AND Implicito (Sin usar el operador)*/
db.inventory.find( { size: {$lt: 55, $gt: 45}
}).pretty();
db.inventory.find( { item: {$eq: "Pens", $ne: Chairs}
}).pretty();
db.inventory.find( { qty: {$ne: 5, $gt: 45}
}).pretty();
db.inventory.find( { qty: { $eq: 156, $gt: 156 } } );
db.inventory.find( { w: { $ne: 112, $ltq: 113 } } );
db.inventory.find( { h: { $ne: 1, $exists: true } } );