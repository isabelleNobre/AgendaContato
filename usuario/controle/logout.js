$(document).ready(function() {

    $(".btn-logout").click(function(e) {

        e.preventDefault()

        var dados = ""
        var url = "usuario/modelo/logout.php"

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                let timerInterval
                Swal.fire({
                    title: 'SysAgenda!',
                    html: 'O sistema será encerrado em <strong></strong> milisegundos.',
                    timer: 3000,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            Swal.getContent().querySelector('strong')
                                .textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (
                        // Read more about handling dismissals
                        result.dismiss === Swal.DismissReason.timer
                    ) {
                        let url = "index.html"
                        $(location).attr('href', url)
                    }
                })
            }
        })

    })

})