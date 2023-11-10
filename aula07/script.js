console.log(receitaList)

receitaList.forEach(receita =>{

    const receitaDiv = document.createElement("div")
    receitaDiv.classList.add("receita")

    const tituloReceitaH3 = document.createElement("h3")
    tituloReceitaH3.classList.add("receita--titulo")
    tituloReceitaH3.textContent = receita.nome

    receitaDiv.appendChild(tituloReceitaH3)
    const receitasContainer = document.querySelector(".receitas")
    receitasContainer.appendChild(receitaDiv)
    


})