let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "si";
while(agregarMas != "no" || agregarMas!='2'){

    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde '1.si' o '2.no'.");
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "1" && agregarMas != "2") {  
        alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "2" || agregarMas==="no"){  
        break;
    }
	
    comida = prompt("¿Qué comida deseas agregar?");
    categoria = prompt("¿En qué categoria encaja esta comida: '1.frutas', '2.lacteos', '3.dulces' o '4.congelados'?");
    if(categoria === 'frutas' || categoria === '1'){
        frutas.push(comida);
    } else if (categoria === 'lacteos' || categoria === '2'){
        lacteos.push(comida);
    } else if (categoria === 'dulces'  || categoria === '3'){
        dulces.push(comida);
    } else if (categoria === 'congelados' || categoria === '4'){
        congelados.push(comida);
    } else {
        alert("Esa categoria no está predefinida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);