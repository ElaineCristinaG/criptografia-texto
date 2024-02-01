document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("texto_entrada").value = "";
    document.getElementById("botao_decodifica").disabled = true;
    document.getElementById("botao_codifica").disabled = false;

    const saida_texto_codificado = document.getElementById("saida_texto_codificado");
    const texto_vazio = document.getElementById("texto_vazio");

    saida_texto_codificado.style.display = "none";
    texto_vazio.style.display = "block";

    function habilitaDesabilitaBotoes(){
        document.getElementById("botao_decodifica").disabled = false;
    }

    /**Sessão Codifica */
    function codificar(){

        const texto_entrada = document.getElementById("texto_entrada").value;
        const texto_saida = texto_entrada
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"obter")
        .replace(/u/g,"ufat")
    
        document.getElementById("texto_codificado").textContent = texto_saida;
    }

    function alternaSection(){
        
        texto_vazio.style.display = "none";
        saida_texto_codificado.style.display = "block";
        codificar();
        habilitaDesabilitaBotoes();
    }

    function verifica_texto_entrada(){
        const verifica_texto = document.getElementById("texto_entrada").value;
        if(verifica_texto != ""){
            alternaSection()
        }else{
            alert("Digite um texto de entrada!")
        }
    }

    const botao_codificar = document.getElementById("botao_codifica");
    botao_codificar.addEventListener("click", alternaSection);

    /**sessão decodifica */

    function decodificar() {
        const texto_codificado = document.getElementById("texto_codificado").textContent;
        let texto_decodificado = texto_codificado
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/obter/g, "o")
            .replace(/ufat/g, "u");
    
        document.getElementById("texto_codificado").textContent = texto_decodificado;
    }
    
    const botao_decodifica = document.getElementById("botao_decodifica");
    botao_decodifica.addEventListener("click", decodificar);

    function copiar_texto(){

        const texto = document.getElementById("texto_codificado").innerText;  
        navigator.clipboard.writeText(texto);
      
    }

    const botao_copiar = document.getElementById("botao_copiar");
    botao_copiar.addEventListener("click", copiar_texto);

    

    
});



