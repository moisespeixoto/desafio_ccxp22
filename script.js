const ingressos = [];
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = '26 august 2030'

function cronometro(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = `${formatoTempo(finalHoras)}H`
    minuto.innerHTML = `${formatoTempo(finalMinutos)}M`
    segundo.innerHTML = `${formatoTempo(finalSegundos)}S`
}
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

cronometro();
setInterval(cronometro, 1000)

function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}
function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        //Alert the key name and key code on keydown
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}
function addKeyboardEventListeners()
{
document.addEventListener('keydown', (event) => {
    
    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");

    var code = event.code;
    if(code == 'Digit1')
    {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2')
    {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3'){
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4'){
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    }
}, false);
}
selecCard = (selector) =>
{
    var element = document.querySelector(selector);
        element.classList.toggle("card-selected");
        if(ingressos.includes(selector)) ingressos.pop(selecCard);
        else ingressos.push(selector)
}

showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}







addKeyboardEventListeners()