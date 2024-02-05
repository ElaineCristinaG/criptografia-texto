# Decodificador
Este projeto codifica e descodifica um texto de entrada. Possui a opção de copiar o resultado de saída para área de transferencia
## Tecnologias que estão presentes em meus projetos aqui no github
<div>
<a href="https://github.com/ElaineCristinaG/decodificador/">
<img loading="lazy" height="185em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ElaineCristinaG&layout=compact&langs_count=7&theme=dracula"/>
  <img loading="lazy" height="180em" src="https://github-readme-stats.vercel.app/api?username=ElaineCristinaG&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
</div>
  
## Desenvolvimento
Neste projeto foi utilizado html5, css3 e javascript puro para treinamento e aprendizado de estruturas frontend.\
Foi aplicado a responsividade garantindo a adaptação da renderização dos componentes à diferentes formatos de telas como notebook, monitores e celulares.\
No arquivo de estilização foi utilizado variáveis de estilos diminuindo a repetição de código e tornando o script mais legível e facilitanto a manutenção de futuras mudanças que possam vir a ocorrer, atendendo assim crítérios previstos na prática do "Code Clean".

## Utilizando o site Decodificador
Insira na area de entrada de texto quaisquer texto em letras minúsculas e sem caracteres especiais. Observe as mensagens orientadoras para texto onde não atendem os requisitos acima citados. Clik no botão "encriptografar" e o texto codificado aparecerá na área de saída de texto sendo possível copiar no botão "copiar" visível apenas após criptografar ou descriptografar algum conteúdo de texto. 

## Regras da Criptografia 
Este tratamento é feito através de funções no arquivo .js .\
chaves criptográficas:
* A letra "e" é convertida para "enter"
* A letra "i" é convertida para "imes"
* A letra "a" é convertida para "ai"
* A letra "o" é convertida para "ober"
* A letra "u" é convertida para "ufat"

## Verificação do texto
Também de responsabilidade do arquivo .js criei funções com regex(expressões regulares) que verificam:
* texto vazio
* números
* caracteres especiais, exeto espaço
* acentuação

Para os casos citados existe alertas ao usuário com mensagens, indicando que existe alguma desses itens acima citados, impossibilitando a criptografia ou a descriptografia.




