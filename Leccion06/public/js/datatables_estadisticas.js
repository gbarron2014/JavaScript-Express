var minDate, maxDate;

$.fn.dataTable.ext.search.push(
    function(settings, data, dataIndex) {
        var min = minDate.val();
        var max = maxDate.val();
        var date = new Date(data[4]);

        if (
            (min === null && max === null) ||
            (min === null && date <= max) ||
            (min <= date && max === null) ||
            (min <= date && date <= max)
        ) {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    // Create date inputs
    minDate = new DateTime($('#min'), {
        format: 'YYYY/MM/DD'
    });
    maxDate = new DateTime($('#max'), {
        format: 'YYYY/MM/DD'
    });

    // DataTables initialisation
    var table = $('#tablaEstadistica').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    // Refilter the table
    $('#min, #max').on('change', function() {
        table.draw();
    });
});