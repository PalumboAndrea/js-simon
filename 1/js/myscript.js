/*

 */

let count = 0;

let gameOver = false;

let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    
    if (!gameOver){
        if (count < 10){
            count = count +1;
            button.innerHTML = '#' + count;
        } else {
            gameOver = true;
            setTimeout(() => {
                gameOver = false;
                
            })
        }
    }

})
    

function special (a){
    a.classList.add("red");
}





























