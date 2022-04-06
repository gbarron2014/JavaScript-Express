var minDate, maxDate;

$.fn.dataTable.ext.search.push(
    function(settings, data, dataIndex) {
        var min = parseInt($('#min').val(), 10);
        var max = parseInt($('#max').val(), 10);
        var age = parseFloat(data[4]) || 0; // use data for the age column

        if ((isNaN(min) && isNaN(max)) ||
            (isNaN(min) && age <= max) ||
            (min <= age && isNaN(max)) ||
            (min <= age && age <= max)) {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    let minDate = $('#min').value;
    let maxDate = $('#max').value;
    let tablaEstadistica = new DataTable('#tablaEstadistica', {
        ajax: function(d, cb) {
            fetch('/query', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ start: minDate, end: maxDate })
                })
                .then(function(response) {
                    // Transforma la respuesta a JSON
                    return response.json();
                })
                .then(function(data) {

                    cb(data);
                });
        },
        columns: [
            { data: 'Roles' },
            { data: 'Genero' },
            { data: 'Turno' },
            { data: 'Carrera_Tecnica' },
            { data: 'Fecha_Registro' },
            { data: 'Servicio' },
        ]
    });


    // Search button
    $('#min, #max').change(function() {
        tablaEstadistica.draw();
    });

});