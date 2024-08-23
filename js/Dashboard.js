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

const ctx1 = document.getElementById('grafico1');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      datasets: [{
        label: 'Empréstimos',
        data: [0, 0, 2,4,7,2,5 ],
        borderWidth: 1,
        backgroundColor: '#006666',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('grafico2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      datasets: [{
        label: 'Alugueis',
        data: [0, 0, 2,6,3,1,4 ],
        borderWidth: 1,
        backgroundColor: '#8B8989',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });