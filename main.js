const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const stepCircle1 = document.getElementById('stepCircle1')
const stepCircle1Inside = document.getElementById('step-circle-1')
const stepCircle2 = document.getElementById('stepCircle2')
const stepCircle2Inside = document.getElementById('step-circle-2')
const stepCircle3 = document.getElementById('stepCircle3')
const stepCircle3Inside = document.getElementById('step-circle-3')
const stepCircle4 = document.getElementById('step-circle-4')
const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')
const check3 = document.getElementById('check3')
const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const screen3 = document.getElementById('screen3')
const screen4 = document.getElementById('screen4')


const btnNext = document.getElementById('btn-next')
const btnGoToVideoCall = document.getElementById('btn-goToVideoCall')

let step = 1

btnNext.addEventListener( 'click', () => {
    step++
    if(step === 2){
        line1.classList.add('full') //Dibuja la primer linea
        stepCircle2Inside.classList.add('active') //Activamos el relleno en el circulo 2
        check1.classList.remove('hide') //Desocultamos el icono de check
        stepCircle1.classList.add('hide') // Oculta el primer circulo
        stepCircle1Inside.classList.add('hide') // Oculta el primer relleno del primer circulo
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        console.log('primero');
    }
    
    if(step === 3){
        line2.classList.add('full') //Dibuja la segunda linea
        stepCircle3Inside.classList.add('active') // Rellena el tercer círculo
        check2.classList.remove('hide') //Desocultamos el icono de check
        stepCircle2.classList.add('hide') // Oculta el primer circulo
        stepCircle2Inside.classList.add('hide') // Oculta el primer relleno del primer circulo
        screen2.classList.add('hide')
        screen3.classList.remove('hide')
        console.log('segundo');

        btnNext.classList.add('hide')
        btnGoToVideoCall.classList.remove('hide')
        
    }
    
    if(step === 4){
        line3.classList.add('full') 
        stepCircle4.classList.add('active')
        check3.classList.remove('hide') //Desocultamos el icono de check
        stepCircle3Inside.classList.add('hide') // Oculta el primer relleno del primer circulo
        stepCircle3.classList.add('hide') // Oculta el primer circulo
        screen3.classList.add('hide')

        console.log('tercer');
    }



} )