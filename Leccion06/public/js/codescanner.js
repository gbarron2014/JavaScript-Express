function onScanSuccess(qrCodeMessage) {
    var sele = document.querySelector('input[name="servicio"]:checked');

    servicio = sele.value;
    console.log(servicio);
    document.getElementById('result').innerHTML = '<span class="result">' + qrCodeMessage + '</span>';
    fetch('http://localhost:3000/code', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ code: qrCodeMessage, servicio: servicio })
        })
        .then(function(response) {
            // Transforma la respuesta a JSON
            return response.json();
        })
        .then(function(json) {
            if (json.code == 200) {

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: json.estudiante,
                    showConfirmButton: false,
                    timer: 1000
                });
                console.log("REcibidos " + JSON.stringify(json))
            } else if (json.code == 404) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Se requiere un registro<br> Consulte con el Administrador',
                    showConfirmButton: false,
                    timer: 1000
                });
            }

        });
}

function onScanError(errorMessage) {
    //handle scan error
}