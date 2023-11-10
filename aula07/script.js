console.log(receitaList)

const criarElem = (Tipo, Classe, Prop, Conteudo, elemPai) => {

    const obj = document.createElement(Tipo)
    obj.classList.add(Classe)
    obj[Prop] = Conteudo

    elemPai.appendChild(obj)

    return obj
}

receitaList.forEach(receita =>{

    const receitaDiv = document.createElement("div")
    receitaDiv.classList.add("receita")

    //titulos
    criarElem("h3", "receita_titulo", "textContent", receita.nome, receitaDiv)
    
    
   //subtitulos
    criarElem("p", "receita__titulo", "textContent", receita.descricao, receitaDiv)

    //imagens
    criarElem("img", "receita__figura", "src", receita.foto, receitaDiv)




    //h4 - titulo dos ingredientes
    criarElem("h4", "receita__ingredientes", "textContent", "Ingredientes", receitaDiv)

    //ul - ingredientes
    const ulDaVez = criarElem("UL", "receita__ingredientes", "", "", receitaDiv)
    receita.ingredientes.forEach(item =>{
        //li
        criarElem("li", "receita__item", "textContent", item, ulDaVez)
    })




    //h4 - titulo do preparo
    criarElem("h4", "receita__preparo-titulo", "textContent", "Modo de Preparo", receitaDiv)

    //ol - modo de preparo
    const olDaVez = criarElem("ol", "receita__preparo-lista", "", "", receitaDiv)
    receita.preparo.forEach(item =>{
        //li
        criarElem("li", "receita__item", "textContent", item, olDaVez)
    })









    const receitaContainer = document.querySelector(".receitas")
    receitaContainer.appendChild(receitaDiv)


})