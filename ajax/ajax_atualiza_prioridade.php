<?php

    // crio um objeto para retorno do ajax
    $objetoRetorno = new stdclass();
    $objetoRetorno->acao = false;
    $objetoRetorno->prioridade = "";
    $objetoRetorno->msg = "Procedimento realizado com sucesso!";
    
    //so entro se tiver algum paramentro enviado no data do ajax do POST
    if ($_POST){
        $prioridade = $_POST['prioridade']; // recupera o post enviado no ajax. E um post normal igual os outros
        if($prioridade) {
            $objetoRetorno->prioridade = $prioridade;
            $objetoRetorno->acao = true;
        }
    } else{
        $objetoRetorno->msg = "Tipo de requisição inválida";
    }
    echo json_encode($objetoRetorno);
