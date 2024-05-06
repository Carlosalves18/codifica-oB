 const clubes = []
const inNome = document.getElementById("inNome");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnlistar = document.getElementById("btListar");
const btnMontarTabela = document.getElementById("btnMontarTabela");
const outList = document.getElementById("outList");

const adicionarClube = () =>{
    const clube = inNome.value

    if(clube === ''){
        alert('Por favor, digite o nome do clube')
        inNome.focus()
        return
    }
    if(!clubes.includes(clube)){
        clubes.push(clube)
    }else{
        alert('Clube já existe')
    }
    inNome.value=''
};

btnAdicionar.addEventListener('click',adicionarClube)

const mostrarCluble = () =>{ 
    if(clubes.length === 0){
        alert('Não clubes cadastrados')
        return
    }
    let lista = ''
    clubes.forEach((clube,index) =>{
        return(lista += `${index + 1}. ${clube}\n`)
    })
    outList.textContent = lista
    console.log("Listar")
};
btnlistar.addEventListener("click",mostrarCluble);

const montarTabela = () =>{
    if(clubes.length === 0 || clubes.length % 2 != 0){
        alert('Erro: Números de times ímpar ou zero')
        return
    }
    console.log(clubes)
    const metadeInicio = clubes.slice(0, clubes.length / 2)
    console.log(metadeInicio)
    const metadeFim = clubes.slice(0, clubes.length / 2, clubes.length).reverse
    console.log(metadeFim)

    let list = ''
    for (let i = 0; i < metadeInicio; i++){
        lista += `${i + 1}º Jogo - ${metadeInicio[i]} x ${metadeFim[i]}\n`
    }
    outList.textContent = lista;
}

btnMontarTabela.addEventListener("click",montarTabela)

