$(document).ready(function () {

    function carregaFilmes() {
        $.ajax({
            url: "http://localhost:8080/filmes",
            method: "GET",
            success: function (data) {
                $("#tabelaFilmes tbody").empty();

                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        let filme = data[i];

                        let dataFormatada = dayjs(filme.dataLancamento).format('DD/MM/YYYY');

                        let tr = $("<tr>");
                        tr.attr("data-id", filme.id); 
                        let id = $("<td>").text(filme.id);
                        let titulo = $("<td>").text(filme.titulo);
                        let genero = $("<td>").text(filme.genero);
                        let dataLancamento = $("<td>").text(dataFormatada);
                        let sinopse = $("<td>").text(filme.sinopse);

                        let botaoAvalie = $("<button>")
                            .addClass("btn btn-primary")
                            .text("Avalie")
                            .click(function () {
                                // Obtenha o ID do filme a partir do atributo "data-id" da linha
                                let idFilme = $(this).closest("tr").attr("data-id");
                                let tituloFilme = $(this).closest("tr").find("td:eq(1)").text();

                                // setar o modal
                                $("#inputCodFilme").val(idFilme);
                                $("#inputFilme").val(tituloFilme);

                                
                                $("#meuModal").modal("show");
                            });

                        let avaliar = $("<td>").append(botaoAvalie);

                        tr.append(id);
                        tr.append(titulo);
                        tr.append(genero);
                        tr.append(dataLancamento);
                        tr.append(sinopse);
                        tr.append(avaliar);

                        $("#tabelaFilmes tbody").append(tr);
                    }

                } else {
                    $("#tabelaFilmes tbody").append("<tr><td colspan='5'>Nenhum filme disponível</td></tr>");
                }
            },
            error: function () {
                
                $("#alertaErroGet").modal("show");
            },
        });
    }

    carregaFilmes();

    function salvarFilme(filme) {


        $.ajax({
            url: "http://localhost:8080/filmes",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(filme),
            success: function (data) {


                $("#alertSucesso").removeClass("alertSalvo")

                // Limpar os campos e realizar outras ações
                $("#inputTitulo").val("");
                $("#inputGenero").val("");
                $("#inputData").val("");
                $("#inputSinopse").val("");
                $("#inputFilme").focus();
                carregaFilmes();

                setTimeout(function () {

                    $("#alertSucesso").addClass("alertSalvo");

                }, 3000);

            },
            error: function () {

                $("#alertInsucesso").removeClass("alertErroSalvar")

                setTimeout(function () {

                    $("#alertInsucesso").addClass("alertErroSalvar");

                }, 3000);


            },
        });

    }

    $("#formSalvarFilme").submit(function (event) {
        event.preventDefault();

        let titulo = $("#inputTitulo").val();
        let genero = $("#inputGenero").val();
        let dataLancamento = $("#inputData").val();
        let sinopse = $("#inputSinopse").val();

        if (!titulo) {
            alert("O campo Título é obrigatório!");
            $("#inputFilme").focus();
            return;
        }
        if (!genero) {
            alert("O campo Gênero é obrigatório!");
            $("#inputGenero").focus();
            return;
        }
        if (!dataLancamento) {
            alert("O campo Data de Lançamento é obrigatório!");
            $("#inputData").focus();
            return;
        }
        if (!sinopse) {
            alert("O campo Sinopse é obrigatório!");
            $("#inputSinopse").focus();
            return;
        }

        dayjs(dataLancamento).format('yyyy-MM-dd')


        let filme = {
            titulo: titulo,
            genero: genero,
            dataLancamento: dataLancamento,
            sinopse: sinopse
        }

        salvarFilme(filme);
    });

    
    $("#formSalvarAnalise").submit(function (event) {
        event.preventDefault();

        
        let nota = $("#inputNota").val();
        let analiseUser = $("#analiseInput").val();
        let filme = $("#inputFilme").val();
        let codFilme = $("#inputCodFilme").val();

        console.log(analiseUser);

        if (!nota) {
            alert("Informe sua nota para o Filme");
            $("#inputNota").focus();
            return;
        }
        if (!analiseUser) {
            alert("Descreva sua Analise!");
            $("#analiseInput").focus();
            return;
        }
       

        let analise = {
            filme: filme,
            analise: analiseUser,
            nota: nota,
            codFilme: codFilme
        }

        avaliarFilme(analise);
    });

    function avaliarFilme(analise) {
        $.ajax({
            url: "http://localhost:8080/analises",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(analise),
            success: function (data) {

                $("#postAvaliacaoSucesso").modal("show");
                
                $("#inputNota").val("");
                $("#analiseInput").val("");

                $("#meuModal").modal("hide");
                
            },
            error: function () {
                $("#postAvaliacao").modal("show");
            },
        });
    }

    function carregarAnalises() {
        $.ajax({
            url: "http://localhost:8080/analises",
            method: "GET",
            success: function (data) {
                const container = $("#analisesContainer");
    
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        let analise = data[i];
    
                        
                        let divAnalise = $("<div>").addClass("container d-block shadow-lg avalConteudo");
    
                        
                        let labelFilme = $("<label>").html("<strong>Nome do filme:</strong>");
                        let pFilme = $("<p>").text(analise.filme);
                        let labelNota = $("<label>").html("<strong>Nota:</strong>");
                        let pNota = $("<p>").text(analise.nota);
                        let labelAvaliacao = $("<label>").html("<strong>Avaliação</strong>");
                        let pAvaliacao = $("<p>").text(analise.analise);
    
                        
                        divAnalise.append(labelFilme, pFilme, labelNota, pNota, labelAvaliacao, pAvaliacao);
    
                        
                        container.append(divAnalise);
                    }
                }
            },
            error: function () {
                $("#erroGetAnalises").modal("show");
            },
        });
    }
    
    
    carregarAnalises();
});