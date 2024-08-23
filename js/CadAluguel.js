function Navbar(){
    header.style.width = '119.3%';
    main.style.width = '1060px';
    tablat.style.display = 'none';
    if( tablat.style.display == 'none'){
        tablatM.style.display = 'flex'
    }
        
}

function NavbarM(){
    main.style.width = '920px';
    header.style.width = '121.6%';
    tablatM.style.display = 'none';
    if( tablatM.style.display == 'none'){
        tablat.style.display = 'flex'
    }
    
}

function abrirNovo(){
    const modal = document.getElementById('Jmodal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'Jmodal'){
            modal.classList.remove('abrir')
        }
})

}

function Devolvido(){
    const modalDev = document.getElementById('JmodalDev')
    modalDev.classList.add('abrirDev')

    modalDev.addEventListener('click', (e) => {
        if(e.target.id == 'fecharDev' || e.target.id == 'JmodalDev'){
            modalDev.classList.remove('abrirDev')
        }
})

}

function EditarDados(){
    const modalEditar = document.getElementById('JmodalEditar')
    modalEditar.classList.add('abrirEditar')

    modalEditar.addEventListener('click', (e) => {
        if(e.target.id == 'fecharEditar' || e.target.id == 'JmodalEditar'){
            modalEditar.classList.remove('abrirEditar')
        }
})

}

function Suc(){
    const modalSuc = document.getElementById('JmodalSuc')
    modalSuc.classList.add('abrirSuc') 

    modalSuc.addEventListener('click', (e) => {
        if(e.target.id == 'fecharSuc' || e.target.id == 'JmodalSuc'){
            modalSuc.classList.remove('abrirSuc')
        }

})

}
