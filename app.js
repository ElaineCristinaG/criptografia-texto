document.addEventListener("DOMContentLoaded",function(){

    function startPage(){

        document.getElementById("texto_entrada").value = "";
        document.getElementById("botao_decodifica").disabled = false;
        document.getElementById("botao_codifica").disabled = false;
        document.getElementById("saida_texto_codificado").style.display = "none";
        document.getElementById("texto_vazio").style.display = "block";

    }
    
    function alternaSection(){
        
        texto_vazio.style.display = "none";
        saida_texto_codificado.style.display = "block";
    }

    function codificar(){

        const texto_entrada = document.getElementById("texto_entrada").value;
        const texto_saida = texto_entrada
            .replace(/e/g,"enter")
            .replace(/i/g,"imes")
            .replace(/a/g,"ai")
            .replace(/o/g,"ober")
            .replace(/u/g,"ufat");

        alternaSection();
    
        document.getElementById("texto_codificado").textContent = texto_saida;
    }

    function decodificar() {
        const texto_entrada = document.getElementById("texto_entrada").value;
        const texto_decodificado = texto_entrada
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")    
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        alternaSection();
    
        document.getElementById("texto_codificado").textContent = texto_decodificado;
    }

    function copiarTexto(){

        const texto = document.getElementById("texto_codificado").innerText;  
        navigator.clipboard.writeText(texto);
      
    }

    startPage();

    const botao_codificar = document.getElementById("botao_codifica");
    botao_codificar.addEventListener("click", codificar);
    
    const botao_decodifica = document.getElementById("botao_decodifica");
    botao_decodifica.addEventListener("click", decodificar);

    const botao_copiar = document.getElementById("botao_copiar");
    botao_copiar.addEventListener("click", copiarTexto);

});



