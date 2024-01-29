$(document).ready(()=>{
    $('.btn-modern').on('click', (e)=>{
        console.log(e.target.id)
    })

    $('#fecharAviso').on('click', (e) =>{
        $('#aviso').fadeOut('medium')
    })
})