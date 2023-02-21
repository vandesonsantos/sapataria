# Loja de Calçados
Tênis, Bota, Sapatilha, Sandália

[<img src="./src\imagens/tela-readme.gif">](https://vandesonsantos.github.io/sapataria/)


## Tecnologias Utilizadas
- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Flexbox
-  Media Query 
- Java Script


## Quer Utilizar o Script Usado No Projeto?
```
const titulo = document.querySelector('[data-titulo]')

function escrita() {
    tituloArray = titulo.innerHTML.split('')
    titulo.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            titulo.innerHTML += letra
        }, i * 75)
    })
}

escrita();
```

## Deploy Do Projeto
- [GitHub Pages](https://vandesonsantos.github.io/sapataria/)


**Divirta-se!** 🚀
