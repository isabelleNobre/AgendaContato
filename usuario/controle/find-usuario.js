$(document).ready(function() {
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
            $('body').append('<script src="usuario/controle/edit-usuario.js"></script>')

        }
    })
})