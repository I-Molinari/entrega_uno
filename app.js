document.addEventListener("DOMContentLoaded", function(event) {

    let nombreIngresado
    do{
        nombreIngresado = prompt("Ingresa tu nombre de usuario");
        if(nombreIngresado !=""){
            alert("Usuario Valido" +"\nBienvenido: "+nombreIngresado)
        }else{
            alert("Error" + "\nNo ha ingresado ningun nombre de Usuario")
        }
    }while(nombreIngresado =="")
    
    let opcionCuchillo = prompt("Ingrese el numero del producto interesado.");
    let desc = descuento();
    let cuchillo1 = 25;
    let cuchillo2 = 30;
    let cuchillo3 = 35;
    let cuchillo4 = 40;
    let cuchillo5 = 45;
    let cuchillo6 = 50;
    let cuchillo7 = 55;
    let cuchillo8 = 60;
    let cuchillo9 = 70;
    let cuchillo10 = 80;
    let cuchillo11 = 90;
    let cuchillo12 = 100;
    let cuchillo13 = 110;
    let cuchillo14 = 125;
    switch(opcionCuchillo){
        case "1":
            if (desc) {
                cuchillo1 = cuchillo1 * 0.9;
            }
            alert("Has elegido el cuchillo Karambit" +"\ncon un Precio de " + cuchillo1 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo1);
            break;
        case "2":
            if (desc) {
                cuchillo2 = cuchillo2 * 0.9;
            }
            alert("Has elegido el cuchillo Gut Knife" +"\ncon un Precio de " + cuchillo2 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo2);
            break;
        case "3":
            if (desc) {
                cuchillo3 = cuchillo3 * 0.9;
            }
            alert("Has elegido el cuchillo Flip Knife" +"\ncon un Precio de " + cuchillo3 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo3);
            break;
        case "4":
            if (desc) {
                cuchillo4 = cuchillo4 * 0.9;
            }
            alert("Has elegido el cuchillo Bayonet" +"\ncon un Precio de " + cuchillo4 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo4);
            break;
        case "5":
            if (desc) {
                cuchillo5 = cuchillo5 * 0.9;
            }
            alert("Has elegido el cuchillo M9 Bayonet" +"\ncon un Precio de " + cuchillo5 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo5);
            break;
        case "6":
            if (desc) {
                cuchillo6 = cuchillo6 * 0.9;
            }
            alert("Has elegido el cuchillo Huntsman Knife" +"\ncon un Precio de " + cuchillo6 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo6);
            break;
        case "7":
            if (desc) {
                cuchillo7 = cuchillo7 * 0.9;
            }
            alert("Has elegido el cuchillo Stiletto Knife" +"\ncon un Precio de " + cuchillo7 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo7);
            break;
        case "8":
            if (desc) {
                cuchillo8 = cuchillo8 * 0.9;
            }
            alert("Has elegido el cuchillo Butterfly Knife" +"\ncon un Precio de " + cuchillo8 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo8);
            break;
        case "9":
            if (desc) {
                cuchillo9 = cuchillo9 * 0.9;
            }
            alert("Has elegido el cuchillo Falchion Knife" +"\ncon un Precio de " + cuchillo9 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo9);
            break;
        case "10":
            if (desc) {
                cuchillo10 = cuchillo10 * 0.9;
            }
            alert("Has elegido el cuchillo Shadow Daggers" +"\ncon un Precio de " + cuchillo10 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo10);
            break;
        case "11":
            if (desc) {
                cuchillo11 = cuchillo11 * 0.9;
            }
            alert("Has elegido el cuchillo Bowie Knife" +"\ncon un Precio de " + cuchillo11 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo11);
            break;
        case "12":
            if (desc) {
                cuchillo12 = cuchillo12 * 0.9;
            }
            alert("Has elegido el cuchillo Talon Knife" +"\ncon un Precio de " + cuchillo12 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo12);
            break;
        case "13":
            if (desc) {
                cuchillo13 = cuchillo13 * 0.9;
            }
            alert("Has elegido el cuchillo Navaja Knife" +"\ncon un Precio de " + cuchillo13 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo13);
            break;
        case "14":
            if (desc) {
                cuchillo14 = cuchillo14 * 0.9;
            }
            alert("Has elegido el cuchillo Ursus Knife" +"\ncon un Precio de " + cuchillo14 + " usd");
            console.log("el usuario " + nombreIngresado + "consulto por " + cuchillo14);
            break;
        default:
            alert("Esa opcion no es valida.")
        break;    
    }
    });
    let codigoDesc = "midescuento";
    function descuento() {
        let codigo = false;
        for (let i = 2; i >= 0; i--) {
            let ingresoDesc = prompt("Ingrese el codigo de descuento. \nTienes " + (i + 1) + " intentos.");
            if (ingresoDesc === codigoDesc) {
                alert("Felicidades, a obtenido un descuento del 10% en cualquiera de nuestros productos.")
                codigo = true;
                break;
            }   else {
                alert("Codigo incorrecto.")
            }
        }
        if (codigo == false) {
            alert("Se te acabaron los intentos.");
        }
        return codigo;
    }