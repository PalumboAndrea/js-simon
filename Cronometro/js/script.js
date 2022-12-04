let tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let millsec = 00;

let appendMillsec = document.getElementById('millsec');

let sec = 00;

let appendSec = document.getElementById('sec');

let min = 00;

let appendMin = document.getElementById('min');



let millsecIntervall;

function stopwatch (){
    millsec++;

    if (millsec<9){
        appendMillsec.innerHTML = '0' + millsec;
    }

    if (millsec >= 10){
        appendMillsec.innerHTML = millsec;
    }

    if (millsec > 99){
        millsec=0;
        appendMillsec.innerHTML = '0' + 0;
        sec++;
        appendSec.innerHTML = '0' + sec;
    }

    if (sec>9){
        appendSec.innerHTML = sec;
    }

    if (sec>59){
        sec = 0;
        appendSec.innerHTML = '0' + 0;
        min++;
        appendMin.innerHTML = '0' + min;
    }

}

start.addEventListener ('click', function(){
    clearInterval(millsecIntervall);
    millsecIntervall = setInterval(stopwatch, 10);
})


pause.addEventListener ('click', function(){
    clearInterval(millsecIntervall);
})

reset.addEventListener ('click', function(){
    clearInterval(millsecIntervall);
    appendMillsec.innerHTML = '00';
    appendSec.innerHTML = '00';
    appendMin.innerHTML = '00';
})
