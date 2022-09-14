
function consultaCep(){
    var cep= document.getElementById("cep").ariaValueMax;
    var url = "httpps://viacep.com.br/ws/" + cep+ "/json/";
    console.log(cep)
    $.ajax({ //função do jquery
        type: "GET",
        success: function(response)
        {
            console.log(response);
            document.getElementById("Logradouro").innerHtml =reponse.logradouro 
        }
    })

}