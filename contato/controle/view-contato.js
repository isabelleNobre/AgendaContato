$(document).ready(function() {

    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idContato='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'contato/modelo/view-contato.php',
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let nome = dados[i].nomeContato
                    let contato = `
                        <p>Endereço: ` + dados[i].enderecoContato + `</p>
                        <p>Telefone: ` + dados[i].telefoneContato + ` </p>
                        <p>Celular: ` + dados[i].celularContato + ` </p>
                        <p>E-mail: ` + dados[i].emailContato + ` </p>
                    `
                    $('.modal-title').append(nome)
                    $('.modal-body').append(contato)
                }
                $('#modal-dados').modal('show')
            }

        })
    })
})