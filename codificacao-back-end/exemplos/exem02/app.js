const erros = [];
const  sorteado =Math.floor (Math.random() * 100) + 1
const tentativas = 6

const inNumero = document.getElementById('inNumero');
const btnApostar = document.getElementById('btnApostar');
const btnJogarNovamente = document.getElementById('btnJogar');
const outErros = document.getElementById('btnJogar');
const outChances = document.getElementById('outChances');
const outDica = document.getElementById('outDica');

const apostarNumero = () => {
    const numero = Number(inNumero.value)
    if(numero === 0 || isNaN(numero)) {
        alert("Numero invalido")
        return;
    }

    if(numero == sorteado){
        alert('Voce acertou!');
        btnApostar.disable = true
        outDica.textContent = 'Parabens!! Voce Acertou'
    }else{
       if(erros.indexOf(numero) >= 0){
        alert('Vocé já apostou o numero, tente outro')
       }else{
        erros.push(numero)
        let numeroErros = erros.length
        let numeroChances = tentativas - numeroErros
        
        outErros.textContent = `${numeroErros} (${erros.join(', ')})`
        outChances.textContent = numeroChances

        if(numeroChances === 0){
            btnApostar.disable = true
            outDica.textContent = `Você perdeu! numero sorteador ${sorteado}`
        }else{
            let dica = numero < sorteado ? 'Maior' : 'Menor'
            outDica.textContent = `Dica tente um numero ${dica} do que ${numero}`
        }

        }
        
    }
        //console.log('ERROU!')
        //comparar se o numero digitad ja foi digitdado
        // adiciono o numero ao array de erros e crio a dica
    }
     console.log(erros)
     inNumero.value =''

    //    if(numero === 0 || isNaN)

       inNumero.value = ''
       
btnApostar.addEventListener('click', apostarNumero)

const jogarDeNovo = ()=>{
    window.location.reload();
}
btnJogarNovamente.addEventListener("click", () =>{
});
btnJogarNovamente.addEventListener("click", jogarDeNovo );

