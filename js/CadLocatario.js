
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

function abrirDados(){
    const modalDados = document.getElementById('JmodalDados')
    modalDados.classList.add('abrirDados')

    modalDados.addEventListener('click', (e) => {
        if(e.target.id == 'fecharDados' || e.target.id == 'JmodalDados'){
            modalDados.classList.remove('abrirDados')
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

function Deletar(){
    const modalDel = document.getElementById('JmodalDel')
    modalDel.classList.add('abrirDel')

    modalDel.addEventListener('click', (e) => {
        if(e.target.id == 'JmodalDel' || e.target.id == 'Nao' || e.target.id == 'Sim'){
            modalDel.classList.remove('abrirDel')
        }
})

}

function DelS(){
    const modalDelS = document.getElementById('JmodalDelS')
    modalDelS.classList.add('abrirDelS') 

    modalDelS.addEventListener('click', (e) => {
        if(e.target.id == 'fecharDelS' || e.target.id == 'JmodalDelS'){
            modalDelS.classList.remove('abrirDelS')
        }

})

}