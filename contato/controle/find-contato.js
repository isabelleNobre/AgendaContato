$(document).ready(function() {

    $('.btn-edit').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()
        $('.modal-title').append('Edição de registro')

        var dados = 'idContato='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'contato/modelo/view-contato.php',
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let contato = `
                        <form class="mt-3" id="edit-contato">
                            <div class="form-group">
                                <label>Nome do contato</label>
                                <input type="text" class="form-control" name="nomeContato" value="` + dados[i].nomeContato + `">
                            </div>
                            <div class="form-group">
                                <label>Endereço do contato</label>
                                <input type="text" class="form-control" name="enderecoContato" value="` + dados[i].enderecoContato + `">
                            </div>
                            <div class="form-group">
                                <label>Telefone do contato</label>
                                <input type="text" class="form-control" name="telefoneContato" value="` + dados[i].telefoneContato + `">
                            </div>
                            <div class="form-group">
                                <label>Celular do contato</label>
                                <input type="text" class="form-control" name="celularContato" value="` + dados[i].celularContato + `">
                            </div>
                            <div class="form-group">
                                <label>E-mail do contato</label>
                                <input type="text" class="form-control" name="emailContato" value="` + dados[i].emailContato + `">
                            </div>
                            <input type="hidden" value="` + dados[i].idContato + `" name="idContato">
                            <button class="btn btn-outline-warning btn-alter"><i class="mdi mdi-content-save"></i> Salvar</button>
                        </form>
                        `

                    $('.modal-body').append(contato)
                }
                $('#modal-dados').modal('show')
                $('body').append('<script src="contato/controle/edit-contato.js"></script>');
            }

        })
    })
})