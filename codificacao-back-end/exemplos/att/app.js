const Crianca = []

const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");

const outLista = document.getElementById("outLista");

const adicionarNC = () =>{
    const nome = inNome.value
    const idade = Number(inIdade.value)

    if(nome === '' || idade === 0 || isNaN(idade)){
        alert('Digite as idades das crinças  corretamente')
        return
    }
    Crianca.push({nome: nome, idade: idade})
    console.log(Crianca)
    inNome.value=''
    inIdade.value =''
};

btnAdicionar.addEventListener("click",adicionarCarro);

const listarCarros = () =>{
    if(carros.length == 0){
        alert('Não carro no sistema')
        return
    }
    let lista = ''
    carros.forEach((carro) => {
        return lista += `${carro.modelo} - R$${carro.preco} \n`

    })
    // console.log(lista)
    outLista.textContent = lista
};
btnListar.addEventListener('click',listarCarros);

const filtrarPorPreco = () => {
    const valorMaximo = Number(prompt('Digita o valor máximo'))

    if(valorMaximo === 0 || isNaN(valorMaximo)){
        alert('Preencha o campo corretamente')
        return
    }

    const carrosFiltros = carros.filter((carro) => carro.preco <= valorMaximo)

    console.log(carrosFiltros)

    let lista = ''
    carrosFiltros.forEach((carro) =>{
        return(lista += `${carro.modelo} - R$${carro.preco} \n`)
    });
    outLista.textContent = lista;

};
btnFiltrar.addEventListener('click', filtrarPorPreco);