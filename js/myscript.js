/*

 */

let count = 0;

console.log(count)

let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    
    if (count <= 9){
        count = count +1;
        button.innerHTML = '#' + count;
    } else{
        setTimeout()
    }
})

function special (a){
    a.classList.add("red");
}





























