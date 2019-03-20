$(document).ready(function(){
    $("#duracao").mask("00:00");
});

$("#button-adiciona").click(insereMusica);
$("#button-lista").one('click',listaMusicas);

function insereMusica() {
    
    let autor = $("#autor").val();
    let musica = $("#musica").val();
    let duracao = $("#duracao").val();

    if(autor == ""){
        M.toast({html: 'Preencha o campo Autor.'})
        $("#autor").focus();

    }else if (musica == ""){

        M.toast({html: 'Preencha o campo Música.'});
        $("#musica").focus();

    }else if(duracao == ""){

        M.toast({html: 'Preencha o campo Duração.'});
        $("#duracao").focus();

    }else{
        insereNaTabela(autor, musica, duracao);
        limpaCampos();

    }
    
}

function insereNaTabela(autor, musica, duracao){
    let corpoTabela = $(".musicas").find("tbody");
    let linha = novaLinha(autor, musica, duracao);
    corpoTabela.prepend(linha);    
}

function novaLinha(autor, musica, duracao) {
    let linha = $("<tr>");
    let colunaAutor = $("<td>").text(autor);
    let colunaMusica = $("<td>").text(musica);
    let colunaDuracao = $("<td>").text(duracao);

    linha.append(colunaAutor);
    linha.append(colunaMusica);
    linha.append(colunaDuracao);
    return linha;
}

function limpaCampos(){
    $("#autor").val("");
    $("#musica").val("");
    $("#duracao").val("");
}

function listaMusicas(){
    
    let lstmsc = {autor:["Queen","Kiss","Gabriel Diniz","Slaves","Emarosa","Foo Fighters","Linkin Park","CPM22"], 
                  musica:["Somebody to Love","I wanna Rock N Roll All Night", "O nome dela é Jennifer","The Fire Down Below","We are Life","The Pretender","Numb","Dias Atrás"], 
                  duracao:["03:30","04:30","02:34","04:07","04:01","04:31","03:07","04:36"]};

    lstmsc.autor.sort().reverse();
    for(i = 0; i < lstmsc.autor.length;i++){
        let autor = lstmsc.autor[i];
        let musica = lstmsc.musica[i];
        let duracao = lstmsc.duracao[i];

        insereNaTabela(autor,musica,duracao);

    }   
}
