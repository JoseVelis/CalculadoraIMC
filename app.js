document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = document.getElementById('resultado');
    let barra = document.getElementById('barra-imc');

    imc = imc.toFixed(2);
    let interpretacion = "";
    let color = "";

    if (imc < 18.5) {
        interpretacion = "Bajo peso";
        color = "blue";
    } else if (imc < 25) {
        interpretacion = "Peso normal";
        color = "green";
    } else if (imc < 30) {
        interpretacion = "Sobrepeso";
        color = "orange";
    } else {
        interpretacion = "Obesidad";
        color = "red";
    }

    resultado.innerHTML = `IMC: <span class="${color}">${imc} - ${interpretacion}</span>`;
    barra.style.width = `${Math.min(imc * 2, 100)}%`;
    barra.style.backgroundColor = color;

    agregarHistorial(peso, altura, imc, interpretacion);
});

function agregarHistorial(peso, altura, imc, interpretacion) {
    let historial = document.getElementById('historial');
    let nuevaFila = `<tr>
                        <td>${peso} kg</td>
                        <td>${altura} m</td>
                        <td>${imc}</td>
                        <td>${interpretacion}</td>
                    </tr>`;
    
    historial.innerHTML = nuevaFila + historial.innerHTML;
    
    if (historial.children.length > 5) {
        historial.removeChild(historial.lastChild);
    }
}
