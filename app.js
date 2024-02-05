document.addEventListener("DOMContentLoaded",function(){

    let alertTextoVazio = "Digite um texto para codificar/decodificar";
    let alertTextoForaDoPadrao = "Atenção! O Texto não deve conter letras maiúsculas e/ou caracteres especiais e acentuação.";
    let alertCopiadoComSucesso = "Texto copiado com Sucesso!";

    function startPage(){

        document.getElementById("texto_entrada").value = "";
        document.getElementById("botao_decodifica").disabled = false;
        document.getElementById("botao_codifica").disabled = false;
        document.getElementById("saida_texto_codificado").style.display = "none";
        document.getElementById("texto_vazio").style.display = "block";

    }

    function verificaTexto(texto){
        // Verificar se o campo está vazio
        if(texto == ""){
            alert(alertTextoVazio);
            console.log("1")
            return false
        }

        // Verificar letras maiúsculas
        if (/[A-ZÀ-ÖØ-Þ]/.test(texto)) {
            alert(alertTextoForaDoPadrao);
            console.log("2")
            startPage();
            return false;
          }
        
          // Verificar caracteres especiais exeto espaço
          if (/[^a-zA-Z0-9À-ÖØ-Þ\s]/.test(texto)) {
            alert(alertTextoForaDoPadrao);
            console.log("3")
            startPage();
            return false;
          }
        
          // Verificar acentuação
          if (/[À-ÖØ-Þà-öø-ÿ]/.test(texto)) {
            alert(alertTextoForaDoPadrao);
            console.log("4")
            startPage();
            return false;
          }
        
          // Se não houver letras maiúsculas, caracteres especiais ou acentuação, retornar true
          return true;
    }
    
    function alternaSection(){
        
        texto_vazio.style.display = "none";
        saida_texto_codificado.style.display = "block";
    }

    function lerTextoEntrada(){
        return document.getElementById("texto_entrada").value;
    }

    function codificar(){
        let texto_entrada = lerTextoEntrada();
        if(verificaTexto(texto_entrada)){
            const texto_saida = texto_entrada
                .replace(/e/g,"enter")
                .replace(/i/g,"imes")
                .replace(/a/g,"ai")
                .replace(/o/g,"ober")
                .replace(/u/g,"ufat");

            alternaSection();
            document.getElementById("texto_codificado").textContent = texto_saida;

        }
        
    }

    function decodificar() {
        let texto_entrada = lerTextoEntrada();
        if(verificaTexto){
            const texto_decodificado = texto_entrada
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")    
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
    
            alternaSection();
            document.getElementById("texto_codificado").textContent = texto_decodificado;
        }
     
    }

    function copiarTexto(){
        const texto = document.getElementById("texto_codificado").innerText;  
        navigator.clipboard.writeText(texto);
        alert(alertCopiadoComSucesso);
    }

    startPage();

    document.getElementById("botao_codifica").addEventListener("click", codificar);
    document.getElementById("botao_decodifica").addEventListener("click", decodificar);7
    document.getElementById("botao_copiar").addEventListener("click", copiarTexto);

});



