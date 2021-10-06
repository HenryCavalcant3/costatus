var getJSON = function (url, sucesso, erro) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", url, true);
    httpRequest.responseType = "json";
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                if (sucesso) sucesso(httpRequest.response);
            }
            else {
                if (erro) erro(httpRequest.status, httpRequest.statusText);
            }
        }
    });

    httpRequest.send();
}

var estados = document.querySelector("#estado");
var cidades = document.querySelector("#cidade");

var loading = document.querySelector("#loading");

loading.style.display = "none";

estados.addEventListener("click", () => setIdEstado(estados.value));

var idEstado = -1;

const setIdEstado = id => {
    var aux;

    if(idEstado == -1) {
        idEstado = -2;
        cidades.disabled = true;
    }
    else if(idEstado == -2) {
        idEstado = -1;
        aux = id;
        cidades.disabled = false;
    }

    if(aux === undefined) {
    }
    else if(aux == "estado") {
        cidades.innerHTML = "<option>Escolha o estado...</option>";
        cidades.disabled = true;
    }
    else {
        getJSON("http://servicodados.ibge.gov.br/api/v1/localidades/estados/"+aux+"/distritos", function (data) {
            loading.style.display = "block";
            // cidades.innerHTML = "";
            for(x in data) {
                cidades.appendChild(getOption(data[x].nome), 0);
            }
            loading.style.display = "none";
        }, function (errorCode, errorText) {
            console.log('Código: ' + errorCode);
            console.log('Mensagem de erro: ' + errorText);
        });
    }
}

const getOption = (sig, id) => {
    var option = document.createElement("option");
    option.setAttribute("value", ""+id);
    var text = document.createTextNode(sig);

    option.appendChild(text);

    return option;
};

getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/estados", function (data) {
    loading.style.display = "block";
    for(x in data) {
        estados.appendChild(getOption(data[x].sigla, data[x].id));
    }
    loading.style.display = "none";
}, function (errorCode, errorText) {
    console.log('Código: ' + errorCode);
    console.log('Mensagem de erro: ' + errorText);
});

