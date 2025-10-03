const avança = document.querySelectorAll('.btn-proximo');

avança.forEach(button => {
   button.addEventListener('click, funcion'(){
       const atual = document.querySelector('.ativo')
       const proximoPasso = 'passo-' + this. getAttribute('data-proximo');
 
       atual.classList.remove('ativo');
       document.getElementyById(proximoPasso).classList.add('ativo');
    })
})

