let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let footer = document.querySelector('footer')
let body = document.querySelector('body')

btn.addEventListener('click', trocarModo)

function trocarModo(){
    if(h1.innerText == 'Light Mode ON'){
        body.classList.add('body-dark')
        btn.classList.add('btn-dark')
        h1.classList.add('h1-dark')
        footer.classList.add('footer-dark')

        h1.innerHTML = 'Dark Mode ON'
        btn.innerHTML = 'Light Mode'
        
    } else {
        h1.innerHTML = 'Light Mode ON'
        btn.innerHTML = 'Dark Mode'

        body.classList.remove('body-dark')
        h1.classList.remove('h1-dark')
        footer.classList.remove('footer-dark')
        btn.classList.remove('btn-dark')
    }
    
}