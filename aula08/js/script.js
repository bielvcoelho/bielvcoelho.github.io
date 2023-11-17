const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

const criarElem = (elemPai, tipo, classe,  prop, conteudo ) => {
    const obj = document.createElement(tipo)
    obj.classList.add(classe)
    obj[prop] = conteudo
    elemPai.appendChild(obj) 
    return obj
}


const chamarFilmes = lista => {
    
    const getFilmeByID = (id) => lista.find(elem => id == elem.id)

    
    lista.forEach(card =>{

        const cardDiv = document.querySelector(".container")

        //criar o card
        const filmeCard = criarElem (cardDiv, "div", "filme")

        //criar a imagem do filme
        criarElem (filmeCard, "img", "filme__imagem", "src", card.figura)

        //criar o titulo do filme
        criarElem (filmeCard, "h1", "filme__titulo", "textContent", card.titulo)

        //criar a classificação do filme
        criarElem (filmeCard, "div", "filme__classificacao", "textContent", card.classificacao)

        //criar genero do filme
        criarElem (filmeCard, "p", "filme__genero", "textContent", card.generos)

        //criar elenco do filme
        criarElem (filmeCard, "p", "filme__elenco", "textContent", card.elenco)

        //criar resumo do filme
        criarElem (filmeCard, "p", "filme__resumo", "textContent", card.resumo)

        //criar resumo do filme
        const divcard = criarElem (filmeCard, "div", "card-card")


        //criar a imagem dos filmes semelhantes
        card.titulosSemelhantes.forEach((semelhantesID,indice, lista) =>{
            const filmeSemelhante = getFilmeByID(semelhantesID, lista)
            console.log(filmeSemelhante)
            criarElem (divcard, "img", "filme__imagem", "src", filmeSemelhante.figura)
        })


    })

}

// usando fetch e declarando a função como assíncrona
const fazerRequisicaoViaFetch = async url => {
    const respostaDaPromessa = await fetch(url)
    const listaDosFilmes =  await respostaDaPromessa.json()
    
    chamarFilmes(listaDosFilmes)
}

fazerRequisicaoViaFetch(url)




