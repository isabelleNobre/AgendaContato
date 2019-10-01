$(document).ready(function() {

    $(".btn-add").click(function(e) {

        e.preventDefault();
        var url = "contato/modelo/add-contato.php";
        var dados = $('#add-contato').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    Swal.fire({
                        title: 'SysAgenda!',
                        text: 'Cadastro efetuado com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                } else {
                    Swal.fire({
                        title: 'SysAgenda!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                }

                $('#add-contato input').val("")
            }
        })

    })
})