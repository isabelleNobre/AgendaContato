$(document).ready(function() {

    $(".btn-login").click(function(e) {

        e.preventDefault()
        var url = "usuario/modelo/validate.php"
        var dados = $('#formLogin').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    let url = "main.html"
                    $(location).attr('href', url)
                } else {
                    Swal.fire({
                        title: 'SysAgenda!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                    $('#formLogin input').val("")
                }
            }
        })

    })

})