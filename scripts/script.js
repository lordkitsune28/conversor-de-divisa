let mostrar = [];
//almacenar los datos introducidos
let moneda = Array(6);
function capturardatos() {

    let dinero = Number(document.getElementById("cantidad").value);
    let origen = document.getElementById("origen").value;
    let convertido = document.getElementById("convertido").value;

    if (isNaN(dinero) || dinero === " " || origen === "selecciona" || convertido === "selecciona") {

        document.getElementById("mensaje").setAttribute("class", "error");
        document.getElementById("mensaje").style.display = "block";
    } else {
        seleccionar(dinero, origen, convertido)

    }
}
//seleccionar

function seleccionar(dinero, origen, convertido) {

    //asignandole valores al array
    if (origen === "dolar") {
        moneda = [1, 1, 21.18, 3934.70, 0.89, 0.76]

    } else if (origen === "pesom") {
        moneda = [1, 0.047, 1, 186.03, 0.042, 0.036]
    } else if (origen === "pesoc") {
        moneda = [1, 0.00025, 0.0053, 1, 0.00023, 0.00019]
    } else if (origen === "euro") {
        moneda = [1, 1.13, 23.90, 4441.57, 1, 0.85]
    } else if (origen === "librae") {
        moneda = [1, 1.32, 28.06, 5215.66, 1.17, 1]
    } else {
        moneda = [1, 1, 1, 1, 1, 1]
    }

    if (convertido === "sdolar" && origen === "dolar" || convertido === "spesom" && origen === "pesom" || convertido === "spesoc" && origen === "pesoc" || convertido === "seuro" && origen === "euro" || convertido === "slibrae" && origen === "librae" || convertido === "sselecciona" && origen === "selecciona") {
        alert("seleccion no valida las monedas son las mismas")

    } else {
        calcular(dinero, origen, convertido)
    }
}

function calcular(dinero, origen, convertido) {
    let total = 0;
    if (origen === "dolar") {
        if (convertido === "spesom") {
            total = dinero * moneda[2]

            imprimir(dinero, total);

        } else if (convertido === "spesoc") {
            total = dinero * moneda[3]

            imprimir(dinero, total);

        } else if (convertido === "seuro") {
            total = dinero / moneda[4]

            imprimir(dinero, total);

        } else if (convertido === "slibrae") {
            total = dinero / moneda[5]

            imprimir(dinero, total);

        } else {
            alert("seleccion no valida")

        }

    } else if (origen === "pesom") {
        if (convertido === "sdolar") {
            total = dinero / moneda[1]

            imprimir(dinero, total);

        } else if (convertido === "spesoc") {
            total = dinero * moneda[3]

            imprimir(dinero, total);

        } else if (convertido === "seuro") {
            total = dinero / moneda[4]

            imprimir(dinero, total);

        } else if (convertido === "slibrae") {
            total = dinero / moneda[5]

            imprimir(dinero, total);

        } else {
            alert("seleccion no valida")

        }
    } else if (origen === "pesoc") {
        if (convertido === "sdolar") {
            total = dinero / moneda[1]

            imprimir(dinero, total);

        } else if (convertido === "spesom") {
            total = dinero / moneda[2]

            imprimir(dinero, total);

        } else if (convertido === "seuro") {
            total = dinero / moneda[4]

            imprimir(dinero, total);

        } else if (convertido === "slibrae") {
            total = dinero / moneda[5]

            imprimir(dinero, total);

        } else {
            alert("seleccion no valida")

        }
    } else if (origen === "euro") {
        if (convertido === "sdolar") {
            total = dinero * moneda[1]

            imprimir(dinero, total);

        } else if (convertido === "spesom") {
            total = dinero * moneda[2]

            imprimir(dinero, total);

        } else if (convertido === "spesoc") {
            total = dinero * moneda[3]

            imprimir(dinero, total);

        } else if (convertido === "slibrae") {
            total = dinero / moneda[5]

            imprimir(dinero, total);

        } else {
            alert("seleccion no valida")

        }
    } else if (origen === "librae") {
        if (convertido === "sdolar") {
            total = dinero * moneda[1]

            imprimir(dinero, total);

        } else if (convertido === "spesom") {
            total = dinero * moneda[2]

            imprimir(dinero, total);

        } else if (convertido === "spesoc") {
            total = dinero * moneda[3]

            imprimir(dinero, total);

        } else if (convertido === "seuro") {
            total = dinero * moneda[4]

            imprimir(dinero, total);

        } else {
            alert("seleccion no valida")

        }
    } else {
        alert("seleccion no valida")
    }

}

function imprimir(dinero, total) {
    
    let fragmento = document.createDocumentFragment();
    

    mostrar.push({
        origenI: dinero,
        salida: total

    })

    let contenedor = document.createElement("div");
    contenedor.id = "imp";
    
    document.body.appendChild(contenedor);
    let element = document.getElementById("imp")
    
    mostrar.forEach(most => {
        const { origenI, salida } = most;
        element.innerHTML += `
        <table id="tabla">
        <thead>
        
        <tr>
        <td>valor ingresado</td>
        <td>valor convertido</td>
        </tr>

        </thead>
        <tbody>
        <tr>

            <td>${origenI}</td>
            <td>${salida}</td>
    
        </tr>
        </tbody
        </table>
        `
        fragmento.appendChild(lista);
    })

    lista.appendChild(fragmento);

}