
const contentAll = document.querySelectorAll('.content-all')

for (let item of contentAll ) {

   const button = item.querySelector('p')
   const contentShow = item.querySelector('.content-recipe')

   button.addEventListener("click", function(){
       if(button.innerHTML == "ESCONDER"){
           contentShow.classList.add('hide')
           button.innerHTML = "MOSTRAR"

       }else if (button.innerHTML == "MOSTRAR"){
           contentShow.classList.remove('hide')
           button.innerHTML = "ESCONDER"
       }
   
    })
}