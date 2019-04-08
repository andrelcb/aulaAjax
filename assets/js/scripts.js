$(document).ready(function(){

    // chamada do ajax no onchange do select prioridade
    $(document).on("change", "#prioridade", function() {
        definePrioridade();
    });
});

//função para chamanda do ajax
function definePrioridade() {
    $.ajax({
        url: "ajax/ajax_atualiza_prioridade.php", //url do arquivo vai ser definida a chamda do ajax
        type: "post", // o tipo vai ser POST
        dataType: "json", //o dataType json, quer dizer q o ajax espera 1 retorno em json
        async: false,
        data: {
            //parametros que vao ser enviado via post
            prioridade: $("#prioridade option:selected").val(), // defino o nome da variavel do post que sera enviado e atribuo um valor
        },
        success: function(ajaxResposta){
            //sucesso do retorno do ajax
            $("#prioridadeResposta").html(ajaxResposta.prioridade); // pego a resosta do objeto criado na pasta php e jogo em 1 span como resosta
        },
        error: function(data){
            //erro
        }
    });
    
}