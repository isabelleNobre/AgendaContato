$(document).ready(function() {
    $(".btn-edit").click(function(e) {

        e.preventDefault();
        var url = "usuario/modelo/edit-usuario.php";
        var dados = $('#edit-usuario').serialize();

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
                        text: 'Alteração efetuada com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })

                    $.ajax({
                        type: 'post',
                        dataType: 'json',
                        url: 'usuario/modelo/find-usuario.php',
                        success: function(dados) {
                            for (var i = 0; dados.length > i; i++) {
                                $('#nomeUsuario').val(dados[i].nomeUsuario)
                                $('#loginUsuario').val(dados[i].loginUsuario)
                                $('#senhaUsuario').val(dados[i].senhaUsuario)
                                $('#idUsuario').val(dados[i].idUsuario)
                            }
                        }
                    })

                } else {
                    Swal.fire({
                        title: 'SysAgenda!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                }
            }
        })
    })
})