
/*giveboxes */
let giveBoxses = document.querySelectorAll('.givebox')

let counter = 0

giveBoxses.forEach(el =>{
    el.addEventListener('click',()=>{
        el.textContent = 'Не тут'
        el.classList.add('active')
        console.log(counter)
        updateCounter()
    })
     
})

function updateCounter(){
   counter ++
   
    if(counter == 3) {
     openModal()
     giveBoxses.forEach(el =>{
        el.classList.remove('active')
        el.textContent = ' '
     })
    }
}


/*modal*/
let modal = document.getElementById('modal');

function openModal(){
  modal.style.display = 'block';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    window.open('https://www.traffic-devils.com/', '_blank');
    location.reload();
  }
}

/*Dyson */

document.getElementById('dyson').addEventListener('click',(e)=>{
  e.preventDefault()
  document.getElementById('giveaway').classList.remove('none')
  document.getElementById('giveaway').scrollIntoView({ block:'center',behavior:'smooth'})
})

/*Scroll*/

document.getElementById('question').addEventListener('click',()=>{
  document.querySelector('.form').style.display = 'block'
  document.querySelectorAll('.hat').forEach(el => el.style.display ='none')
  document.querySelector('.header').style.height ='1px'
  document.querySelector('.form').scrollIntoView({ block:'center',behavior:'smooth'})
})

/*Another */



document.getElementById('link').addEventListener('click', function() {
  window.open('https://www.traffic-devils.com/', '_blank');
  location.reload();
});


