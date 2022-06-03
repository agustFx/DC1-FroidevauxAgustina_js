let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad:");
let dni = prompt("Ingresa tu DNI:");
const usuario = "Ingresaste como " + nombre + " de " + edad + " años, con DNI " + dni + ".";
const turno = "Tu turno ha sido otorgado con éxito, " + nombre + "!";
const error = "No ingresaste ninguna opción válida, intenta de nuevo.";
alert(usuario);



while((nombre != "") && (edad != "") && (dni != "")){
    let entrada = prompt("Indique el número de la especialidad con la que desea atenderse: \n 1) Odontología \n 2) Oftalmología \n 3) Cardiología \n 4) Neumología");
    switch(entrada){
        case "1":
            alert(turno);
            break;

        case "2":
            let turnoDenegado = prompt("Lo sentimos, " + nombre + ". No nos quedan turnos disponibles para oftalmolgía, ¿te gustaría sacar turno con alguna otra especialidad? \n SI | NO");
            if(turnoDenegado.toUpperCase() != "SI"){
                alert("Gracias por visitarnos, esperamos verte pronto!")
            } else if(turnoDenegado.toUpperCase() != "NO"){
                let entrada = prompt("Indique el número de la especialidad con la que desea atenderse: \n 1) Odontología \n 2) Oftalmología \n 3) Cardiología \n 4) Neumología");
                if(entrada != ""){
                    alert(turno);
                } else{
                    alert(error);
                }
            } else{
                alert(error);
            }
            break;
            
        case "3":            
            turnoDenegado = prompt("Lo sentimos, " + nombre + ". No nos quedan turnos disponibles para cardiología, ¿te gustaría sacar turno con alguna otra especialidad? \n SI | NO");
            if(turnoDenegado.toUpperCase() != "SI"){
                alert("Gracias por visitarnos, esperamos verte pronto!")
            } else if(turnoDenegado.toUpperCase() != "NO"){
                let entrada = prompt("Indique el número de la especialidad con la que desea atenderse: \n 1) Odontología \n 2) Oftalmología \n 3) Cardiología \n 4) Neumología");
                if(entrada != ""){
                    alert(turno);
                } else{
                    alert(error);
                }
            } else{
                alert(error);
            }
            break; 

        default:
            alert("Ha ocurrido un error, intente más tarde.");
            break;      
    }
    break;
}








