document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("texto_entrada").value = "";

    const saida_texto_codificado = document.getElementById("saida_texto_codificado");
    const texto_vazio = document.getElementById("texto_vazio");

    saida_texto_codificado.style.display = "none";
    texto_vazio.style.display = "block";

    /**Sessão Codifica */
    function codificar(){

        const texto_entrada = document.getElementById("texto_entrada").value;
        const texto_saida = texto_entrada
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/e/g,"enter")
        .replace(/o/g,"obter")
        .replace(/u/g,"ufat")
    
        document.getElementById("texto_codificado").textContent = texto_saida;
    }

    function alternaSection(){
        
        texto_vazio.style.display = "none";
        saida_texto_codificado.style.display = "block";
        codificar();
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

        const texto_codificado = document.getElementById("texto_codificado").value;
        const inputElement = document.createElement("input");
        inputElement.value = texto_codificado;
        document.body.appendChild(inputElement);
        inputElement.select();

        navigator.clipboard.writeText(texto_codificado)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        })
        .finally(() => {
            document.body.removeChild(inputElement);
        });

    }



    const botao_copiar = document.getElementById("botao_copiar");
    botao_copiar.addEventListener("click", copiar_texto);

    

    
});



