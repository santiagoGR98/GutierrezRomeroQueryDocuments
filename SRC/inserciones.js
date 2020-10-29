/* En primer lugar vamos a procedder a introducir
información rescatada de la base de la colección inventory, para ello usaremos el método db.coleccion.insertMany */
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "pencils", qty: 12, size: { h: 1, w: 105.25, uom: "cm" }, status: "E" },
    { item: "laptops", qty: 100, size: { h: 150, w: 15, uom: "cm" }, status: "B" },
    { item: "folders", qty: 75, size: { h: 23, w: 34, uom: "cm" }, status: "C" },
    { item: "rubbers", qty: 56, size: { h: 104, w: 159, uom: "cm" }, status: "G" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "Blackboards", qty: 87, size: { h: 160, w: 165.25, uom: "cm" }, status: "F" },
    { item: "Desks", qty: 45, size: { h: 50, w: 35.25, uom: "cm" }, status: "G" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "Chargers", qty: 4345, size: { h: 14, w: 167, uom: "cm" }, status: "Z" },
    { item: "Printers", qty: 2, size: { h: 13, w: 15.25, uom: "cm" }, status: "T" },
    { item: "Chairs", qty: 35, size: { h: 80, w: 25, uom: "cm" }, status: "R" },
    { item: "Ink", qty: 5, size: { h: 1, w: 15, uom: "cm" }, status: "G" },
    { item: "Fans", qty: 67, size: { h: 11, w: 12, uom: "cm" }, status: "S" },
    { item: "Underliners", qty: 5, size: { h: 102, w: 15, uom: "cm" }, status: "O" },
    { item: "Notebook", qty: 78, size: { h: 16, w: 15, uom: "cm" }, status: "N" },
]);
/*Una vez hallamos introducido los datos vamos a proceder a realizar las consultas, en este caso hemos utilizado
"insertMany", aunque "Insert" o "InsertOne" también habrían sido válidos*/