const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const form = document.getElementById('form');

document.onclick = function(e){
    if(!e.target.closest('#toggle') && !e.target.closest ('#sidebar'))
    {
        toggle.classList.remove('is-active');
        sidebar.classList.remove('is-active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
}

form.addEventListener('submit', e =>{
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add('was-validated')
});

