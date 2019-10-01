$(document).ready(function() {

    $(".btn-alter").click(function(e) {

        e.preventDefault();
        var url = "contato/modelo/edit-contato.php";
        var dados = $('#edit-contato').serialize();

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
                    $('#modal-dados').modal('hide')
                } else {
                    Swal.fire({
                        title: 'SysAgenda!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                    $('#modal-dados').modal('hide')
                }
            }
        })

        $('tbody').empty()
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'contato/modelo/ctr-contato.php',
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let contato = `
                <tr>
                    <td class="text-center">` + dados[i].idContato + `</td>
                    <td class="text-center">` + dados[i].nomeContato + `</td>
                    <td class="text-center">` + dados[i].telefoneContato + `</td>
                    <td class="text-center">` + dados[i].celularContato + `</td>
                    <td class="text-center">
                        <button id="` + dados[i].idContato + `" class="btn btn-outline-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[i].idContato + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[i].idContato + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `
                    $('tbody').append(contato)
                }
                $('body').append('<script src="contato/controle/view-contato.js"></script>');
                $('body').append('<script src="contato/controle/find-contato.js"></script>');
                $('body').append('<script src="contato/controle/delete-contato.js"></script>');
                $('body').append("<script>$('.new-contato').click(function() { $('#conteudo').load('contato/visao/add-contato.html') })</script>");
            }
        })

    })
})